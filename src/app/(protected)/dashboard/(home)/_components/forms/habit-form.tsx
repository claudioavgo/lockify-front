"use client";

import { AnimatedGroup } from "@/components/motion-primitives/animated-group";
import { toast } from "sonner";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { HabitSchemaType } from "@/schemas/habit.schema";
import { CheckInHabit } from "@/data/habits.data";
import { motion, useMotionValue, useTransform, PanInfo } from "framer-motion";

interface HabitFormProps {
  habit: HabitSchemaType;
}

export default function HabitForm({ habit }: Readonly<HabitFormProps>) {
  const queryClient = useQueryClient();
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-30, 30]);
  const opacity = useTransform(x, [-200, 0, 200], [0, 1, 0]);

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

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (info.offset.x > 100) {
      onSubmit();
    }
    x.set(0);
  };

  return (
    <section className="w-full flex flex-col items-center justify-center py-20 gap-8">
      <AnimatedGroup preset="slide" className="w-full xl:max-w-md flex flex-col gap-8">
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          style={{ x, rotate, opacity }}
          onDragEnd={handleDragEnd}
          className="w-full bg-card rounded-lg p-16 shadow-lg cursor-grab active:cursor-grabbing"
        >
          <FeedbackHeader name={habit.name} description={habit.description} />

        </motion.div>
      </AnimatedGroup>
      <p className="text-center text-sm text-muted-foreground/40">Arraste para a direita para marcar como feito</p>
    </section>
  );
}

interface FeedbackHeaderProps {
  name: string;
  description: string;
}

const FeedbackHeader = ({ name, description }: FeedbackHeaderProps) => {
  return (
    <div className="flex flex-col text-center">
      <h1 className="text-3xl font-bold truncate">
        {name}
      </h1>
      <p className="text-xl text-muted-foreground truncate">
        {description}
      </p>
    </div>
  );
}