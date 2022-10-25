export function add(a: unknown, b: unknown): number | string {
  if (typeof a === 'number' && typeof b === 'number') return a + b

  return `${a}${b}`
}

console.log(add(1, 2))
console.log(add('a', 'b'))

type Person = { name: string }
type Animal = { color: string }
type PersonOrAnimal = Person | Animal

function showName(obj: PersonOrAnimal) {
  if ('name' in obj) console.log(obj.name)
}

showName({ name: 'Leandro' })
