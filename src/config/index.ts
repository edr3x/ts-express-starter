import { CorsOptions } from "cors";

import { env } from "./env";

export default {
    app: {
        port: env.PORT || 8080,
        isProduction: env.NODE_ENV === "production",
    },
    cors: {
        origin: [
            "http://localhost:8080",
            "http://127.0.0.1:8080",
            env.CLIENT_BASE_URL,
        ],
        credentials: true,
    } as CorsOptions,
} as const;
