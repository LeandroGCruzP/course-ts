function withoutReturn(...args: Array<string>): void {
  console.log(args.join(' '))
}

withoutReturn('Leandro', 'Cruz')

const person = {
  name: 'Alexandra',
  lastName: 'Laroca',

  displayName(): void {
    console.log(this.name + ' ' + this.lastName)
  },
}

person.displayName()

export { person }
