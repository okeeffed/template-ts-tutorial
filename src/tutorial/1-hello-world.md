# 1: Hello World

A simple example of how to use the template.

In this lesson, we want to implement a simple "Hello, World".

If you need to reset the tutorial, run `pnpm reset` to reset all the files, or run `pnpm reset 1-hello-world` to reset just the first tutorial.

Once reset, you will find the following code in `src/tutorial/1-hello-world.ts`:

```ts
export function helloWorld(): string {
  // TODO: Return hello world
  return "";
}
```

From the command line, run the tests that match that file with `pnpm test 1-hello-world`. This will run the tests from `src/tutorial/1-hello-world.test.ts` in the command line.

You should start by seeing something like the following:

```s
 ❯ src/tutorial/1-hello-world.test.ts (1)
   ❯ Lesson 1 - Hello World (1)
     × should return the correct string

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯ Failed Tests 1 ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯

 FAIL  src/tutorial/1-hello-world.test.ts > Lesson 1 - Hello World > should return the correct string
AssertionError: expected '' to be 'Hello, World!' // Object.is equality

- Expected
+ Received

- Hello, World!

 ❯ src/tutorial/1-hello-world.test.ts:6:26
      4| describe("Lesson 1 - Hello World", () => {
      5|   test("should return the correct string", () => {
      6|     expect(helloWorld()).toBe("Hello, World!");
       |                          ^
      7|   });
      8| });

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/1]⎯

 Test Files  1 failed (1)
      Tests  1 failed (1)
   Start at  18:23:14
   Duration  12ms


 FAIL  Tests failed. Watching for file changes...
       press h to show help, press q to quit
```

The task is simple to return `Hello, World!` from the function. Update the return string to get the green light.

Once you change the file, you should see something like the following:

```s
 ✓ src/tutorial/1-hello-world.test.ts (1)
   ✓ Lesson 1 - Hello World (1)
     ✓ should return the correct string

 Test Files  1 passed (1)
      Tests  1 passed (1)
   Start at  18:21:30
   Duration  297ms (transform 102ms, setup 0ms, collect 90ms, tests 1ms, environment 0ms, prepare 63ms)


 PASS  Waiting for file changes...
       press h to show help, press q to quit
```

Congratulations! You managed to pass your first tutorial.
