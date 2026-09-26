import { getSingleWorkout } from '@/constants/api';
import WorkoutActions from '@/components/workout/WorkoutActions';
import Image from 'next/image';

type Props = {
     params: Promise<{ id: string }>;
};

const WorkOutDetailsPage = async ({ params }: Props) => {
     const { id } = await params;
     const workout = await getSingleWorkout(id);

     const specs = [
          ['Equipment', workout.equipment],
          ['Difficulty', workout.difficulty],
          ['Sets', workout.sets],
          ['Reps', workout.reps],
          ['Duration', `${workout.duration} min`],
          ['Calories', `${workout.caloriesBurned} kcal`],
          ['Rating', workout.rating],
     ];

     return (
          <main className="my-6 lg:my-12.5 p-5 lg:p-0">
               <div className="container-custom">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10">
                         {/* Left Image */}
                         <div className="w-full">
                              <div className="relative aspect-4/5 w-full overflow-hidden rounded-2xl border border-border bg-card">
                                   <Image
                                        src={workout.image}
                                        alt={workout.name}
                                        fill
                                        priority
                                        className="object-cover"
                                   />
                              </div>
                         </div>

                         {/* Right Content */}
                         <div className="flex flex-col">
                              {/* Heading */}
                              <div>
                                   <h1 className="font-heading text-[clamp(2rem,3vw,3rem)] font-bold uppercase  text-text-primary">
                                        {workout.name}
                                   </h1>

                                   <p className="mt-3  font-body text-[14px]  text-text-secondary sm:text-[15px]">
                                        {workout.description}
                                   </p>

                                   {/* Muscle Groups */}
                                   <div className="mt-5 flex flex-wrap items-center gap-2">
                                        {workout.muscleGroups.map((group) => (
                                             <span
                                                  key={group}
                                                  className="rounded-full bg-accent px-3.5 py-1 text-[11px] font-bold uppercase text-black"
                                             >
                                                  {group}
                                             </span>
                                        ))}
                                   </div>
                              </div>

                              <div className="mt-7 overflow-hidden rounded-2xl border border-border bg-card">
                                   <table className="w-full border-collapse">
                                        <tbody>
                                             {specs.map(([label, value], index) => (
                                                  <tr
                                                       key={label}
                                                       className={
                                                            index !== specs.length - 1
                                                                 ? 'border-b border-border'
                                                                 : ''
                                                       }
                                                  >
                                                       <td className="px-5 py-4 text-[11px] font-semibold uppercase tracking-wide text-text-secondary">
                                                            {label}
                                                       </td>

                                                       <td className="px-5 py-4 text-right text-[13px] text-text-light sm:text-[14px]">
                                                            {value}
                                                       </td>
                                                  </tr>
                                             ))}
                                        </tbody>
                                   </table>
                              </div>

                              {/* Instructions */}
                              <section className="mt-8">
                                   <h2 className="font-heading text-[18px] font-bold uppercase text-text-primary">
                                        Instructions
                                   </h2>

                                   <ol className="mt-4 space-y-3">
                                        {workout.instructions.map((instruction, index) => (
                                             <li
                                                  key={index}
                                                  className="grid grid-cols-[22px_1fr] gap-2 text-[13px] leading-6 text-text-light sm:text-[14px]"
                                             >
                                                  <span>{index + 1}.</span>
                                                  <span>{instruction}</span>
                                             </li>
                                        ))}
                                   </ol>
                              </section>

                              <WorkoutActions workout={workout} />
                         </div>
                    </div>
               </div>
          </main>
     );
};

export default WorkOutDetailsPage;
