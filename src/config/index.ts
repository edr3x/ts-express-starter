import { CorsOptions } from "cors";
import { env } from "./env";

const isProduction = env.NODE_ENV === "prod";

export default {
    app: {
        env: env.NODE_ENV,
        isProduction: isProduction,
        port: env.PORT,
    },
    cors: {
        origin: [
            "http://localhost:8080",
            "http://127.0.0.1:8080",
            env.CLIENT_BASE_URL,
        ],
        credentials: true,
    } as CorsOptions,
};
