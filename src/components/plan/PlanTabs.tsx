type PlanTabsProps = {
     activeTab: 'today' | 'saved';
     setActiveTab: (tab: 'today' | 'saved') => void;
};

const PlanTabs = ({ activeTab, setActiveTab }: PlanTabsProps) => {
     return (
          <div
               className="inline-flex rounded-xl border border-border bg-card px-3 py-2"
               role="group"
               aria-label="Plan views"
          >
               <button
                    type="button"
                    onClick={() => setActiveTab('today')}
                    className={`cursor-pointer rounded-lg border px-4 py-3 text-[12px] leading-4 ${
                         activeTab === 'today'
                              ? 'border-border bg-card-secondary font-semibold text-text-primary'
                              : 'border-transparent text-text-secondary'
                    }`}
               >
                    Today&apos;s Plan
               </button>

               <button
                    type="button"
                    onClick={() => setActiveTab('saved')}
                    className={`cursor-pointer min-w-22 rounded-lg border px-4 py-3 text-[12px] leading-4 ${
                         activeTab === 'saved'
                              ? 'border-border bg-card-secondary font-semibold text-text-primary'
                              : 'border-transparent text-text-secondary'
                    }`}
               >
                    Saved
               </button>
          </div>
     );
};

export default PlanTabs;
