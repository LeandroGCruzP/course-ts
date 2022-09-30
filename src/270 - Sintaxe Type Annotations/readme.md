## Class 270: Type annotation
### *Basic types*
> Type inference occurs here
```ts
let name: string = 'Leandro'
let age: number = 25
let adult: boolean = true
let symbol: symbol = Symbol('any-symbol')
let big: bigint = 10n
```
| Type     | Value
|:---------|:------
|*string*  | '' "" ``
|*number*  | 10, 1.57, -5.55, 0xf00d (hexadecimal), 0b1010 (binary), 0o7744 (octal)
|*boolean* | true or false
|*symbol*  | symbol
|*bigint*  | bigint

### *Array*
```ts
let arrayOfNumbers: Array<number> = [1, 2, 3]
let arrayOfNumbers2: number[] = [1, 2, 3]
let arrayOfStrings: Array<string> = ['a', 'b']
let arrayOfStrings2: string[] = ['a', 'b']
```

### *Object*
```ts
let person: {name: string, age: number, adult?: boolean} = {
  name: 'Alexandra',
  age: 23
}
```

### *Function*
```ts
function sum(x: number, y: number): number {
  return x + y
}

const sum2: (x:number, y:number) => number = (x, y) => x + y
```
