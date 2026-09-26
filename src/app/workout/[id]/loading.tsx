const Loading = () => {
     return (
          <main className="py-6 sm:py-8 lg:py-12">
               <div className="container-custom">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10">
                         {/* Left Image Skeleton */}
                         <div className="relative aspect-4/5 overflow-hidden rounded-2xl border border-border bg-card">
                              <div className="absolute inset-0 animate-pulse bg-linear-to-r from-card via-[#20242e] to-card" />
                         </div>

                         {/* Right Content */}
                         <div className="flex flex-col">
                              {/* Title */}
                              <div className="h-10 w-3/4 animate-pulse rounded-md bg-card-secondary sm:h-12" />

                              {/* Description */}
                              <div className="mt-4 space-y-2.5">
                                   <div className="h-3.5 w-full animate-pulse rounded bg-card-secondary" />
                                   <div className="h-3.5 w-[92%] animate-pulse rounded bg-card-secondary" />
                                   <div className="h-3.5 w-[70%] animate-pulse rounded bg-card-secondary" />
                              </div>

                              {/* Tags */}
                              <div className="mt-5 flex gap-2">
                                   <div className="h-7 w-20 animate-pulse rounded-full bg-card-secondary" />
                                   <div className="h-7 w-16 animate-pulse rounded-full bg-card-secondary" />
                              </div>

                              {/* Specs Table Skeleton */}
                              <div className="mt-7 overflow-hidden rounded-2xl border border-border bg-card">
                                   {Array.from({ length: 7 }).map((_, index) => (
                                        <div
                                             key={index}
                                             className={`flex items-center justify-between px-5 py-4 ${
                                                  index !== 6 ? 'border-b border-border' : ''
                                             }`}
                                        >
                                             <div className="h-3 w-24 animate-pulse rounded bg-card-secondary" />
                                             <div className="h-3 w-20 animate-pulse rounded bg-card-secondary" />
                                        </div>
                                   ))}
                              </div>

                              {/* Instructions */}
                              <div className="mt-8">
                                   <div className="h-6 w-36 animate-pulse rounded bg-card-secondary" />

                                   <div className="mt-5 space-y-4">
                                        {Array.from({ length: 4 }).map((_, index) => (
                                             <div key={index} className="flex gap-3">
                                                  <div className="h-5 w-5 shrink-0 animate-pulse rounded-full bg-card-secondary" />

                                                  <div className="w-full space-y-2">
                                                       <div className="h-3.5 w-full animate-pulse rounded bg-card-secondary" />
                                                       {index === 1 && (
                                                            <div className="h-3.5 w-[75%] animate-pulse rounded bg-card-secondary" />
                                                       )}
                                                  </div>
                                             </div>
                                        ))}
                                   </div>
                              </div>

                              {/* Buttons */}
                              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                                   <div className="h-11 w-full animate-pulse rounded-xl bg-card-secondary sm:w-44" />
                                   <div className="h-11 w-full animate-pulse rounded-xl bg-card-secondary sm:w-36" />
                              </div>
                         </div>
                    </div>
               </div>
          </main>
     );
};

export default Loading;
