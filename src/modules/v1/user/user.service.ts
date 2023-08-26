import hash from "@/lib/hash";

import { CreateUserSchema } from "./user.schema";

export async function getUserService() {
    return "Get User Route";
}

export async function createUserService(body: CreateUserSchema) {
    const hashedPwd = await hash.generate(body.password);

    return { message: "User Created", user: { ...body, password: hashedPwd } };
}
