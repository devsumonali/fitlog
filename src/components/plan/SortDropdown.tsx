import type { SortBy } from '@/lib/plan';
import { ChevronDown } from 'lucide-react';

const SortDropdown = ({
     value,
     onChange,
}: {
     value: SortBy;
     onChange: (value: SortBy) => void;
}) => {
     return (
          <div className="flex items-center gap-3 text-[12px]">
               <label htmlFor="plan-sort" className="text-text-secondary">
                    Sort By
               </label>
               <div className="relative">
                    <select
                         id="plan-sort"
                         value={value}
                         onChange={(event) => onChange(event.target.value as SortBy)}
                         className="appearance-none rounded-lg border border-border bg-card py-2 pl-3 pr-8 text-text-light"
                    >
                         <option value="duration">Duration</option>
                         <option value="caloriesBurned">Calories</option>
                         <option value="rating">Rating</option>
                    </select>
                    <ChevronDown
                         className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2"
                         size={14}
                         strokeWidth={1.5}
                         aria-hidden="true"
                    />
               </div>
          </div>
     );
};

export default SortDropdown;
