import { z } from "zod";

const passwordRegex = new RegExp(
    "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9!@#$%^&*]).{10,}$",
);
const regxMessage =
    "Password must be at least 10 characters long with at least one uppercase, one lower case and one number or symbol character.";

export const createUserSchema = z.object({
    body: z.object({
        fullName: z.string({
            required_error: "Full Name is required",
        }),
        email: z
            .string({
                required_error: "Email is required",
                invalid_type_error: "Email must be a string",
            })
            .email("Not a valid email"),
        password: z.string().regex(passwordRegex, regxMessage),
    }),
});

export type CreateUserSchema = z.TypeOf<typeof createUserSchema>["body"];
