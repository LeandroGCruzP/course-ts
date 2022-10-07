const clientData1: readonly [number, string] = [1, 'Alexandra']
const clientData2: [number, string, string] = [2, 'Alexandra', 'Laroca']
const clientData3: [number, string, string?] = [3, 'Alexandra']
const clientData4: [number, ...string[]] = [3, 'Alexandra', 'Laroca']

// clientData1.pop() // ! ERROR: readonly does not allow to change a value with pop
// clientData1.push('Laroca') // ! ERROR: readonly does not allow to change a value with push

console.log(clientData1)
console.log(clientData2)
console.log(clientData3)
console.log(clientData4)
