function changeCalculator(amt) {
  // bonus!!
  // enforce two decimal places
  // if (typeof amt !== 'number' || Number.isNaN(amt)) return false
  // if (amt.toString().includes('.') && amt.toString().split(".")[1].length > 2)
  //   return false
  // if (amt < 0) return false

  const { dollars, change } = getChangeAndDollarsAsInts(amt)
  const bills = {
    hundreds: 100,
    fifties: 50,
    twenties: 20,
    tens: 10,
    fives: 5,
    ones: 1,
  }
  const coins = {
    quarters: 25,
    dimes: 10,
    nickels: 5,
    pennies: 1,
  }
  const getBills = createChangeCalculator(bills)
  const getCoins = createChangeCalculator(coins)
  return {...getCoins(change), ...getBills(dollars)}
}

function getChangeAndDollarsAsInts(amt) {
  const dollars = Math.trunc(amt)
  const change = (amt * 100) - (dollars * 100)
  return { dollars, change }
}

function createChangeCalculator(denominations) {
  return function _getChange(amt) {

    const answer = {}
    for (const [billOrCoin, value] of Object.entries(denominations)) {
      if (amt >= value) {
        const remainder = amt % value
        answer[billOrCoin] = (amt - remainder) / value
        amt = remainder
      } else {
        answer[billOrCoin] = 0
      }
    }
    return answer
  }
}