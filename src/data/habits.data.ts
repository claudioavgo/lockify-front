import { getApiClient } from "@/lib/api";
import { HabitFormSchemaType, HabitSchemaType } from "@/schemas/habit.schema";

export async function GetDayHabits(): Promise<HabitSchemaType[]> {
  const habits = await getApiClient()
    .get("/habits/day")
    .catch((error) => {
      return {
        data: null,
        error: error.message,
      };
    });

  return habits.data;
}

export async function CheckInHabit(habitId: number): Promise<HabitSchemaType> {
  const checkedInHabit = await getApiClient()
    .post(`/habits/${habitId}/check-in`)
    .catch((error) => {
      return {
        data: null,
        error: error.message,
      };
    });

  return checkedInHabit.data;
}

export async function CreateHabit(
  habit: HabitFormSchemaType
): Promise<HabitSchemaType> {
  const newHabit = await getApiClient()
    .post("/habits", { habit })
    .catch((error) => {
      return {
        data: null,
        error: error.message,
      };
    });

  return newHabit.data;
}
