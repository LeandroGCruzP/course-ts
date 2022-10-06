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
