let x = 10 // eslint-disable-line
x = 0b1010

const y = 10
let a: 10 = 10 // eslint-disable-line
let b = 10 as const // eslint-disable-line

const person = {
  name: 'Leandro' as const,
  lastName: 'Cruz',
}

// person.name = 'Alexandra' // ! Error: type Alexandra not assignable to type Leandro

function selectColor(color: 'Red' | 'Yellow' | 'Blue'): string {
  return color
}

console.log(selectColor('Blue'))

export { x, y, a, b, selectColor }
