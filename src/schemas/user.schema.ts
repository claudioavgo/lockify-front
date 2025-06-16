import { z } from "zod";

export const UserSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  email: z.string().email(),
  created_at: z.string().or(z.date()),
  updated_at: z.string().or(z.date()),
});

export type UserType = z.infer<typeof UserSchema>;
