## Class 272: Type void
```ts
function withoutReturn(...args: string[]): void {
  console.log(args.join(' '))
}

withoutReturn('Leandro', 'Cruz')
```
| Type  | Return
|:------|:------
|*any*  | without return

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
