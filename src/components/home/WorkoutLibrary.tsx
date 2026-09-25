import getWorkOuts from '@/constants/api';
import WorkoutCard from './WorkoutCard';

const WorkoutLibrary = async () => {
     const workouts = await getWorkOuts();
     return (
          <section className="my-4 lg:my-16 p-5 lg:p-0">
               <div className="container-custom">
                    <div>
                         <h2 className="uppercase font-bold text-[clamp(1.25rem,1.0714rem+0.7937vw,1.875rem)]">
                              THE LIBRARY
                         </h2>
                         <p className="text-[14px] text-text-muted">
                              Twelve lifts covering every major muscle group.
                         </p>
                    </div>
                    <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-between">
                         {workouts.map((workout) => (
                              <WorkoutCard key={workout.id} workout={workout} />
                         ))}
                    </div>
               </div>
          </section>
     );
};

export default WorkoutLibrary;
