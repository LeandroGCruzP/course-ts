export function isNumber(value: unknown): value is number {
  return typeof value === 'number'
}

export function sum<T>(...args: T[]): number {
  const functionReturn = args.reduce((sum, value) => {
    if (isNumber(sum) && isNumber(value)) {
      return sum + value
    }

    return sum
  }, 0)

  return functionReturn
}

console.log(isNumber(123))
console.log(isNumber('asd'))
console.log(sum(1, 2, 3))
console.log(sum(...[1, 2, 3, 'a', 'b', 'c', 1]))
