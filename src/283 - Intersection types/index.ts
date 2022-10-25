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

// Extends with interface

interface Person2 extends WithName, WithLastName, WithAge {}

const person2: Person2 = {
  name: 'Leandro',
  lastName: 'Cruz',
  age: 25,
}

console.log(person2)

export { person, person2 }
