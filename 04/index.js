function rle(source) {
  let char = source[0]
  let count = 0
  let string = ''

  for (const ch of source) {
    if (ch != char) {
      string += compress(count, char)

      count = 0
      char = ch
    }

    count ++
  }

  string += compress(count, char)

  return string
}

function compress (count, char) {
  if (count > 1) return char + count.toString()
  else return char
}

module.exports = rle;
