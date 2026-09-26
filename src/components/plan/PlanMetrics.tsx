import type { Workout } from '@/types/workout';

const PlanMetrics = ({ workouts }: { workouts: Workout[] }) => {
     return (
          <dl className="grid grid-cols-3 rounded-2xl border border-border bg-card px-3 py-6 sm:px-6 sm:py-8">
               <div className="pr-3 sm:pr-8">
                    <dt className="text-[11px] text-text-secondary sm:text-[12px]">Exercises</dt>
                    <dd className="mt-2 font-heading text-[30px] font-bold leading-none text-accent sm:text-[40px]">
                         {workouts.length}
                    </dd>
               </div>
               <div className="border-l border-border/60 px-3 sm:px-8">
                    <dt className="text-[11px] text-text-secondary sm:text-[12px]">Minutes</dt>
                    <dd className="mt-2 font-heading text-[30px] font-bold leading-none sm:text-[40px]">
                         {workouts.reduce((total, workout) => total + workout.duration, 0)}
                    </dd>
               </div>
               <div className="border-l border-border/60 pl-3 sm:pl-8">
                    <dt className="text-[11px] text-text-secondary sm:text-[12px]">Calories</dt>
                    <dd className="mt-2 font-heading text-[30px] font-bold leading-none sm:text-[40px]">
                         {workouts.reduce((total, workout) => total + workout.caloriesBurned, 0)}
                    </dd>
               </div>
          </dl>
     );
};

export default PlanMetrics;
