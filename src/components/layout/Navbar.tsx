'use client';

import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { usePlan } from '@/hooks/usePlan';

const Navbar = () => {
     const pathname = usePathname();
     const { today, saved } = usePlan();
     const [isOpen, setIsOpen] = useState(false);

     const isWorkoutsActive = pathname === '/workout' || pathname.startsWith('/workout/');

     const isMyPlanActive = pathname === '/my-plan' || pathname.startsWith('/my-plan/');

     const closeSidebar = () => setIsOpen(false);

     return (
          <>
               <header className="border-b border-[#1C1F26] py-4">
                    <nav className="container-custom flex items-center justify-between">
                         {/* Logo */}
                         <div>
                              <Link href="/" className="flex items-center gap-4">
                                   <Image
                                        src="/images/logo.png"
                                        alt="FitLog logo"
                                        width={28}
                                        height={28}
                                        className="size-7 object-cover"
                                   />

                                   <span className="font-heading text-[18px] font-bold uppercase text-text-primary">
                                        FitLog
                                   </span>
                              </Link>
                         </div>

                         {/* Desktop Navigation */}
                         <div className="hidden md:block">
                              <ul className="flex items-center justify-center gap-2">
                                   <li>
                                        <Link
                                             href="/workout"
                                             className={`rounded-full px-4 py-2 text-[14px] font-medium ${
                                                  isWorkoutsActive
                                                       ? 'bg-[#1a2312] text-accent'
                                                       : 'text-text-secondary hover:bg-white/5 hover:text-text-primary'
                                             }`}
                                        >
                                             Workouts
                                        </Link>
                                   </li>

                                   <li>
                                        <Link
                                             href="/my-plan"
                                             className={`rounded-full px-4 py-2 text-[14px] font-medium ${
                                                  isMyPlanActive
                                                       ? 'bg-[#1a2312] text-accent'
                                                       : 'text-text-secondary hover:bg-white/5 hover:text-text-primary'
                                             }`}
                                        >
                                             My Plan
                                        </Link>
                                   </li>
                              </ul>
                         </div>

                         {/* Desktop Counters */}
                         <div className="hidden items-center gap-5 text-[14px] md:flex">
                              <Link
                                   href="/my-plan"
                                   className="flex items-center gap-2 text-text-light transition-colors hover:text-text-primary"
                              >
                                   Plan
                                   <span className="flex size-5 items-center justify-center rounded-full bg-accent text-[12px] font-semibold text-black">
                                        {today.length}
                                   </span>
                              </Link>

                              <Link
                                   href="/my-plan"
                                   className="flex items-center gap-2 text-text-secondary transition-colors hover:text-text-primary"
                              >
                                   Saved
                                   <span className="flex size-5 items-center justify-center rounded-full border border-border text-[12px] text-text-light">
                                        {saved.length}
                                   </span>
                              </Link>
                         </div>

                         {/* Mobile Menu Button */}
                         <button
                              onClick={() => setIsOpen(true)}
                              className="text-text-primary md:hidden"
                              aria-label="Open menu"
                         >
                              <Menu size={26} />
                         </button>
                    </nav>
               </header>

               {/* Overlay */}
               {isOpen && (
                    <div
                         onClick={closeSidebar}
                         className="fixed inset-0 z-40 bg-black/60 md:hidden"
                    />
               )}

               {/* Mobile Sidebar */}
               <aside
                    className={`fixed right-0 top-0 z-50 h-screen w-70 border-l border-border bg-background transition-transform duration-300 md:hidden ${
                         isOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
               >
                    <div className="flex h-full flex-col">
                         {/* Sidebar Header */}
                         <div className="flex items-center justify-between border-b border-border px-5 py-4">
                              <Link
                                   href="/"
                                   onClick={closeSidebar}
                                   className="flex items-center gap-3"
                              >
                                   <Image
                                        src="/images/logo.png"
                                        alt="FitLog logo"
                                        width={28}
                                        height={28}
                                        className="size-7 object-cover"
                                   />

                                   <span className="font-heading text-[18px] font-bold uppercase">
                                        FitLog
                                   </span>
                              </Link>

                              <button
                                   onClick={closeSidebar}
                                   className="text-text-secondary transition hover:text-text-primary"
                                   aria-label="Close menu"
                              >
                                   <X size={25} />
                              </button>
                         </div>

                         {/* Navigation */}
                         <div className="flex flex-1 flex-col gap-2 p-5">
                              <Link
                                   href="/workout"
                                   onClick={closeSidebar}
                                   className={`rounded-lg px-4 py-3 text-[14px] font-medium ${
                                        isWorkoutsActive
                                             ? 'bg-[#1a2312] text-accent'
                                             : 'text-text-secondary hover:bg-white/5 hover:text-text-primary'
                                   }`}
                              >
                                   Workouts
                              </Link>

                              <Link
                                   href="/my-plan"
                                   onClick={closeSidebar}
                                   className={`rounded-lg px-4 py-3 text-[14px] font-medium ${
                                        isMyPlanActive
                                             ? 'bg-[#1a2312] text-accent'
                                             : 'text-text-secondary hover:bg-white/5 hover:text-text-primary'
                                   }`}
                              >
                                   My Plan
                              </Link>

                              <div className="my-3 border-t border-border" />

                              {/* Mobile Counters */}
                              <Link
                                   href="/my-plan"
                                   onClick={closeSidebar}
                                   className="flex items-center justify-between rounded-lg px-4 py-3 text-text-light hover:bg-white/5"
                              >
                                   <span>Plan</span>

                                   <span className="flex size-6 items-center justify-center rounded-full bg-accent text-[12px] font-semibold text-black">
                                        {today.length}
                                   </span>
                              </Link>

                              <Link
                                   href="/my-plan"
                                   onClick={closeSidebar}
                                   className="flex items-center justify-between rounded-lg px-4 py-3 text-text-secondary hover:bg-white/5"
                              >
                                   <span>Saved</span>

                                   <span className="flex size-6 items-center justify-center rounded-full border border-border text-[12px] text-text-light">
                                        {saved.length}
                                   </span>
                              </Link>
                         </div>
                    </div>
               </aside>
          </>
     );
};

export default Navbar;
