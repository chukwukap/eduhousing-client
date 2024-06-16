import { z } from "zod";

// Enum for lodge types
const lodgeTypeEnum = z.enum(["SINGLE_ROOM", "FLAT", "SELF_CONTAIN"]);

// Schema for location
export const locationSchema = z.object({
  lat: z.number().min(-90).max(90),
  lng: z.number().min(-180).max(180),
});

// Main Lodge schema
export const lodgeSchema = z.object({
  title: z
    .string()
    .min(5, "Title must be at least 5 characters long")
    .max(100, "Title must not exceed 100 characters"),
  type: lodgeTypeEnum,
  bedrooms: z.number().int().positive("Number of bedrooms must be positive"),
  bathrooms: z.number().int().positive("Number of bathrooms must be positive"),
  rent: z.number().positive("Rent must be a positive number"),
  deposit: z.number().nonnegative("Deposit must be a non-negative number"),
  university: z
    .string()
    .min(2, "University name must be at least 2 characters long"),
  images: z
    .array(z.string().url("Invalid image URL"))
    .min(1, "At least one image is required"),
  description: z
    .string()
    .min(20, "Description must be at least 20 characters long")
    .max(1000, "Description must not exceed 1000 characters"),
  location: locationSchema,
  amenities: z.array(z.string()).min(1, "At least one amenity is required"),
  availableFrom: z
    .date()
    .min(new Date(), "Available from date must be in the future"),
  availableTo: z.date(),
  //   .min(
  //     z.lazy(() => LodgeSchemaD.shape.availableFrom),
  //     "Available to date must be after the available from date"
  //   ),
});

// Infer the TypeScript type from the schema
export type LodgeType = z.infer<typeof lodgeSchema>;
