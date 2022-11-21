interface ProtocolPerson<T, U> {
  name: T
  lastName: T
  age: U
}

// type ProtocolPerson2<T, U> = {
//   name: T
//   lastName: T
//   age: U
// }

const student1: ProtocolPerson<string, number> = {
  name: 'Leandro',
  lastName: 'Cruz',
  age: 25,
}

interface ProtocolPerson3<T = string, U = number> {
  name: T
  lastName: T
  age: U
}

const student2: ProtocolPerson3<string, string> = {
  name: 'Alexandra',
  lastName: 'Laroca',
  age: '23',
}

const student3: ProtocolPerson3 = {
  name: 'John',
  lastName: 'Doe',
  age: 42,
}

console.log(student1)
console.log(student2)
console.log(student3)
