---
title: React components done right with TypeScript mapped and conditional types
published: true
description: Learn how to write efficient and concise react components using TypeScript.
tags: typescript, react, javascript, webdev
cover_image: https://thepracticaldev.s3.amazonaws.com/i/4eaahfl09brz9ozacdg1.jpeg
canonical_url: https://medium.com/free-code-camp/make-react-components-great-again-with-typescript-mapped-and-conditional-types-fa729bfc1a79
---

You’ve probably heard about TypeScript, If not you should check it out. You may have heard someone claiming how great type safety is.

TypeScript is great. As someone who hates to transpile his code, I would definitely do it with TypeScript if I had to. So much has been said about TypeScript, and there isn’t really anything new that I can add. But I do believe that type safety is not all about making your code ugly with type definitions everywhere. So how can we write type-safe code without having to litter type declarations everywhere?

Type inference and advanced features like derived and dynamic types are the answer. Editors and IDEs we use are smart enough to handle code with inferred type gracefully without us having to see the types all the time visually. (Of course, they all usually show you the type when you hover over an inferred type.)

TypeScript has very good type inference. As a rule of thumb, you can always start without declaring the type for any variable and see if the compiler infers it. With modern editors like VSCode, you can see this immediately. So set your tsconfig to the strict mode. Then start declaring types when the compiler complains.

Additionally, TypeScript 2.1 and 2.8 introduced a bunch of cool lookup types. Now you can dynamically infer types using different techniques like Intersection types, Union types, Index types, mapped types and conditional types.

## Index types

Index types enable us to check properties and types of an interface or type dynamically using the `keyof T` (**index type query operator**) and `T[K]` (**indexed access operator**). Let's take the below interface for example.

```typescript
    interface Person {
      name: string;
      age: number;
      address: string;
      sayHi: (msg: string) => string;
    }
```

The `keyof T` operator gets a union type of all the key names of the type `T` and hence `keyof Person` will give us `'name' | 'age' | 'address' | sayHi'` as result.

The `T[K]` operator gets the type for the provided key. `Person['name']` will result in `string` and `Person[*keyof* Person]` will result in `string | number | ((msg: string) => string)`.

## Mapped types

Let us see what mapped types are. Let us say we have the below interface for a Person.

```typescript
    interface Person {
      name: string;
      age: number;
      address: string;
      sayHi: (msg: string) => string;
    }
```

Now in every project, it is almost always a common requirement to have variations of a certain interface. For example, let’s say we need a read-only version of the person as below.

```typescript
    interface ReadonlyPerson {
      readonly name: string;
      readonly age: number;
      readonly address: string;
      readonly sayHi: (msg: string) => string;
    }
```

In this case, we would have to replicate the Person interface and we have to keep them in sync manually. This is where mapped types will come in handy, so let us use the builtin mapped type, `Readonly`, for this.

```typescript
    type ReadonlyPerson  = Readonly<Person>
```

If you hover over the `ReadonlyPerson` type you can see the inferred type as below.

![Inferred type view in VsCode](https://cdn-images-1.medium.com/max/2000/1*GLnLx-iMscyEMe9BQqCazg.png)*Inferred type view in VsCode*

That is cool, right? Now we can create types from existing types and don’t have to worry about keeping them in sync. How does it work, what does `Readonly<Person>` do? Let’s take a look at the mapped type.

```typescript
    type Readonly<T> = {
        readonly [K in keyof T]: T[K];
    }
```

The `in` operator from TypeScript does the trick here. It maps all the declarations of the existing type into the new type. The `keyof` operator provides the keys from our type for the mapping. Let us build our own mapped type.

Let us say we need a read-only Person interface where all the fields are nullable as well. We can build a mapped type as below for that.

```typescript
    type ReadonlyNullablePerson = {
        readonly [P in keyof Person]: Person[P] | null;
    }
```

And it is inferred as below

![](https://cdn-images-1.medium.com/max/2000/1*R24n6ufx4STh96tfldlgJw.png)

Let’s make it generic so that it can be used with any interface.

```typescript
    type ReadonlyNullable<T> = {
        readonly [K in keyof T]: T[K] | null;
    }

    type ReadonlyNullablePerson  = ReadonlyNullable<Person>
```

TypeScript includes `Readonly<T>`, `Partial<T>`, `Pick<T, K extends keyof T>` and `Record<K extends string, T>` as built-in mapped types. Pick and Record can be used as below, check them in your editor to see what types they produce.

```typescript
    type PersonMinimal = Pick<Person, 'name' | 'age'>

    type RecordedPerson = Record<'name' | 'address', string>
```

For every other use case, you can build your own mapped types.

## Conditional types

> A conditional type selects one of two possible types based on a condition expressed as a type relationship test.

Let us look at an example.

```typescript
    type Foo<T, U> = T extends U ? string : boolean

    interface Me {}
    interface You extends Person {}

    type FooBool = Foo<Me, Person> // will result in boolean
    type FooString = Foo<You, Person> // will result in string
```

The type dynamically inferred from `Foo<T, U>` will be either `string` or `boolean` depending on what the first generic is extended from.

Let us see how we can mix conditional types with mapped types to infer a new type from Person which only includes the non-function properties.

```typescript
    type NonFunctionPropNames<T> = {
      [K in keyof T]: T[K] extends Function ? never : K
    }[keyof T];

    type NonFunctionProps<T> = Pick<T, NonFunctionPropNames<T>>

    type PersonProps = NonFunctionProps<Person>

    /* Produces the below type
    type PersonProps = {
        name: string;
        age: number;
        address: string;
    }
    */
```

We first get all the non-function property names from the interface. Then use the **Pick** mapped type to pick those from the interface to form the new interface.

TypeScript provides the following inbuilt conditional types:

* `Exclude<T, U>` – Exclude from `T` those types that are assignable to `U`.

* `Extract<T, U>` – Extract from `T` those types that are assignable to `U`.

* `NonNullable<T>` – Exclude `null` and `undefined` from `T`.

* `ReturnType<T>` – Obtain the return type of a function type.

* `InstanceType<T>` – Obtain the instance type of a constructor function type.

## Let us put it into use

These advanced types become even more powerful when you combine them together. Let’s see some practical uses of this in React.

### React component and Redux reducer in ES6

Let see a simple React component with a reducer written in ES6. Take a look at ***index.jsx*** in the below code sandbox:

{% codesandbox 40n3y52qlx runonclick=1 %}

As you can see, we use the prop-types library to define the component props. It is not the most efficient way, as it includes considerable overhead during development. It doesn’t provide full type safety anyway.

### React component and Redux reducer in TypeScript

Now let us convert this simple example to TypeScript so that it is type safe. Take a look at ***index.tsx*** in the below code sandbox:

{% codesandbox znv36k09op runonclick=1 %}

As you can see, the code is more type-safe now. It is also much more verbose even without PropTypes library and all the type inference.

### React component and Redux reducer in TypeScript with advanced types

Now let us apply the advanced types that we learned to make this example less verbose and even more type safe. Take a look at ***index.tsx*** in the below code sandbox:

{% codesandbox zq7w69p57x runonclick=1 %}

As you can see, we used `Readonly` and `ReturnType` mapping along with some other type inference techniques to write a more type-safe but less verbose version of the component.

## Conclusion

If you are using React with TypeScript, then these are some of the techniques you must apply. If you are considering a type system for React, then look no further than TypeScript. It has great features, great tooling, excellent IDE/Editor support and an awesome community.

I gave a talk on TypeScript for Devoxx 2018, and you can see the video and slides if you like here.

{% youtube SBwGH4kbkms %}

{% speakerdeck ffe22480dbfd4c1f83f66c380bba2283 %}

---

Check out my book “*Full Stack Development with JHipster*” on [Amazon](https://www.amazon.com/Stack-Development-JHipster-Deepu-Sasidharan/dp/178847631X) and [Packt](https://www.packtpub.com/application-development/full-stack-development-jhipster) if you like to learn about Full stack development with an awesome stack that includes TypeScript and React.

If you like JHipster don’t forget to give it a star on [Github](https://github.com/jhipster/generator-jhipster).

If you like this article, please like or comment.

You can follow me on [Twitter](https://twitter.com/deepu105) and [LinkedIn](https://www.linkedin.com/in/deepu05/).

Originally published in [Medium](https://medium.com/free-code-camp/make-react-components-great-again-with-typescript-mapped-and-conditional-types-fa729bfc1a79) on November 19, 2018