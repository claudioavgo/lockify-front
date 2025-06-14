import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { HabitFormSchema, HabitFormSchemaType } from "@/schemas/habit.schema"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { CreateHabit } from "@/data/habits.data"
import { useState } from "react"
import { toast } from "sonner"

export default function HabitForm() {
  const queryClient = useQueryClient();

  const weekDays = [
    { label: "Dom", value: "Sun" },
    { label: "Seg", value: "Mon" },
    { label: "Ter", value: "Tue" },
    { label: "Qua", value: "Wed" },
    { label: "Qui", value: "Thu" },
    { label: "Sex", value: "Fri" },
    { label: "Sáb", value: "Sat" },
  ];
  const today = new Date().toISOString();
  const [selectedDays, setSelectedDays] = useState<string[]>([]);

  const [isOpen, setIsOpen] = useState(false);

  const form = useForm<HabitFormSchemaType>({
    resolver: zodResolver(HabitFormSchema),
    defaultValues: {
      name: "",
      description: "",
      starts_at: today,
      ends_at: today,
      days_of_week: "",
      no_end_date: true,
    },
    mode: "onChange",
  });

  const addDay = (day: string) => {
    setSelectedDays(prev => {
      const newDays = [...prev, day];
      form.setValue('days_of_week', newDays.join(','));
      return newDays;
    });
    form.trigger('days_of_week');
    form.setFocus("days_of_week");
  };

  const removeDay = (day: string) => {
    setSelectedDays(prev => {
      const newDays = prev.filter(d => d !== day);
      form.setValue('days_of_week', newDays.join(','));
      return newDays;
    });
    form.trigger('days_of_week');
    form.setFocus("days_of_week");
  };

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (data: HabitFormSchemaType) => {
      return await CreateHabit(data);
    },
  });

  const onSubmit = (data: HabitFormSchemaType) => {
    const formattedData = {
      ...data,
      days_of_week: selectedDays.join(','),
    };

    mutateAsync(formattedData)
      .then(() => {
        toast.success('Hábito criado com sucesso');
        queryClient.invalidateQueries({ queryKey: ["habits"] });
      })
      .catch(() => {
        toast.error('Erro ao criar hábito');
      });

    form.reset();
    setIsOpen(false);
    setSelectedDays([]);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="xl" className="fixed bottom-24 right-8">
          Adicionar Hábito
        </Button>
      </SheetTrigger>
      <SheetContent className="dark text-foreground w-full text-xl">
        <SheetHeader>
          <SheetTitle className="text-2xl">Adicionar Hábito</SheetTitle>
          <SheetDescription className="text-lg">
            Adicione um novo hábito para sua rotina.
          </SheetDescription>
        </SheetHeader>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div className="grid flex-1 auto-rows-min gap-6 px-4">
            <div className="grid gap-3">
              <Label className="text-lg" htmlFor="name">Nome</Label>
              <Input id="name" {...form.register("name")} />
            </div>
            <div className="grid gap-3">
              <Label className="text-lg" htmlFor="description">Descrição</Label>
              <Input id="description" {...form.register("description")} />
            </div>
            <div className="grid gap-3">
              <Label className="text-lg">Dias da Semana</Label>
              <div className="flex flex-wrap gap-4">
                {weekDays.map((day) => (
                  <div key={day.value} className="flex items-center space-x-2">
                    <Checkbox
                      className="size-6"
                      id={day.value}
                      checked={selectedDays.includes(day.value)}
                      onCheckedChange={() => {
                        if (selectedDays.includes(day.value)) {
                          removeDay(day.value);
                        } else {
                          addDay(day.value);
                        }
                      }}
                    />
                    <Label htmlFor={day.value}>{day.label}</Label>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <SheetFooter>
            <Button type="submit" size="xl" disabled={isPending || !form.formState.isValid}>
              {isPending ? "Salvando..." : "Salvar"}
            </Button>
            <SheetClose asChild>
              <Button variant="outline" size="xl">Cancelar</Button>
            </SheetClose>
          </SheetFooter>
        </form>
      </SheetContent>
    </Sheet>
  );
}