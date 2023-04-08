import { CustomError } from "../utils/custom_error";

export async function checkRoute() {
    return "hello there";
}

export async function checkErrorRoute(val: number) {
    if (val === 200) {
        throw new CustomError(200, "Error 200");
    }

    if (val === 300) {
        throw new CustomError(300, "Error 300");
    }

    if (val === 400) {
        throw new CustomError(400, "Error 400 error");
    }

    return "Error Route Success";
}
