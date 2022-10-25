type ColorsObj = typeof colorsObj
type ColorKeys = keyof ColorsObj

const colorsObj = {
  red: 'vermelho',
  green: 'verde',
  blue: 'azul',
}

function translateColors(color: ColorKeys, colors: ColorsObj): string {
  return colors[color]
}

console.log(translateColors('red', colorsObj))
console.log(translateColors('green', colorsObj))
console.log(translateColors('blue', colorsObj))
