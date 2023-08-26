import * as argon from "argon2";

function generate(password: string): Promise<string> {
    return argon.hash(password);
}

function compare(password: string, hash: string): Promise<boolean> {
    return argon.verify(hash, password);
}

export default { generate, compare };
