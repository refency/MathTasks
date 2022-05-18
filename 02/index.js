function validParentheses(parens){
  const brackets = {
    ')': '(',
    '}': '{',
    '>': '<',
    ']': '['
  };

  const symbols = [ '(', ')', '{', '}', '<', '>', '[', ']' ];
  const st = [];
  
  if (parens.length === 0) return false

  for (let i = 0; i < parens.length; i++) {
    if (!symbols.includes(parens[i])) continue

    if (isClosedBracket(parens[i])) {
      if (brackets[parens[i]] !== st.pop()) return true;
    } else {
      st.push(parens[i]);
    }
  }

  if (st.length === 0) {
    return false
  } else {
    return true
  }
}

function isClosedBracket(ch) {
  return [')', '}', '>', ']'].indexOf(ch) > -1;
}

module.exports = validParentheses;
