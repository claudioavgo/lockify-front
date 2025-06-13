"use client";

import { useQuery } from "@tanstack/react-query";
import { getFeedbacks } from "@/data/feedbacks.data";

export default function Dashboard() {
  const { data: feedbacks } = useQuery({
    queryKey: ["feedbacks"],
    queryFn: () => getFeedbacks(),
  });

  return (
    <main className="h-full flex items-center justify-center">
      {feedbacks?.map((feedback) => (
        <div key={feedback.id}>
          <h2>{feedback.rating}</h2>
        </div>
      ))}
    </main>
  );
}
