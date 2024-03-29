### TypeScript provides many types to JavaScript

### TypeScript enables you to write your own types

## Core Types (TS & JS)

### Number

#### In TypeScript, as the same is true for TypeScript, there is only one number type. There are no special types for integers or floats

#### All numbers, no differentiation between integers or floats

```js
  const age: number = 39;
  const height: number = 6.1
  }
```

### String

#### That would be a text that you can define in one of these three ways: single quotes, double quotes and backticks

#### The last notation with backticks is a special syntax provided in modern JavaScript and also in TypeScript, which allows us to write so-colled template literals that are regular strings where you can dynamically inject some data into them

```js
  const firstName: string = "Slavo";
  const lastName: string = "Slavo";
  const username: string = 'foo(NOMAD)';
  const city: string = `Miami`;
  const greeting: string = `Hello ${firstName} ${lastName}`
  }
```

### Boolean

#### The most basic datatype is the simple true/false value, which JavaScript and TypeScript call a boolean value

#### The boolean know those two values, true or false. There is a Truthy/Falsy concept in JavaScript, which you should know is not related to data types. That some behind the scenes work JavaScript does at runtime when it sees specific values and if conditions. For example, number zero is a false value

```js
  const isGood: boolean= true;
  const isLazy: string = false;
```
