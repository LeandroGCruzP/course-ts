type FilterCallback<U> = (value: U, index?: number, array?: U[]) => boolean

function myFilter<T>(array: T[], callbackFn: FilterCallback<T>): T[] {
  const newArray = []

  for (let i = 0; i < array.length; i++) {
    if (callbackFn(array[i])) {
      newArray.push(array[i])
    }
  }

  return newArray
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const originalFilterArray = numbers.filter((value) => value < 5)
const customFilterArray = myFilter(numbers, (value) => value < 5)

console.log(originalFilterArray)
console.log(customFilterArray)
