export function joinObjects<O, P>(obj1: O, obj2: P): O & P {
  // return { ...obj1, ...obj2 }
  return Object.assign({}, obj1, obj2)
}

const obj1 = { key1: 'value1' }
const obj2 = { key2: 'value2' }
const join = joinObjects(obj1, obj2)
console.log(join)
