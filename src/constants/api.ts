// const API_URL = 'https://api.abcz.workers.dev/api/fitlog';
const API_URL = 'https://api.api-store.workers.dev/api/fitlog';
import { Workout } from '@/types/workout';

const getWorkOuts = async (): Promise<Workout[]> => {
     const res = await fetch(API_URL);
     if (!res.ok) {
          throw new Error('Failed to fetch workouts');
     }
     return res.json();
};

export const getSingleWorkout = async (id: string): Promise<Workout> => {
     const res = await fetch(`${API_URL}/${id}`);

     if (!res.ok) {
          throw new Error('Failed to fetch workout');
     }

     return res.json();
};

export default getWorkOuts;
