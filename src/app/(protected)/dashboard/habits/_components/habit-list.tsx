import { HabitSchemaType } from "@/schemas/habit.schema";
import HabitItem from "./habit-item";

interface HabitListProps {
  habits: HabitSchemaType[];
}

export default function HabitList({ habits }: Readonly<HabitListProps>) {
  return (
    <div className="flex flex-col gap-4 w-full">
      {habits?.map((habit) => (
        <HabitItem key={habit.id} habit={habit} />
      ))}
    </div>
  );
}