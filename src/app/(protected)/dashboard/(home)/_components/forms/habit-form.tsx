"use client";

import { AnimatedGroup } from "@/components/motion-primitives/animated-group";
import { toast } from "sonner";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { HabitSchemaType } from "@/schemas/habit.schema";
import { CheckInHabit } from "@/data/habits.data";
import { Button } from "@/components/ui/button";

interface HabitFormProps {
  habit: HabitSchemaType;
}

export default function HabitForm({ habit }: Readonly<HabitFormProps>) {
  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation({
    mutationFn: async (habitId: number) => {
      return await CheckInHabit(habitId);
    },
    onSuccess: () => {
      toast.success('Hábito feito com sucesso!');
    },
    onError: () => {
      toast.error('Erro ao enviar feedback');
    }
  });

  const onSubmit = () => {
    mutateAsync(habit.id, {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['dayHabits'] });
      },
      onError: () => {
        toast.error('Erro ao marcar hábito como feito');
      }
    });
  }

  return (
    <section className="w-full flex items-center justify-center py-20">
      <AnimatedGroup preset="slide" className="w-full xl:max-w-md flex flex-col gap-8">
        <FeedbackHeader name={habit.name} description={habit.description} />
        <form className="flex flex-col gap-4" onSubmit={onSubmit}>
          <div className="flex items-center justify-center gap-4">
            <Button onClick={onSubmit} type="button" size="lg">Feito</Button>
          </div>
        </form>
      </AnimatedGroup>
    </section >
  );
}

interface FeedbackHeaderProps {
  name: string;
  description: string;
}

const FeedbackHeader = ({ name, description }: FeedbackHeaderProps) => {
  return (
    <div className="flex flex-col gap-2 text-center">
      <h1 className="text-2xl font-bold">
        {name}
      </h1>
      <p className="text-sm text-muted-foreground">
        {description}
      </p>
    </div>
  );
}