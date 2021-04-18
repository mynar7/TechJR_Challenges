function tipCalculator(amt) {
  // if only it were this simple
  let tip = amt * 0.15;
  // 10 * 0.15 = 1.5 😁
  // 12.33 * 0.15 = 1.8495 😭
  // 0.17 * 0.15 = 0.025500000000000002 🤬

  // NOTE: .toFixed(2) doesn't round correctly!
  // (0.015).toFixed(2) = "0.01"
  // 0.015 should round to 0.02!
  const tipStr = tip.toString();
  if (tipStr.includes(".") && tipStr.split(".")[1].length > 2) {
    // ["12", "345"] from "12.345"
    const [dollarsStr, centsStr] = tipStr.split(".");
    // "34" from "345"
    const firstTwoDecimalPlaces = centsStr.slice(0, 2);
    // "5" from "345"
    const thirdDecimalPlace = centsStr.slice(2, 3);
    let firstTwoDecimalPlacesAsInt = +firstTwoDecimalPlaces;
    // grade school method to round a number
    if (+thirdDecimalPlace > 4) {
      firstTwoDecimalPlacesAsInt++;
    }
    // ensure a leading 0 if needed, so 12.01 doesn't become 12.1
    const centsStrRounded = firstTwoDecimalPlacesAsInt.toString().padStart(2, "0")
    tip = Number(dollarsStr + "." + centsStrRounded);
  }
  return tip;
}

