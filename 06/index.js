function getResult(actions) {
  let power = false
  let login = false
  let click = 0

  let open = 0

  for (const action of actions) {
    if (power === false && action === 'power') {
      power = true
      click = 0
    }
    // Так как после выключения ПК пароль вводится снова, я сделал login = false.
    // В условии этого нет, но так как нет параметра чтобы понять что пароль введен верно или неверно, то сделал так
    else if (power === true && action === 'power') {
      power = false
      login = false
      click = 0
    }

    if (login === false && action === 'keystrokes') {
      login = true
      click = 0
    }
    else if (login === true && action === 'keystrokes') {
      login = false
      click = 0
    }

    if (action === 'click') click++

    if (power && login && click === 2) {
      open++
      click = 0
    }
  }

  return open
}

module.exports = getResult;
