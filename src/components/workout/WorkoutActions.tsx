'use client';

import { usePlan } from '@/hooks/usePlan';
import { PLAN_LIMIT } from '@/lib/plan';
import type { Workout } from '@/types/workout';
import { Bookmark, CalendarPlus } from 'lucide-react';

export default function WorkoutActions({ workout }: { workout: Workout }) {
     const { today, saved, completed, ready, dispatch } = usePlan();
     const added = today.some((item) => item.id === workout.id);
     const isSaved = saved.some((item) => item.id === workout.id);
     const full = today.filter((item) => !completed.includes(item.id)).length >= PLAN_LIMIT;
     return (
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
               <button
                    type="button"
                    disabled={!ready || added || full}
                    onClick={() => dispatch({ type: 'add', workout })}
                    className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-accent px-5 py-3 text-[13px] font-semibold text-black transition hover:bg-accent-bright disabled:opacity-50"
               >
                    <CalendarPlus size={17} />
                    {added
                         ? 'Already in your plan'
                         : full
                           ? 'Plan full — finish a lift'
                           : "Add to today's plan"}
               </button>
               <button
                    type="button"
                    disabled={!ready || isSaved}
                    onClick={() => dispatch({ type: 'save', workout })}
                    className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-border bg-transparent px-5 py-3 text-[13px] font-medium text-text-light transition hover:bg-white/5 disabled:opacity-50"
               >
                    <Bookmark size={16} />
                    {isSaved ? 'Saved for later' : 'Save for later'}
               </button>
          </div>
     );
}
