type WithName = { name: string }
type WithLastName = { lastName: string }
type WithAge = { age: number }
type Person = WithName & WithLastName & WithAge

const person: Person = {
  name: 'Leandro',
  lastName: 'Cruz',
  age: 25,
}

console.log(person)

type AB = 'A' | 'B'
type AC = 'A' | 'C'
type AD = 'A' | 'D'
type Intersection = AB & AC & AD

export { person }
