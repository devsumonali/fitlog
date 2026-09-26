'use client';

import { emptyPlan, readPlan, updatePlan, type PlanAction, type PlanData } from '@/lib/plan';
import { useSyncExternalStore } from 'react';
import toast from 'react-hot-toast';

const STORAGE_KEY = 'fitlog-plan-v1';
let snapshot: PlanData | null = null;
const listeners = new Set<() => void>();
const emit = () => listeners.forEach((listener) => listener());
const getSnapshot = () => snapshot;
const getServerSnapshot = () => null;

function load() {
     try {
          snapshot = readPlan(localStorage.getItem(STORAGE_KEY));
     } catch {
          snapshot = emptyPlan;
     }
}

function onStorage(event: StorageEvent) {
     if (event.key === STORAGE_KEY || event.key === null) {
          load();
          emit();
     }
}

function subscribe(listener: () => void) {
     if (listeners.size === 0) {
          load();
          window.addEventListener('storage', onStorage);
     }
     listeners.add(listener);
     return () => {
          listeners.delete(listener);
          if (listeners.size === 0) window.removeEventListener('storage', onStorage);
     };
}

function dispatch(action: PlanAction) {
     if (!snapshot) return;
     const result = updatePlan(snapshot, action);
     if (result.error) {
          toast.error(result.message);
          return;
     }
     snapshot = result.data;
     emit();
     try {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(snapshot));
          toast.success(result.message);
     } catch {
          toast.error(
               'Updated for this visit, but browser storage is unavailable. Changes may be lost on reload.',
          );
     }
}

export function usePlan() {
     const data = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
     return { ...(data ?? emptyPlan), ready: data !== null, dispatch };
}
