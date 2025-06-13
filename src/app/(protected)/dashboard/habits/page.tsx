"use client";

import { useQuery } from "@tanstack/react-query";
import { GetHabits } from "@/data/habits.data";
import HabitList from "./_components/habit-list";
import HabitForm from "./_components/habit-form";

export default function Habits() {
  const { data: habits } = useQuery({
    queryKey: ["habits"],
    queryFn: () => GetHabits(),
  });

  return (
    <main className="flex-1 flex flex-col items-center justify-center gap-4">
      <HabitForm />
      <HabitList habits={habits ?? []} />
    </main>
  );
}
