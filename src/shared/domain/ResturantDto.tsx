import { z } from "zod";

export const RestaurantDto = z.object({
  id: z.number().int().positive("ID must be a positive integer"),
  name: z
    .string()
    .min(3, "Name must be at least 3 characters")
    .max(50, "Name must not exceed 50 characters")
    .nonempty("Name must not be empty"),
});

// To be used when we get multiple restaurants
export const RestaurantsDto = z.array(RestaurantDto);

export type RestaurantDtoType = z.infer<typeof RestaurantDto>;
export type RestaurantsDtoType = z.infer<typeof RestaurantsDto>;
