import { expect, describe, test } from "vitest";
import { helloWorld } from "./1-hello-world";

describe("Lesson 1 - Hello World", () => {
  test("should return the correct string", () => {
    expect(helloWorld()).toBe("Hello, World!");
  });
});
