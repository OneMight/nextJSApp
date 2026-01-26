import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(2),
  ingredients: z.array(
    z.object({
      value: z.string().min(1, "Ingredient cannot be empty"),
    }),
  ),
  instructions: z.array(
    z.object({
      value: z.string().min(1, "Step cannot be empty"),
    }),
  ),
});

export type FormValues = z.infer<typeof formSchema>;
