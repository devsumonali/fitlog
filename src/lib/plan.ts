import type { Workout } from '../types/workout';

export type PlanData = { today: Workout[]; saved: Workout[]; completed: number[] };
export type SortBy = 'duration' | 'caloriesBurned' | 'rating';
export const PLAN_LIMIT = 5;
export const emptyPlan: PlanData = { today: [], saved: [], completed: [] };

export function readPlan(raw: string | null): PlanData {
     try {
          const data = JSON.parse(raw ?? 'null');
          if (!data || !Array.isArray(data.today) || !Array.isArray(data.saved)) return emptyPlan;
          const valid = (value: unknown): value is Workout => {
               if (!value || typeof value !== 'object') return false;
               const item = value as Record<string, unknown>;
               return (
                    ['id', 'duration', 'caloriesBurned', 'rating', 'sets'].every(
                         (key) => typeof item[key] === 'number' && Number.isFinite(item[key]),
                    ) &&
                    ['name', 'image', 'equipment', 'difficulty', 'reps', 'description'].every(
                         (key) => typeof item[key] === 'string',
                    ) &&
                    ['muscleGroups', 'instructions'].every(
                         (key) =>
                              Array.isArray(item[key]) &&
                              item[key].every((entry: unknown) => typeof entry === 'string'),
                    )
               );
          };
          const unique = (items: unknown[]): Workout[] => [
               ...new Map(items.filter(valid).map((item) => [item.id, item])).values(),
          ];
          const today = unique(data.today);
          const completed = Array.isArray(data.completed)
               ? today.filter((item) => data.completed.includes(item.id)).map((item) => item.id)
               : [];
          let active = 0;
          return {
               today: today.filter((item) => completed.includes(item.id) || ++active <= PLAN_LIMIT),
               saved: unique(data.saved),
               completed,
          };
     } catch {
          return emptyPlan;
     }
}

export function filterWorkouts(workouts: Workout[], query: string) {
     const term = query.trim().toLowerCase();
     return workouts.filter((workout) =>
          [workout.name, ...workout.muscleGroups].some((value) =>
               value.toLowerCase().includes(term),
          ),
     );
}

export function sortWorkouts(workouts: Workout[], sortBy: SortBy) {
     return [...workouts].sort((a, b) =>
          sortBy === 'rating' ? b.rating - a.rating : a[sortBy] - b[sortBy],
     );
}

export type PlanAction =
     | { type: 'add'; workout: Workout }
     | { type: 'save'; workout: Workout }
     | { type: 'done'; id: number }
     | { type: 'remove-today'; id: number }
     | { type: 'remove-saved'; id: number };

export function updatePlan(
     data: PlanData,
     action: PlanAction,
): { data: PlanData; message: string; error?: boolean } {
     if (action.type === 'add' || action.type === 'save') {
          const key = action.type === 'add' ? 'today' : 'saved';
          if (data[key].some((item) => item.id === action.workout.id))
               return {
                    data,
                    message: key === 'today' ? 'Already in your plan' : 'Already saved',
                    error: true,
               };
          if (
               key === 'today' &&
               data.today.filter((item) => !data.completed.includes(item.id)).length >= PLAN_LIMIT
          )
               return {
                    data,
                    message: 'Finish a lift before adding more (maximum five active lifts)',
                    error: true,
               };
          return {
               data: { ...data, [key]: [...data[key], action.workout] },
               message: key === 'today' ? "Added to today's plan" : 'Saved for later',
          };
     }
     if (action.type === 'done') {
          if (
               !data.today.some((item) => item.id === action.id) ||
               data.completed.includes(action.id)
          )
               return { data, message: 'Workout already completed or removed', error: true };
          return {
               data: { ...data, completed: [...data.completed, action.id] },
               message: 'Workout marked as done',
          };
     }
     const key = action.type === 'remove-today' ? 'today' : 'saved';
     return {
          data: {
               ...data,
               [key]: data[key].filter((item) => item.id !== action.id),
               completed:
                    key === 'today'
                         ? data.completed.filter((id) => id !== action.id)
                         : data.completed,
          },
          message: key === 'today' ? 'Removed from your plan' : 'Removed from saved workouts',
     };
}
