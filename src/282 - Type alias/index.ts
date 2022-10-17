type Age = number
type ColorRGB = 'Red' | 'Green' | 'Blue'
type ColorCMYK = 'Ciano' | 'Magenta' | 'Yellow' | 'Black'
type FavoriteColor = ColorRGB | ColorCMYK

type Person = {
  name: string
  age: Age
  salary: number
  favoriteColor?: string
}

const person: Person = {
  name: 'Leandro',
  age: 25,
  salary: 10_000, // 10000
}

function setFavoriteColor(person: Person, color: FavoriteColor): Person {
  return { ...person, favoriteColor: color }
}

console.log(setFavoriteColor(person, 'Ciano'))
console.log(person)

export { person, setFavoriteColor }
