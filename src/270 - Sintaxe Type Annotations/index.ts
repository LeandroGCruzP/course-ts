/* eslint-disable @typescript-eslint/no-inferrable-types */
// * Basic types
// ? Type inference occurs here
const name: string = 'Leandro'
const age: number = 25
const adult: boolean = true
const symbol: symbol = Symbol('any-symbol')
const big: bigint = 10n

// * Array
const arrayOfNumbers: Array<number> = [1, 2, 3]
const arrayOfNumbers2: number[] = [1, 2, 3]
const arrayOfStrings: Array<string> = ['a', 'b']
const arrayOfStrings2: string[] = ['a', 'b']

// * Object
const person: { name: string; age: number; adult?: boolean } = {
  name: 'Alexandra',
  age: 23,
}

// * Function
function sum(x: number, y: number): number {
  return x + y
}

const sum2: (x: number, y: number) => number = (x, y) => x + y

export {
  name,
  age,
  adult,
  symbol,
  big,
  arrayOfNumbers,
  arrayOfNumbers2,
  arrayOfStrings,
  arrayOfStrings2,
  person,
  sum,
  sum2,
}
