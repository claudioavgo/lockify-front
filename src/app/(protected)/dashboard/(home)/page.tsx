"use client";

import { useQuery } from "@tanstack/react-query";
import { isDailyFeedbackCompleted } from "@/data/feedbacks.data";
import FeedbackForm from "./_components/forms/feedback-form";
import { GetDayHabits } from "@/data/habits.data";
import HabitForm from "./_components/forms/habit-form";

export default function Dashboard() {
  const { data: dailyFeedbackStatus } = useQuery({
    queryKey: ["isDailyFeedbackCompleted"],
    queryFn: () => isDailyFeedbackCompleted(),
  });

  const { data: dayHabits } = useQuery({
    queryKey: ["dayHabits"],
    queryFn: () => GetDayHabits(),
    select: (data) => data.findLast((habit) => habit.is_active),
  });

  return (
    <main className="h-full flex items-center justify-center">
      {!dailyFeedbackStatus && <FeedbackForm />}
      {dailyFeedbackStatus && dayHabits && (
        <HabitForm habit={dayHabits} />
      )}
    </main>
  );
}
