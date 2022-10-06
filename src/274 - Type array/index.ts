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
