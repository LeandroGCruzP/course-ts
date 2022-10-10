let x
if (typeof x === 'undefined') x = 10

console.log(x * 2)

function createPerson(
  firstName: string,
  lastName?: string,
): {
  firstName: string
  lastName?: string
} {
  return {
    firstName,
    lastName,
  }
}

console.log(createPerson('Leandro'))
console.log(createPerson('Leandro', 'Cruz'))

function squareOf(x: any) {
  if (typeof x === 'number') return x * x

  return null
}

const squareOfTwoNumber = squareOf(2)

if (squareOfTwoNumber === null) {
  console.log('Invalid calculation')
} else {
  console.log(squareOfTwoNumber)
}
