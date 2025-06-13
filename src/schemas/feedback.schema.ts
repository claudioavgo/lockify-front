import { z } from "zod";

export const FeedbackSchema = z.object({
  id: z.number(),
  rating: z.number(),
  createdAt: z.string(),
  updatedAt: z.string(),
  userId: z.string(),
});

export const FeedbackFormSchema = z.object({
  rating: z.number().min(1).max(5),
});

export type FeedbackSchemaType = z.infer<typeof FeedbackSchema>;
export type FeedbackFormSchemaType = z.infer<typeof FeedbackFormSchema>;
