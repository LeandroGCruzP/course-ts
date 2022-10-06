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

// ObjectB.keyA = 'other value' * ERROR
ObjectB.keyB = 'other value B'
ObjectB.keyC = 'new value'

console.log('ObjectB', ObjectB)
```

| Prefix    | Description
|:----------|:-----------
|*readonly* | Does not allow to change a value
