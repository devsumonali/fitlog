import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
     return (
          <div className="my-2 lg:my-5 p-5 lg:p-0">
               <div className="py-6 lg:py-12.5 px-4 lg:px-8 container-custom bg-card border border-[#222630] rounded-2xl">
                    <div className="flex flex-col lg:flex-row justify-between gap-5 items-center ">
                         <div className="space-y-3 w-full lg:w-[52%]">
                              <p className="text-accent uppercase text-[10px] font-bold font-body">
                                   Workout Library
                              </p>
                              <h1 className="font-bold text-[clamp(1.875rem,1.3393rem+2.381vw,3.75rem)] uppercase w-full  leading-[1.1]">
                                   TRAIN WITH INTENT. LOG EVERY SET.
                              </h1>
                              <p className=" w-full lg:w-[75%] leading-[1.4] text-text-muted text-[14px]">
                                   FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
                                   into today&lsquo;s plan, and watch the week&lsquo;s work add up.
                              </p>
                              <Link className="" href={'/workout'}>
                                   <button className="cursor-pointer bg-accent py-2.5 px-4.5 rounded-2xl font-body uppercase text-[12px] text-black font-bold mt-3">
                                        BROWSE WORKOUTS
                                   </button>
                              </Link>
                         </div>

                         <div className="flex justify-end items-center lg:w-[48%]">
                              <Image
                                   src="/images/banner.png"
                                   alt="Hero banner"
                                   width={1000}
                                   height={700}
                                   className="h-auto w-full lg:w-[55%] object-cover"
                              />
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default HeroSection;
