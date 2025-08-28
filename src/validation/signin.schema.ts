import * as z from "zod";

export const signInSchema = z.object({
  email: z.email("Not valid email").trim(),
  password: z
    .string("Password is required")
    .min(8, "Password must me at least 8 characters long")
    .regex(/[A-Z]/, "Password must contain at least 1 uppercase letter")
    .regex(
      /[^A-Za-z0-9]/,
      "Password must contain at least one symbol (special character)"
    ),
});

export type SignInSchemaType = z.infer<typeof signInSchema>;
