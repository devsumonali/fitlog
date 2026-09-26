'use client';

import Link from 'next/link';
import { usePlan } from '@/hooks/usePlan';
import { Workout } from '@/types/workout';
import { Clock3, Flame, Star, X } from 'lucide-react';
import Image from 'next/image';

type PlanWorkoutCardProps = {
     workout: Pick<
          Workout,
          'id' | 'name' | 'equipment' | 'image' | 'duration' | 'caloriesBurned' | 'rating'
     >;
     variant?: 'today' | 'saved';
};

const PlanWorkOutSavedCard = ({ workout }: PlanWorkoutCardProps) => {
     const { dispatch } = usePlan();
     return (
          <article className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-4 md:flex-row md:items-center md:justify-between">
               <div className="flex min-w-0 items-center gap-4">
                    <div className="relative h-20 w-24 shrink-0 overflow-hidden rounded-xl bg-card-secondary sm:w-36">
                         <Image
                              src={workout.image}
                              alt="Illustration of a gym exercise"
                              fill
                              sizes="(min-width: 640px) 144px, 96px"
                              className="object-cover"
                         />
                    </div>
                    <div className="min-w-0">
                         <h2 className="font-heading text-[18px] font-bold uppercase leading-tight">
                              {workout.name}
                         </h2>
                         <p className="mt-1 text-[12px] text-text-secondary">{workout.equipment}</p>
                         <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-2 text-[12px] text-text-light">
                              <span className="inline-flex items-center gap-1.5">
                                   <Clock3 size={14} className="text-accent" aria-hidden="true" />
                                   {workout.duration} min
                              </span>
                              <span className="inline-flex items-center gap-1.5">
                                   <Flame
                                        size={14}
                                        className="fill-accent text-accent"
                                        aria-hidden="true"
                                   />
                                   {workout.caloriesBurned} kcal
                              </span>
                              <span className="inline-flex items-center gap-1.5">
                                   <Star size={14} className="text-accent" aria-hidden="true" />
                                   <span className="sr-only">Rating: </span>
                                   {workout.rating}
                              </span>
                         </div>
                    </div>
               </div>
               <div className="flex shrink-0 flex-wrap items-center justify-end gap-3">
                    <Link
                         href={`/workout/${workout.id}`}
                         className="rounded-full border border-border px-4 py-2 text-[12px] text-text-primary"
                    >
                         View Details
                    </Link>

                    <button
                         type="button"
                         onClick={() => dispatch({ type: 'remove-saved', id: workout.id })}
                         aria-label={`Remove ${workout.name}`}
                         className="flex size-8 items-center justify-center text-text-muted"
                    >
                         <X size={16} strokeWidth={1.5} aria-hidden="true" />
                    </button>
               </div>
          </article>
     );
};

export default PlanWorkOutSavedCard;
