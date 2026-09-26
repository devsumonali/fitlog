'use client';

import { useState } from 'react';
import type { Workout } from '@/types/workout';
import { filterWorkouts } from '@/lib/plan';
import WorkoutCard from './WorkoutCard';

export default function WorkoutSearch({ workouts }: { workouts: Workout[] }) {
     const [query, setQuery] = useState('');
     const visibleWorkouts = filterWorkouts(workouts, query);
     return (
          <>
               <label className="mt-5 block">
                    <span className="sr-only">Search the library by workout name or tag</span>
                    <input type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder="Search by workout name or tag..." className="w-full rounded-xl border border-border bg-card px-4 py-3 text-[14px] outline-none focus:border-accent" />
               </label>
               <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-between">
                    {visibleWorkouts.map(workout => <WorkoutCard key={workout.id} workout={workout} />)}
               </div>
               {visibleWorkouts.length === 0 && <p role="status" className="py-12 text-center text-text-secondary">No workouts match your search.</p>}
          </>
     );
}
