const Loading = () => {
     return (
          <div className="flex min-h-[70vh] flex-col items-center justify-center gap-4">
               <div className="h-10 w-10 animate-spin rounded-full border-4 border-border border-t-accent" />

               <p className="text-sm text-text-secondary">Loading workouts...</p>
          </div>
     );
};

export default Loading;
