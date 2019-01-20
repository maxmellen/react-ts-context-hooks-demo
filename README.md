# Using Context & Hooks to replace Redux in (TypeScript) React

A simple example demonstrating how easily one can emulate a typical
React/Redux/React Redux setup using Context and the new Hooks API.

I use TypeScript in this example because I believe that variant types
([discriminated union types in TypeScript][discriminated-unions]) can replace
what Redux calls _actions_ and _action creators_ as well as all the boilerplate
they usually incur.

### License

This demo is published under the [MIT license][license].

[discriminated-unions]: https://www.typescriptlang.org/docs/handbook/advanced-types.html#discriminated-unions
[license]: ./LICENSE
