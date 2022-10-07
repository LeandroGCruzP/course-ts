# TypeScript Course

- [Class 270: Type annotation](#class-270-type-annotation)
- [Class 271: Type any](#class-271-type-any)
- [Class 272: Type void](#class-272-type-void)
- [Class 273: Type object](#class-273-type-object)
- [Class 274: Type array](#class-274-type-array)

## Class 270: Type annotation
### *Basic types*
| Type     | Value
|:---------|:------
|*string*  | '' "" ``
|*number*  | 10, 1.57, -5.55, 0xf00d (hexadecimal), 0b1010 (binary), 0o7744 (octal)
|*boolean* | true or false
|*symbol*  | symbol
|*bigint*  | bigint

> ℹ️ Type inference occurs here
```ts
let name: string = 'Leandro'
let age: number = 25
let adult: boolean = true
let symbol: symbol = Symbol('any-symbol')
let big: bigint = 10n
```

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

## Class 271: Type any
> ⚠️ Use any as a last resort

| Type  | Value
|:------|:------
|*any*  | * all values

```ts
function showMessage(msg: any) {
    return msg
}

console.log(showMessage([1, 2, 3]))
console.log(showMessage('Hi'))
console.log(showMessage(1))
```

## Class 272: Type void
| Type  | Return
|:------|:------
|*void*  | without return

```ts
function withoutReturn(...args: string[]): void {
    console.log(args.join(' '))
}

withoutReturn('Leandro', 'Cruz')
```

#### *Other example*
```ts
const person = {
    name: 'Alexandra',
    lastName: 'Laroca',

    displayName(): void {
        console.log(this.name + ' ' + this.lastName)
    }
}

person.displayName()
```

## Class 273: Type object
> ℹ️ Object does not have autocomplete
```ts
const ObjectA: Record<string, unknown> = {
  keyA: 'value A',
  keyB: 'value B',
}

ObjectA.keyA = 'other value A'
ObjectA.keyC = 'new value'

console.log('ObjectA', ObjectA)
```

> ℹ️ Object with autocomplete
```ts
const ObjectB: {
  readonly keyA: string
  keyB: string
  [key: string]: unknown
} = {
  keyA: 'value A',
  keyB: 'value B',
}

// ObjectB.keyA = 'other value' // ! ERROR: readonly
ObjectB.keyB = 'other value B'
ObjectB.keyC = 'new value'

console.log('ObjectB', ObjectB)
```

| Prefix    | Description
|:----------|:-----------
|*readonly* | Does not allow to change a value

## Class 274: Type array

```ts
function multiplyArgs(...args: Array<number>): number {
  return args.reduce((acc, value) => acc * value, 1)
}

console.log(multiplyArgs(1, 2, 3))
```

#### *Other example*
```ts
function concatenateStrings(...args: string[]): string {
  return args.reduce((acc, value) => acc + ' ' + value)
}

console.log(concatenateStrings('Leandro', 'Cruz'))
```

#### *Other example*
```ts
function toUpperCase(...args: string[]): string[] {
  return args.map((value) => value.toUpperCase())
}

console.log(toUpperCase('a', 'b', 'c'))
```

### *Array with readonly*
```ts
const fullName1: readonly string[] = ['Alexandra', 'Laroca']
const fullName2: ReadonlyArray<string> = ['Alexandra', 'Laroca']

// fullName1[0] = 'Leandro' // ! ERROR: readonly
// fullName2[1] = 'Cruz' // ! ERROR: readonly

console.log(fullName1)
console.log(fullName2)
```
