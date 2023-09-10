import { expect, test } from "vitest";

import { getUserService } from "./user.service";

test("user", async () => {
    expect(await getUserService()).toBe("Get User Route");
});
