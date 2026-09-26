'use client';

import { createContext, useEffect, useState, type ReactNode } from 'react';
import toast from 'react-hot-toast';
import { emptyPlan, PLAN_LIMIT, readPlan, type PlanData } from '@/lib/plan';
import type { Workout } from '@/types/workout';

type PlanContextValue = {
     today: Workout[];
     saved: Workout[];
     completed: number[];
     ready: boolean;
     addToPlan: (workout: Workout) => void;
     saveWorkout: (workout: Workout) => void;
     markAsDone: (id: number) => void;
     removeWorkout: (id: number, list: 'today' | 'saved') => void;
};

export const PlanContext = createContext<PlanContextValue | null>(null);
const STORAGE_KEY = 'fitlog-plan-v1';

export default function PlanProvider({ children }: { children: ReactNode }) {
     const [plan, setPlan] = useState<PlanData>(emptyPlan);
     const [ready, setReady] = useState(false);

     // Read browser storage after mounting, so server and first client render match.
     useEffect(() => {
          function loadPlan() {
               try {
                    setPlan(readPlan(localStorage.getItem(STORAGE_KEY)));
               } catch {
                    setPlan(emptyPlan);
               }
               setReady(true);
          }

          // Synchronize initial state with browser storage after mounting.
          loadPlan();

          function handleStorage(event: StorageEvent) {
               if (event.key === STORAGE_KEY || event.key === null) loadPlan();
          }

          window.addEventListener('storage', handleStorage);
          return () => window.removeEventListener('storage', handleStorage);
     }, []);

     // Each event handler updates the shared state and saves the same JSON.
     function savePlan(nextPlan: PlanData, message: string) {
          setPlan(nextPlan);
          try {
               localStorage.setItem(STORAGE_KEY, JSON.stringify(nextPlan));
               toast.success(message);
          } catch {
               toast.error('Updated for this visit, but browser storage is unavailable. Changes may be lost on reload.');
          }
     }

     function addToPlan(workout: Workout) {
          if (!ready) return;
          if (plan.today.some((item) => item.id === workout.id)) {
               toast.error('Already in your plan');
               return;
          }
          const activeWorkouts = plan.today.filter((item) => !plan.completed.includes(item.id));
          if (activeWorkouts.length >= PLAN_LIMIT) {
               toast.error('Finish a lift before adding more (maximum five active lifts)');
               return;
          }
          savePlan({ ...plan, today: [...plan.today, workout] }, "Added to today's plan");
     }

     function saveWorkout(workout: Workout) {
          if (!ready) return;
          if (plan.saved.some((item) => item.id === workout.id)) {
               toast.error('Already saved');
               return;
          }
          savePlan({ ...plan, saved: [...plan.saved, workout] }, 'Saved for later');
     }

     function markAsDone(id: number) {
          if (!ready) return;
          if (!plan.today.some((item) => item.id === id) || plan.completed.includes(id)) {
               toast.error('Workout already completed or removed');
               return;
          }
          savePlan({ ...plan, completed: [...plan.completed, id] }, 'Workout marked as done');
     }

     function removeWorkout(id: number, list: 'today' | 'saved') {
          if (!ready) return;
          if (list === 'today') {
               savePlan({
                    ...plan,
                    today: plan.today.filter((item) => item.id !== id),
                    completed: plan.completed.filter((item) => item !== id),
               }, 'Removed from your plan');
          } else {
               savePlan({ ...plan, saved: plan.saved.filter((item) => item.id !== id) }, 'Removed from saved workouts');
          }
     }

     return (
          <PlanContext.Provider value={{
               today: plan.today,
               saved: plan.saved,
               completed: plan.completed,
               ready,
               addToPlan,
               saveWorkout,
               markAsDone,
               removeWorkout,
          }}>
               {children}
          </PlanContext.Provider>
     );
}
