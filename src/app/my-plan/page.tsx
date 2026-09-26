'use client';

import { useState } from 'react';

import EmptyState from '@/components/plan/EmptyState';
import PlanHeader from '@/components/plan/PlanHeader';
import PlanMetrics from '@/components/plan/PlanMetrics';
import PlanTabs from '@/components/plan/PlanTabs';
import PlanWorkoutCard from '@/components/plan/PlanWorkoutCard';
import SortDropdown from '@/components/plan/SortDropdown';
import PlanWorkOutSavedCard from '@/components/plan/PlanWorkOutSavedCard';
import { usePlan } from '@/hooks/usePlan';
import { filterWorkouts, sortWorkouts, type SortBy } from '@/lib/plan';

const MyPlanPage = () => {
     const [activeTab, setActiveTab] = useState<'today' | 'saved'>('today');
     const { today: todayPlan, saved: savedWorkouts, ready } = usePlan();
     const [query, setQuery] = useState('');
     const [sortBy, setSortBy] = useState<SortBy>('duration');
     const currentWorkouts = activeTab === 'today' ? todayPlan : savedWorkouts;
     const visibleWorkouts = sortWorkouts(filterWorkouts(currentWorkouts, query), sortBy);

     return (
          <section className="my-6 p-5 lg:my-12.5 lg:p-0" aria-label="My plan">
               <div className="container-custom">
                    <PlanHeader />

                    <div className="mt-6">
                         <PlanMetrics workouts={todayPlan} />
                    </div>

                    <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                         <PlanTabs activeTab={activeTab} setActiveTab={setActiveTab} />

                         <SortDropdown value={sortBy} onChange={setSortBy} />
                    </div>

                    <label className="mt-6 block">
                         <span className="sr-only">Search your plan by workout name or tag</span>
                         <input type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder="Search by workout name or tag..." className="w-full rounded-xl border border-border bg-card px-4 py-3 text-[14px] outline-none focus:border-accent" />
                    </label>
                    <div className="mt-6 space-y-4">
                         {!ready ? (
                              <p role="status" className="py-12 text-center text-text-secondary">Loading workouts...</p>
                         ) : currentWorkouts.length === 0 ? (
                              <EmptyState />
                         ) : visibleWorkouts.length === 0 ? (
                              <p role="status" className="py-12 text-center text-text-secondary">No workouts match your search.</p>
                         ) : (
                              visibleWorkouts.map(workout => activeTab === 'today' ? (
                                   <PlanWorkoutCard key={workout.id} workout={workout} />
                              ) : (
                                   <PlanWorkOutSavedCard key={workout.id} workout={workout} />
                              ))
                         )}
                    </div>
               </div>
          </section>
     );
};

export default MyPlanPage;
