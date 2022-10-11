enum Colors {
  RED,
  BLUE,
  YELLOW,
}

enum Colors {
  GREEN = 'GREEN',
  BROWN = 100,
  GRAY = 200,
}

console.log(Colors)
console.log(Colors.BLUE)
console.log(Colors[0])

function choiceColor(color: Colors): void {
  console.log(Colors[color])
}

choiceColor(Colors.BROWN)
