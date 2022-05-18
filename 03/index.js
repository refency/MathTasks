function toHex(value) {
  const hex = []

  while (value >= 16) {
    hex.push(value - (16 * ((value/16) | 0)))
    value = ((value/16) | 0)
  }

  hex.push(value);
  hex.reverse();

  for (let i = 0; i < hex.length; i++) {
    hex[i] = convertSymbolToHex(hex[i]);
  }

  return hex.join("");
}

function convertSymbolToHex(num) {
  switch (num) {
    case 10: return 'a'
    case 11: return 'b'
    case 12: return 'c'
    case 13: return 'd'
    case 14: return 'e'
    case 15: return 'f'
  }

  return num
}

module.exports = toHex;
