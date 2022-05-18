function rleDecode(source) {
  const array = source.split('');
  let string = ''

  let num
  let str = ''

  for (const ch of array) {
    if (isNumber(ch)) {
      if (num != undefined) {
        string = duplicate(str, num, string)

        num = 0
        str = ''
      } else {
        string += str
        str = ''
      }

      num = ch
    } else {
      str = str.concat(ch)
    }
  }
  if (num === undefined) return str

  string = duplicate(str, num, string)

  return string
}

function isNumber(char) {
  if (typeof char !== 'string') {
    return false;
  }

  if (char.trim() === '') {
    return false;
  }

  return !isNaN(char);
}

function duplicate (str, num, string) {
  for (let i = 0; i < str.length; i++) {
    string += str[i].repeat(Number(num))
  }

  return string
}

module.exports = rleDecode;
