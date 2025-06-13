import { z } from "zod";

export const RegisterSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  password: z.string().min(8),
});

export type RegisterSchemaType = z.infer<typeof RegisterSchema>;
