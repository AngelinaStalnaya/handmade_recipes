import * as z from "zod";

export const regSchema = z
  .object({
    firstName: z
      .string("First name is required")
      .trim()
      .min(2, "First name must be at leat 2 characters long"),
    lastName: z
      .string("Last name is required")
      .trim()
      .min(2, "Last name must be at leat 2 characters long"),
    email: z.email("Not valid email").trim(),
    password: z
      .string("Password is required")
      .min(8, "Password must be at least 8 characters long")
      .regex(/[A-Z]/, "Password must include at least 1 uppercase letter")
      .regex(
        /[^A-Za-z0-9]/,
        "Password must include at least 1 symbol (special character)"
      ),
    confirmPassword: z
      .string("Password is required")
      .min(8, "Password must be at least 8 characters long"),
    gender: z.string("You have to select a gender"),
    // photo: z.instanceof(FileList).transform((fileList)=> console.log(typeof fileList) ),
    // description: z
    //   .string()
    //   .max(20, "Description must be up to 20 characters")
    //   .optional(),
  })
  .superRefine(({ password, confirmPassword }, ctx) => {
    // const ACCEPTED_MIME_TYPES = ["image/png", "image/jpeg"];
    // const MAX_SiZE = 1024 * 1024 * 5;

    if (password !== confirmPassword) {
      ctx.addIssue({
        code: "custom",
        message: "Passwords don`t match",
        path: ["confirmPassword"],
      });
    }
    // if (photo) {
    //   if (!ACCEPTED_MIME_TYPES.includes(photo.type)) {
    //     ctx.addIssue({
    //       code: "custom",
    //       message: "Invalid file type. The file must be of type .png or .jpeg",
    //       path: ["photo"],
    //     });
    //   }

    //   if (photo.size > MAX_SiZE) {
    //     ctx.addIssue({
    //       code: "custom",
    //       message: "File too large. Max size: 5MB",
    //       path: ["photo"],
    //     });
    //   }
    // }
  });

export type RegSchemaType = z.infer<typeof regSchema>;
