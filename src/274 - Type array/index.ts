function multiplyArgs(...args: Array<number>): number {
  return args.reduce((acc, value) => acc * value, 1)
}

function concatenateStrings(...args: string[]): string {
  return args.reduce((acc, value) => acc + ' ' + value)
}

function toUpperCase(...args: string[]): string[] {
  return args.map((value) => value.toUpperCase())
}

console.log(multiplyArgs(1, 2, 3))
console.log(concatenateStrings('Leandro', 'Cruz'))
console.log(toUpperCase('a', 'b', 'c'))

const fullName1: readonly string[] = ['Alexandra', 'Laroca']
const fullName2: ReadonlyArray<string> = ['Alexandra', 'Laroca']

// fullName1[0] = 'Leandro' // ! ERROR: readonly
// fullName2[1] = 'Cruz' // ! ERROR: readonly

console.log(fullName1)
console.log(fullName2)
