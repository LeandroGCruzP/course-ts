# TypeScript Course

- [Class 270: Type annotation](#class-270-type-annotation)
- [Class 271: Type any](#class-271-type-any)
- [Class 272: Type void](#class-272-type-void)

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

## Class 271: Type any
> Use any as a last resort
```ts
function showMessage(msg: any) {
    return msg
}
```
| Type  | Value
|:------|:------
|*any*  | * all values

```ts
console.log(showMessage([1, 2, 3]))
console.log(showMessage('Hi'))
console.log(showMessage(1))
```

## Class 272: Type void
```ts
function withoutReturn(...args: string[]): void {
    console.log(args.join(' '))
}

withoutReturn('Leandro', 'Cruz')
```
| Type  | Return
|:------|:------
|*void*  | without return

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
