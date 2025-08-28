import * as z from "zod";

export const regSchema = z
  .object({
    username: z
      .string("Username is required")
      .trim()
      .min(2, "Username must be at leat 2 characters long"),
    email: z.email("Not valid email").trim(),
    password: z
      .string("Password is required")
      .min(8, "Password must me at least 8 characters long")
      .regex(/[A-Z]/, "Password must contain at least 1 uppercase letter")
      .regex(
        /[^A-Za-z0-9]/,
        "Password must contain at least one symbol (special character)"
      ),
    confirmPassword: z
      .string("Password is required")
      .min(8, "Password must me at least 8 characters long"),
  })
  .superRefine(({ password, confirmPassword }, ctx) => {
    if (password !== confirmPassword) {
      ctx.addIssue({
        code: "custom",
        message: "Passwords don`t match",
        path: ["confirmPassword"],
      });
    }
  });

export type RegSchemaType = z.infer<typeof regSchema>;
