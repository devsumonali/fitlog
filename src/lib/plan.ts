import type { Workout } from '@/types/workout';

export type PlanData = {
     today: Workout[];
     saved: Workout[];
     completed: number[];
};
export type SortBy = 'duration' | 'caloriesBurned' | 'rating';
export const PLAN_LIMIT = 5;
export const emptyPlan: PlanData = { today: [], saved: [], completed: [] };

// Ignore damaged JSON entries before displaying stored workouts.
function isValidWorkout(workout: Workout) {
     return (
          workout !== null &&
          typeof workout === 'object' &&
          Number.isFinite(workout.id) &&
          typeof workout.name === 'string' &&
          typeof workout.image === 'string' &&
          typeof workout.equipment === 'string' &&
          Number.isFinite(workout.duration) &&
          Number.isFinite(workout.caloriesBurned) &&
          Number.isFinite(workout.rating) &&
          Number.isFinite(workout.sets) &&
          typeof workout.reps === 'string' &&
          typeof workout.difficulty === 'string' &&
          typeof workout.description === 'string' &&
          Array.isArray(workout.muscleGroups) &&
          workout.muscleGroups.every((group) => typeof group === 'string') &&
          Array.isArray(workout.instructions) &&
          workout.instructions.every((step) => typeof step === 'string')
     );
}

function cleanWorkouts(workouts: Workout[]) {
     const validWorkouts = workouts.filter(isValidWorkout);
     return validWorkouts.filter(
          (workout, index) => validWorkouts.findIndex((item) => item.id === workout.id) === index,
     );
}

export function readPlan(raw: string | null): PlanData {
     if (!raw) return emptyPlan;
     try {
          const data: PlanData = JSON.parse(raw);
          if (!data || !Array.isArray(data.today) || !Array.isArray(data.saved)) return emptyPlan;

          const today = cleanWorkouts(data.today);
          const saved = cleanWorkouts(data.saved);
          const completed = Array.isArray(data.completed)
               ? today
                      .filter((workout) => data.completed.includes(workout.id))
                      .map((workout) => workout.id)
               : [];
          const activeWorkouts = today.filter((workout) => !completed.includes(workout.id));
          const allowedIds = activeWorkouts.slice(0, PLAN_LIMIT).map((workout) => workout.id);
          return {
               today: today.filter(
                    (workout) => completed.includes(workout.id) || allowedIds.includes(workout.id),
               ),
               saved,
               completed,
          };
     } catch {
          return emptyPlan;
     }
}

export function sortWorkouts(workouts: Workout[], sortBy: SortBy) {
     const sortedWorkouts = [...workouts];
     if (sortBy === 'rating') return sortedWorkouts.sort((a, b) => b.rating - a.rating);
     if (sortBy === 'caloriesBurned')
          return sortedWorkouts.sort((a, b) => a.caloriesBurned - b.caloriesBurned);
     return sortedWorkouts.sort((a, b) => a.duration - b.duration);
}
