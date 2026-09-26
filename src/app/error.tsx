'use client';

export default function ErrorPage({ reset }: { reset: () => void }) {
     return (
          <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-5 text-center">
               <h1 className="font-heading text-3xl font-bold uppercase">Unable to load workouts</h1>
               <p className="text-text-secondary">Please check your connection and try again.</p>
               <button type="button" onClick={reset} className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-black">Try again</button>
          </div>
     );
}
