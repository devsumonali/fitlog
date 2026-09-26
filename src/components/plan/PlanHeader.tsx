const PlanHeader = () => {
     return (
          <div className="space-y-2">
               <h1 className="font-heading text-[clamp(1.5rem,1.2857rem+0.9524vw,2.25rem)] font-bold uppercase leading-tight">
                    My Plan
               </h1>
               <p className="text-[14px] leading-6 text-text-secondary">
                    Cap of five lifts for today. Finish them, then load more.
               </p>
          </div>
     );
};

export default PlanHeader;
