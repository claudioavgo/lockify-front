import { z } from "zod";

export const UserSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  email: z.string().email(),
  createdAt: z.string().or(z.date()),
  updatedAt: z.string().or(z.date()),
});

export type UserType = z.infer<typeof UserSchema>;
