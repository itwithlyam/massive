![npm (tag)](https://img.shields.io/npm/v/@itwithlyam/massive)
![npm bundle size](https://img.shields.io/bundlephobia/min/@itwithlyam/massive)

# Massive

Just your normal NPM package that can do multiple things, including make a string upper or lower case, log information, and even calculate (in the future)!

## Example:

```
const massive = require('@itwithlyam/massive');

const egg = massive.big('egg is egg');

console.log(egg);

// outputs EGG IS EGG

const eggy = massive.small('EGG');

console.log(eggy);

// ouputs egg

massive.write('thing');

// outputs thing

massive.calculate(2, 3, "multiply");

// outputs 6
```

## Methods

+ massive.big("string"); - makes the string upper case (doesn't print out)
+ massive.small("string"); - makes the string lower case (doesn't print out)
+ massive.write("string"); - basically a shortcut to console.log (prints out)
+ massive.calculate(int, int, "string"); - a quick caluclator, with add, subtract, multiply and divide (prints out)

## Installation guide

```npm i --save @itwithlyam/massive```
