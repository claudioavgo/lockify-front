"use client";

import { AnimatedGroup } from "@/components/motion-primitives/animated-group";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { config } from "@/config";
import { FeedbackFormSchema, FeedbackFormSchemaType } from "@/schemas/feedback.schema";
import { createFeedback } from "@/data/feedbacks.data";
import { useAuth } from "@/hooks/use-auth";

export default function FeedbackForm() {
  const queryClient = useQueryClient();
  const { user } = useAuth();

  const form = useForm<FeedbackFormSchemaType>({
    resolver: zodResolver(FeedbackFormSchema),
  });

  const { mutateAsync } = useMutation({
    mutationFn: async (data: FeedbackFormSchemaType) => {
      return await createFeedback(data.rating);
    },
    onSuccess: () => {
      toast.success('Feedback enviado com sucesso!');
    },
    onError: () => {
      toast.error('Erro ao enviar feedback');
    }
  });

  const onSubmit = (data: FeedbackFormSchemaType) => {
    mutateAsync(data, {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['isDailyFeedbackCompleted'] });
      }
    });
  }

  return (
    <section className="w-full flex items-center justify-center py-20">
      <AnimatedGroup preset="slide" className="w-full xl:max-w-md flex flex-col gap-8">
        <FeedbackHeader name={user?.name ?? ''} />
        <form className="flex flex-col gap-4" onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex items-center justify-center gap-4">
            <FeedbackRatingBall rating={1} onClick={() => form.setValue('rating', 1)} />
            <FeedbackRatingBall rating={2} onClick={() => form.setValue('rating', 2)} />
            <FeedbackRatingBall rating={3} onClick={() => form.setValue('rating', 3)} />
            <FeedbackRatingBall rating={4} onClick={() => form.setValue('rating', 4)} />
            <FeedbackRatingBall rating={5} onClick={() => form.setValue('rating', 5)} />
          </div>
        </form>
      </AnimatedGroup>
    </section >
  );
}

interface FeedbackRatingBallProps {
  rating: number;
  onClick: () => void;
}

const FeedbackRatingBall = ({ rating, onClick }: FeedbackRatingBallProps) => {
  return (
    <button className="w-10 h-10 bg-card rounded-full flex items-center justify-center cursor-pointer" onClick={onClick}>
      {rating}
    </button>
  )
}

interface FeedbackHeaderProps {
  name: string;
}

const FeedbackHeader = ({ name }: FeedbackHeaderProps) => {
  return (
    <div className="flex flex-col gap-2 text-center">
      <h1 className="text-2xl font-bold">
        {name}, {config.protected.dashboard.forms.feedback.title}
      </h1>
      <p className="text-sm text-muted-foreground">
        {config.protected.dashboard.forms.feedback.description}
      </p>
    </div>
  );
}