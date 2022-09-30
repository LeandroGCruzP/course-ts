/* eslint-disable @typescript-eslint/no-explicit-any */
// ? Use any as a last resort
function showMessage(msg: any) {
  return msg
}

console.log(showMessage([1, 2, 3]))
console.log(showMessage('Hi'))
console.log(showMessage(1))
