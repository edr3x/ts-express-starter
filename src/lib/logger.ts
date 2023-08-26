import { createLogger, transports, format } from "winston";

const logFormat = format.combine(
    format.timestamp({ format: "ddd DD-MM-YYYY hh:mm:ss A" }),
    format.printf(
        (info) =>
            `[${info.timestamp}] - [${info.level.toUpperCase()}] - ${
                info.message
            }`,
    ),
    format.colorize({ all: true }),
);

export const logger = createLogger({
    level: "info",
    format: logFormat,
    transports: [
        new transports.Console(),
        new transports.File({
            filename: "app.log",
        }),
    ],
});

// info: you can see your logs stored in `app.log` file in project directory

/*
 * logging priority:
 *
 * error  -> highest priority
 * warn
 * info   -> lower priority
 *
 * There are other lower ones like http, verbose, debug and silly
 */
