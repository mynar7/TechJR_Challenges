// if only it were this simple
// return amt * 0.15;
// 10 * 0.15 = 1.5 😁
// 12.33 * 0.15 = 1.8495 😭
// 0.17 * 0.15 = 0.025500000000000002 🤬
function tipCalculator(amt) {
  return Math.round(0.15 * amt * 100) / 100
}