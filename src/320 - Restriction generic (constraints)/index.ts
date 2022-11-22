type GetKeysFn = <O, K extends keyof O>(obj: O, key: K) => O[K]

const getKeys: GetKeysFn = (obj, key) => obj[key]

const animal = {
  color: 'Black',
  vaccine: ['vaccine 1', 'vaccine 2'],
  age: 8,
}

const vaccines = getKeys(animal, 'vaccine')
const color = getKeys(animal, 'color')
const age = getKeys(animal, 'age')

console.log(vaccines, color, age)
