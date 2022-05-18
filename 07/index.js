function rgb(r, g, b){
  return transferColorToNumber(r) + transferColorToNumber(g) + transferColorToNumber(b)
}

function transferColorToNumber (color) {
  if (color > 255) color = 255
  if ((typeof color === "object" || typeof color === 'function') && (color !== null) || (color < 0)) color = 0

  const hex = []

  while (color >= 16) {
    hex.push(color - (16 * ((color/16) | 0)))
    color = ((color/16) | 0)
  }

  hex.push(color);
  hex.reverse();

  for (let i = 0; i < hex.length; i++) {
    hex[i] = convertSymbolToHex(hex[i]);
  }

  if (hex.length === 1 && hex[0] != 0) hex.unshift(0)

  return hex.join("");
}

function convertSymbolToHex(num) {
  switch (num) {
    case 0: return '00'
    case 10: return 'A'
    case 11: return 'B'
    case 12: return 'C'
    case 13: return 'D'
    case 14: return 'E'
    case 15: return 'F'
  }

  return num
}

module.exports = rgb;
