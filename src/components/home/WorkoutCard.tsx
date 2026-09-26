import { Workout } from '@/types/workout';
import { Clock3, Flame, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

type WorkOutCardProps = {
     workout: Workout;
};

const WorkoutCard = ({ workout }: WorkOutCardProps) => {
     return (
          <article className="group relative overflow-hidden rounded-3xl border border-border bg-card">
               {/* Image */}
               <div className="relative h-62.5 w-full overflow-hidden">
                         <Image
                              src={workout.image}
                              alt="Workout"
                              fill
                              className="object-cover transition-transform duration-300 group-hover:scale-105"
                         />
               </div>

               {/* Card Content */}
               <div className="p-6">
                    {/* Tags */}
                    <div className="mb-6 flex flex-wrap items-center gap-3">
                         {workout.muscleGroups.map((group) => (
                              <span
                                   key={group}
                                   className="rounded-full bg-accent px-4 py-1.5 text-[12px] font-bold uppercase text-black"
                              >
                                   {group}
                              </span>
                         ))}
                    </div>

                    {/* Title */}
                    <h3 className="font-heading text-[24px] font-bold uppercase leading-tight text-text-primary">
                         <Link href={`/workout/${workout.id}`} className="after:absolute after:inset-0 focus-visible:outline-accent">
                              {workout.name}
                         </Link>
                    </h3>

                    {/* Equipment */}
                    <p className="mt-2 font-body text-[15px] text-text-secondary">
                         {workout.equipment}
                    </p>

                    {/* Divider */}
                    <div className="my-6 h-px w-full bg-border" />

                    {/* Stats */}
                    <div className="flex flex-wrap items-center gap-6 text-[14px] text-text-secondary">
                         <div className="flex items-center gap-2">
                              <Clock3 size={17} strokeWidth={1.8} />
                              <span>{workout.duration} min</span>
                         </div>

                         <div className="flex items-center gap-2">
                              <Flame size={17} strokeWidth={1.8} />
                              <span>{workout.caloriesBurned} kcal</span>
                         </div>

                         <div className="flex items-center gap-2">
                              <Star size={18} strokeWidth={1.8} />
                              <span>{workout.rating}</span>
                         </div>
                    </div>
               </div>
          </article>
     );
};

export default WorkoutCard;
