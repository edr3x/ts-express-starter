import { z } from "zod";

import "dotenv/config";

const envSchema = z.object({
    PORT: z.string().optional(),
    NODE_ENV: z.string().optional(),
    CLIENT_BASE_URL: z.string().url(),
});

export const env = envSchema.parse(process.env);
