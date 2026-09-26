'use client';

import { useState } from 'react';

import EmptyState from '@/components/plan/EmptyState';
import PlanHeader from '@/components/plan/PlanHeader';
import PlanMetrics from '@/components/plan/PlanMetrics';
import PlanTabs from '@/components/plan/PlanTabs';
import PlanWorkoutCard from '@/components/plan/PlanWorkoutCard';
import PlanWorkOutSavedCard from '@/components/plan/PlanWorkOutSavedCard';
import SortDropdown from '@/components/plan/SortDropdown';
import { usePlan } from '@/hooks/usePlan';
import { sortWorkouts, type SortBy } from '@/lib/plan';

const MyPlanPage = () => {
     const [activeTab, setActiveTab] = useState<'today' | 'saved'>('today');
     const { today: todayPlan, saved: savedWorkouts, ready } = usePlan();
     const [sortBy, setSortBy] = useState<SortBy>('duration');
     const currentWorkouts = activeTab === 'today' ? todayPlan : savedWorkouts;
     const visibleWorkouts = sortWorkouts(currentWorkouts, sortBy);

     return (
          <section className="my-6 py-5 lg:my-12.5 lg:py-0" aria-label="My plan">
               <div className="container-custom">
                    <PlanHeader />

                    <div className="mt-6">
                         <PlanMetrics workouts={currentWorkouts} />
                    </div>

                    <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                         <PlanTabs activeTab={activeTab} setActiveTab={setActiveTab} />

                         <SortDropdown value={sortBy} onChange={setSortBy} />
                    </div>

                    <div className="mt-6 space-y-4">
                         {!ready ? (
                              <p role="status" className="py-12 text-center text-text-secondary">
                                   Loading workouts...
                              </p>
                         ) : currentWorkouts.length === 0 ? (
                              <EmptyState />
                         ) : (
                              visibleWorkouts.map((workout) =>
                                   activeTab === 'today' ? (
                                        <PlanWorkoutCard key={workout.id} workout={workout} />
                                   ) : (
                                        <PlanWorkOutSavedCard key={workout.id} workout={workout} />
                                   ),
                              )
                         )}
                    </div>
               </div>
          </section>
     );
};

export default MyPlanPage;
