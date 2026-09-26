const API_URL = 'https://api.abcz.workers.dev/api/fitlog';
import { Workout } from '@/types/workout';
import { notFound } from 'next/navigation';

const getWorkOuts = async (): Promise<Workout[]> => {
     const res = await fetch(API_URL);
     if (!res.ok) {
          throw new Error('Failed to fetch workouts');
     }
     return res.json();
};

export const getSingleWorkout = async (id: string): Promise<Workout> => {
     if (!/^[1-9]\d*$/.test(id)) notFound();
     const res = await fetch(`${API_URL}/${id}`);

     if (res.status === 404) notFound();

     if (!res.ok) {
          throw new Error('Failed to fetch workout');
     }

     const workout: Workout | null = await res.json();
     if (!workout || workout.id !== Number(id)) notFound();
     return workout;
};

export default getWorkOuts;
