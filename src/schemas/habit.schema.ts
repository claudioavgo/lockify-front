import { z } from "zod";

export const HabitSchema = z.object({
  id: z.number(),

  name: z.string(),
  description: z.string(),
  days_of_week: z.string(),
  starts_at: z.string(),
  ends_at: z.string(),
  is_active: z.boolean(),
  is_public: z.boolean(),
  is_completed: z.boolean(),

  created_at: z.string(),
  updated_at: z.string(),
});

export const HabitFormSchema = z.object({
  name: z.string().min(1),
  description: z.string().min(1),
  starts_at: z.string().min(1),
  ends_at: z.string().min(1),
  days_of_week: z.string().min(1),
  no_end_date: z.boolean(),
});

export type HabitSchemaType = z.infer<typeof HabitSchema>;
export type HabitFormSchemaType = z.infer<typeof HabitFormSchema>;
