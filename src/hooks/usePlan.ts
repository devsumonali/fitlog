'use client';

import { useContext } from 'react';
import { PlanContext } from '@/context/PlanContext';

export function usePlan() {
     const context = useContext(PlanContext);
     if (!context) throw new Error('usePlan must be used inside PlanProvider');
     return context;
}
