import { z } from "zod";

const RestaurantSchema = z.object({
  address: z
    .string()
    .min(5, "Address must be at least 5 characters")
    .max(100, "Address must be at most 100 characters"),
  name: z
    .string()
    .min(1, "Name must be at least 1 character")
    .max(50, "Name must be at most 50 characters"),
});

export type Restaurant = z.infer<typeof RestaurantSchema>;
