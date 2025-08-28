import * as z from "zod";

export const logInSchema = z.object({
  email: z.email("Not valid email").trim(),
  password: z
    .string("Password is required")
    .min(8, "Password must be at least 8 characters long")
    .regex(/[A-Z]/, "Password must include at least 1 uppercase letter")
    .regex(
      /[^A-Za-z0-9]/,
      "Password must include at least 1 symbol (special character)"
    ),
});

export type LogInSchemaType = z.infer<typeof logInSchema>;
