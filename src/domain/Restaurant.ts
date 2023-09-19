import { z } from "zod";

const RestaurantSchema = z.object({
  address: z
    .string()
    .min(5, "Address must be at least 5 characters")
    .max(100, "Address must be at most 100 characters"),
  contactEmail: z.string().email(),
  description: z
    .string()
    .min(1, "Description must be at least 5 character")
    .max(90, "Name must be at most 90 characters")
    .optional(),
  id: z.string(),
  name: z
    .string()
    .min(1, "Name must be at least 1 character")
    .max(50, "Name must be at most 50 characters"),
});

export type Restaurant = z.infer<typeof RestaurantSchema>;
