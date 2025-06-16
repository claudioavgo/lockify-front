import { z } from "zod";

export const FeedbackSchema = z.object({
  id: z.number(),
  rating: z.number(),
  created_at: z.string(),
  updated_at: z.string(),
  user_id: z.number(),
});

export const FeedbackFormSchema = z.object({
  rating: z.number().min(1).max(5),
});

export type FeedbackSchemaType = z.infer<typeof FeedbackSchema>;
export type FeedbackFormSchemaType = z.infer<typeof FeedbackFormSchema>;
