type CustomPromise = number

const arrayNumbers: Array<number> = [1, 2, 3, 4, 5, 6]

console.log(arrayNumbers)

async function promiseAsync() {
  return 1
}

function customPromise(): Promise<CustomPromise> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(1)
    }, 1000)
  })
}

promiseAsync().then((result) => console.log(result + 1))
customPromise().then((result) => console.log(result + 1))
