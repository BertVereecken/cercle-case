import { z } from "zod";

const nonEmptyString = z.string().trim().min(1);

// 2024-03-03T12:10:25.000Z
export const isoDateTimeSchema = z
  .string()
  .trim()
  .min(20)
  .regex(
    /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?Z$/,
    "Expected YYYY-MM-DDTHH:MM:SS.sssZ",
  )
  .brand("YYYY-MM-DDTHH:MM:SS.sssZ");

export const zz = {
  nonEmptyString,
  isoDateTimeSchema,
};
