type Doc = {
  title: string
  text: string
  date?: Date
}

const doc: Doc = {
  title: 'My title',
  text: 'My text',
}

// console.log(doc.date.toString()) // ! Throw Error
console.log(doc.date?.toString()) // Optional chaining
console.log(doc.date?.toString() ?? 'No date to show') // Null coalescence operator
console.log(undefined ?? 'No date to show') // Null coalescence operator
console.log(null ?? 'No date to show') // Null coalescence operator
