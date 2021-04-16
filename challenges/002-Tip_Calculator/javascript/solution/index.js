function tipCalculator(amt) {
  let tip = amt * 0.15;
  const tipStr = tip.toString();
  if (tipStr.includes(".") && tipStr.split(".")[1].length > 2) {
    const decimalsStr = tipStr.split(".")[1];
    const decimalsStrTrunc = decimalsStr.slice(0, 2);
    const decimalsStrNextNum = decimalsStr.slice(2, 3);
    let decimals = +decimalsStrTrunc;
    let dollars = Math.trunc(tip);
    if (+decimalsStrNextNum > 4) {
      decimals++;
    }
    tip = Number(
      dollars.toString() + "." + decimals.toString().padStart(2, "0")
    );
  }
  return tip;
}

