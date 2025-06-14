"use client";

import { useQuery } from "@tanstack/react-query";
import { isDailyFeedbackCompleted } from "@/data/feedbacks.data";
import FeedbackForm from "./_components/forms/feedback-form";
import { GetDayHabits } from "@/data/habits.data";
import HabitForm from "./_components/forms/habit-form";
import { Greetings, MotivationalMessages } from "@/lib/utils";

export default function Dashboard() {
  const { data: dailyFeedbackStatus, isLoading: isDailyFeedbackLoading } = useQuery({
    queryKey: ["isDailyFeedbackCompleted"],
    queryFn: () => isDailyFeedbackCompleted(),
  });

  const { data: dayHabits, isLoading: isDayHabitsLoading } = useQuery({
    queryKey: ["dayHabits"],
    queryFn: () => GetDayHabits(),
    select: (data) => data.findLast((habit) => habit.is_active),
  });

  return (
    <main className="h-full flex items-center justify-center">
      {isDailyFeedbackLoading || isDayHabitsLoading && <div>Loading...</div>}
      {!dailyFeedbackStatus && <FeedbackForm />}
      {dailyFeedbackStatus && dayHabits && (
        <HabitForm habit={dayHabits} />
      )}
      {dailyFeedbackStatus && !dayHabits && <AllCompleted />}
    </main>
  );
}

const AllCompleted = () => {
  return (
    <div className="flex flex-col gap-4 text-center">
      <p className="text-sm text-muted-foreground">{MotivationalMessages.getRandomMessage()} Aproveite sua {Greetings.getGreeting()}.</p>
    </div>
  );
};