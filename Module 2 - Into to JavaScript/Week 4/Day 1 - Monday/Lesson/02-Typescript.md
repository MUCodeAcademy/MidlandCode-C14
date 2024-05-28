# Typescript

## What is TypeScript?

It might sound incredibly simple, but TypeScript is basically JavaScript but with type specificity. To declare a variable in JavaScript, we would usually use: `let x = 5` or simply `let x` if we didn't know a starting value. In addition, JavaScript doesn't care what value or type of value is going to be stored. We could do all of the following in order and get no errors:

```js
let x = 5;
x = [1, 2, 3, 4];
x = { name: "Bob" };
x = "Bob";
x = false;
x = undefined;
```

This is because without types, it doesn't know what kind of value to expect and also doesn't care. This is where TypeScript comes into play. With normal JS, it might break your application if you're expecting x to be a boolean, but you accidentally assign it a string value. In TypeScript, you won't even be able to do that without getting an error in your IDE. Let's say we wanted x to only be a string. In TypeScript that would simply be: `let x: string;` the colon and type tells it what type to expect.

Below is an example of declaring variables of differing types in TS:

```ts
let a: number = 5;
let b: number[] = [1, 2, 3, 4];
let c: { name: string } = { name: "Bob" };
let d: string = "Bob";
let e: boolean = false;
let f: undefined = undefined;

// There is also an 'any' type in case you're not sure what it should be.
let g: any;
// However, this sort of defeats the purpose of TypeScript's type safety features.
```

Similarly, when you want to use parameters for functions, you need to specify the type like this:

```ts
function greet(name: string) {
    console.log(`Hello, ${name}!`);
};

greet("World");
```

Those are the main differences between TS and JS.

## How to Use TypeScript

First and foremost, browsers and Node do not know how to handle TypeScript. We'll be getting more into other tools once we start with React next module. In the meantime, we need to turn the typescript into something that can be read and compiled before we can use it. We can do that with the following steps:

1. Install TypeScript globally via the command line: `npm install -g typescript` (this only needs to be done the first time you start using typescript)
2. Create a TS file and start coding. Instead of using the `.js` extension you need to use the `.ts` extension instead.
3. When you're done coding, compile the .ts file into JavaScript with the command: `tsc FILENAME`. This will create a `.js` file which you can then attach to an HTML file or run via node.
4. (optional) To avoid manually compiling the TypeScript file every time you make changes, you can use a watch mode with this command: `tsc script.ts --watch`. This will automatically recompile the TypeScript file whenever you save changes.

## Resources

TS is becoming increasingly common since more and more web developers prefer using it over regular JS. It would be a good idea to practice TS or make some of your future projects in TS rather than JS.

There is more to learn, but it won't necessarily be required for the future of this class, so here are some good references:

- [Basic TS Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
- [Classes](https://www.typescriptlang.org/docs/handbook/2/classes.html)
- [Modules](https://www.typescriptlang.org/docs/handbook/modules.html)
