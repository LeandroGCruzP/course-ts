// Object does not have autocomplete
const ObjectA: Record<string, unknown> = {
  keyA: 'value A',
  keyB: 'value B',
}

ObjectA.keyA = 'other value A'
ObjectA.keyC = 'new value'

console.log('ObjectA', ObjectA)

// Object with autocomplete
const ObjectB: {
  readonly keyA: string
  keyB: string
  [key: string]: unknown
} = {
  keyA: 'value A',
  keyB: 'value B',
}

// ObjectB.keyA = 'other value' * ERROR: readonly does not allow to change a value
ObjectB.keyB = 'other value B'
ObjectB.keyC = 'new value'

console.log('ObjectB', ObjectB)
