import Link from 'next/link';

const EmptyState = () => {
     return (
          <div className="mt-6 flex min-h-62.5 flex-col items-center justify-center rounded-2xl border border-dashed border-border px-5 py-12 text-center sm:min-h-75">
               <h2 className="font-heading text-[20px] font-bold uppercase leading-tight text-text-primary sm:text-[22px]">
                    Nothing Here Yet
               </h2>

               <p className="mt-2 max-w-md text-[12px] leading-5 text-text-secondary sm:text-[13px]">
                    Browse the library and add a lift to get today moving.
               </p>

               <Link
                    href="/"
                    className="mt-6 inline-flex items-center justify-center rounded-full bg-accent px-6 py-2.5 text-[12px] font-semibold text-black shadow-[0_8px_24px_-10px_var(--color-accent)] transition hover:bg-accent-bright"
               >
                    Go to workouts
               </Link>
          </div>
     );
};

export default EmptyState;
