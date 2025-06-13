import { HabitSchemaType } from "@/schemas/habit.schema";

interface HabitItemProps {
  habit: HabitSchemaType;
}

export default function HabitItem({ habit }: Readonly<HabitItemProps>) {
  return (
    <div className="gap-4 flex flex-col items-center justify-between border rounded-md p-4 w-full">
      <div className="flex flex-col w-full">
        <h1 className="text-2xl font-bold">{habit.name}</h1>
        <p className="text-sm text-muted-foreground">{habit.description}</p>
      </div>
      <div className="flex items-center justify-between w-full">
        <h2 className="text-sm text-muted-foreground">
          {habit.starts_at} - {habit.ends_at}
        </h2>
        <h2 className="text-sm text-muted-foreground">
          {habit.days_of_week}
        </h2>
      </div>
    </div>
  );
}