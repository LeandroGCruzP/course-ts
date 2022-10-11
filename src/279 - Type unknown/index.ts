let x: unknown

x = 100
x = 'Leandro'
x = 200
const y = 300

// console.log(x + y) // ! Error: Unknown need verification

if (typeof x === 'number') console.log(x + y)

export { x }
