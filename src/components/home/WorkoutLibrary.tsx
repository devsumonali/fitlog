import getWorkOuts from '@/constants/api';
import WorkoutSearch from './WorkoutSearch';

const WorkoutLibrary = async () => {
     const workouts = await getWorkOuts();
     return (
          <section id="library" className="my-4 lg:my-16 p-5 lg:p-0 scroll-mt-6">
               <div className="container-custom">
                    <div>
                         <h2 className="uppercase font-bold text-[clamp(1.25rem,1.0714rem+0.7937vw,1.875rem)]">
                              THE LIBRARY
                         </h2>
                         <p className="text-[14px] text-text-muted">
                              Twelve lifts covering every major muscle group.
                         </p>
                    </div>
                    <WorkoutSearch workouts={workouts} />
               </div>
          </section>
     );
};

export default WorkoutLibrary;
