mocha.setup("bdd");
const expect = chai.expect;

describe("Change Calculator", function () {
  it("should return an object with the correct properties", function () {
    const changeCalcReturnVal = changeCalculator(100)
    expect(typeof changeCalcReturnVal).to.eq("object")
    expect(changeCalcReturnVal).to.have.property("hundreds")
    expect(changeCalcReturnVal).to.have.property("fifties")
    expect(changeCalcReturnVal).to.have.property("twenties")
    expect(changeCalcReturnVal).to.have.property("tens")
    expect(changeCalcReturnVal).to.have.property("fives")
    expect(changeCalcReturnVal).to.have.property("ones")
    expect(changeCalcReturnVal).to.have.property("quarters")
    expect(changeCalcReturnVal).to.have.property("dimes")
    expect(changeCalcReturnVal).to.have.property("nickels")
    expect(changeCalcReturnVal).to.have.property("pennies")
  });
  it("$100 should return 1 hundred", function () {
    const changeCalcReturnVal = changeCalculator(100)
    expect(typeof changeCalcReturnVal).to.eq("object")
    expect(changeCalcReturnVal.hundreds).to.eq(1)
    expect(changeCalcReturnVal.fifties).to.eq(0)
    expect(changeCalcReturnVal.twenties).to.eq(0)
    expect(changeCalcReturnVal.tens).to.eq(0)
    expect(changeCalcReturnVal.fives).to.eq(0)
    expect(changeCalcReturnVal.ones).to.eq(0)
    expect(changeCalcReturnVal.quarters).to.eq(0)
    expect(changeCalcReturnVal.dimes).to.eq(0)
    expect(changeCalcReturnVal.nickels).to.eq(0)
    expect(changeCalcReturnVal.pennies).to.eq(0)
  });
  it("$1 should return 1 dollar", function () {
    const changeCalcReturnVal = changeCalculator(1)
    expect(typeof changeCalcReturnVal).to.eq("object")
    expect(changeCalcReturnVal.hundreds).to.eq(0)
    expect(changeCalcReturnVal.fifties).to.eq(0)
    expect(changeCalcReturnVal.twenties).to.eq(0)
    expect(changeCalcReturnVal.tens).to.eq(0)
    expect(changeCalcReturnVal.fives).to.eq(0)
    expect(changeCalcReturnVal.ones).to.eq(1)
    expect(changeCalcReturnVal.quarters).to.eq(0)
    expect(changeCalcReturnVal.dimes).to.eq(0)
    expect(changeCalcReturnVal.nickels).to.eq(0)
    expect(changeCalcReturnVal.pennies).to.eq(0)
  });
  it("$0.50 should return 2 quarters", function () {
    const changeCalcReturnVal = changeCalculator(0.50)
    expect(typeof changeCalcReturnVal).to.eq("object")
    expect(changeCalcReturnVal.hundreds).to.eq(0)
    expect(changeCalcReturnVal.fifties).to.eq(0)
    expect(changeCalcReturnVal.twenties).to.eq(0)
    expect(changeCalcReturnVal.tens).to.eq(0)
    expect(changeCalcReturnVal.fives).to.eq(0)
    expect(changeCalcReturnVal.ones).to.eq(0)
    expect(changeCalcReturnVal.quarters).to.eq(2)
    expect(changeCalcReturnVal.dimes).to.eq(0)
    expect(changeCalcReturnVal.nickels).to.eq(0)
    expect(changeCalcReturnVal.pennies).to.eq(0)
  });
  it("$0.02 should return my two cents", function () {
    const changeCalcReturnVal = changeCalculator(0.02)
    expect(typeof changeCalcReturnVal).to.eq("object")
    expect(changeCalcReturnVal.hundreds).to.eq(0)
    expect(changeCalcReturnVal.fifties).to.eq(0)
    expect(changeCalcReturnVal.twenties).to.eq(0)
    expect(changeCalcReturnVal.tens).to.eq(0)
    expect(changeCalcReturnVal.fives).to.eq(0)
    expect(changeCalcReturnVal.ones).to.eq(0)
    expect(changeCalcReturnVal.quarters).to.eq(0)
    expect(changeCalcReturnVal.dimes).to.eq(0)
    expect(changeCalcReturnVal.nickels).to.eq(0)
    expect(changeCalcReturnVal.pennies).to.eq(2)
  });
  it("$0 should return 0 for all values", function () {
    const changeCalcReturnVal = changeCalculator(0)
    expect(typeof changeCalcReturnVal).to.eq("object")
    expect(changeCalcReturnVal.hundreds).to.eq(0)
    expect(changeCalcReturnVal.fifties).to.eq(0)
    expect(changeCalcReturnVal.twenties).to.eq(0)
    expect(changeCalcReturnVal.tens).to.eq(0)
    expect(changeCalcReturnVal.fives).to.eq(0)
    expect(changeCalcReturnVal.ones).to.eq(0)
    expect(changeCalcReturnVal.quarters).to.eq(0)
    expect(changeCalcReturnVal.dimes).to.eq(0)
    expect(changeCalcReturnVal.nickels).to.eq(0)
    expect(changeCalcReturnVal.pennies).to.eq(0)
  });
  it(`$150.50 should return: 1 hundred 1 fifty 1 quarter`, function () {
    const changeCalcReturnVal = changeCalculator(150.25)
    expect(typeof changeCalcReturnVal).to.eq("object")
    expect(changeCalcReturnVal.hundreds).to.eq(1)
    expect(changeCalcReturnVal.fifties).to.eq(1)
    expect(changeCalcReturnVal.twenties).to.eq(0)
    expect(changeCalcReturnVal.tens).to.eq(0)
    expect(changeCalcReturnVal.fives).to.eq(0)
    expect(changeCalcReturnVal.ones).to.eq(0)
    expect(changeCalcReturnVal.quarters).to.eq(1)
    expect(changeCalcReturnVal.dimes).to.eq(0)
    expect(changeCalcReturnVal.nickels).to.eq(0)
    expect(changeCalcReturnVal.pennies).to.eq(0)
  });
  it(`$151.01 should return: 1 hundred 1 fifty 1 dollar 1 penny`, function () {
    const changeCalcReturnVal = changeCalculator(151.01)
    expect(typeof changeCalcReturnVal).to.eq("object")
    expect(changeCalcReturnVal.hundreds).to.eq(1)
    expect(changeCalcReturnVal.fifties).to.eq(1)
    expect(changeCalcReturnVal.twenties).to.eq(0)
    expect(changeCalcReturnVal.tens).to.eq(0)
    expect(changeCalcReturnVal.fives).to.eq(0)
    expect(changeCalcReturnVal.ones).to.eq(1)
    expect(changeCalcReturnVal.quarters).to.eq(0)
    expect(changeCalcReturnVal.dimes).to.eq(0)
    expect(changeCalcReturnVal.nickels).to.eq(0)
    expect(changeCalcReturnVal.pennies).to.eq(1)
  });
  it(`$10.05 should return: 10 dollars 1 nickel`, function () {
    const changeCalcReturnVal = changeCalculator(10.05)
    expect(typeof changeCalcReturnVal).to.eq("object")
    expect(changeCalcReturnVal.hundreds).to.eq(0)
    expect(changeCalcReturnVal.fifties).to.eq(0)
    expect(changeCalcReturnVal.twenties).to.eq(0)
    expect(changeCalcReturnVal.tens).to.eq(1)
    expect(changeCalcReturnVal.fives).to.eq(0)
    expect(changeCalcReturnVal.ones).to.eq(0)
    expect(changeCalcReturnVal.quarters).to.eq(0)
    expect(changeCalcReturnVal.dimes).to.eq(0)
    expect(changeCalcReturnVal.nickels).to.eq(1)
    expect(changeCalcReturnVal.pennies).to.eq(0)
  });
  it(`$1503.31 should return: 15 hundreds 3 dollars 1 quarter 1 nickel 1 penny`, function () {
    const changeCalcReturnVal = changeCalculator(1503.31)
    expect(typeof changeCalcReturnVal).to.eq("object")
    expect(changeCalcReturnVal.hundreds).to.eq(15)
    expect(changeCalcReturnVal.fifties).to.eq(0)
    expect(changeCalcReturnVal.twenties).to.eq(0)
    expect(changeCalcReturnVal.tens).to.eq(0)
    expect(changeCalcReturnVal.fives).to.eq(0)
    expect(changeCalcReturnVal.ones).to.eq(3)
    expect(changeCalcReturnVal.quarters).to.eq(1)
    expect(changeCalcReturnVal.dimes).to.eq(0)
    expect(changeCalcReturnVal.nickels).to.eq(1)
    expect(changeCalcReturnVal.pennies).to.eq(1)
  });
  it(`$125578.98 should return: 1255 hundreds 1 fifty 1 twenties 1 five 3 dollars 3 quarters 2 dimes 3 pennies`, function () {
    const changeCalcReturnVal = changeCalculator(125578.98)
    expect(typeof changeCalcReturnVal).to.eq("object")
    expect(changeCalcReturnVal.hundreds).to.eq(1255)
    expect(changeCalcReturnVal.fifties).to.eq(1)
    expect(changeCalcReturnVal.twenties).to.eq(1)
    expect(changeCalcReturnVal.tens).to.eq(0)
    expect(changeCalcReturnVal.fives).to.eq(1)
    expect(changeCalcReturnVal.ones).to.eq(3)
    expect(changeCalcReturnVal.quarters).to.eq(3)
    expect(changeCalcReturnVal.dimes).to.eq(2)
    expect(changeCalcReturnVal.nickels).to.eq(0)
    expect(changeCalcReturnVal.pennies).to.eq(3)
  });
  it.skip("should return false if given number with more than two decimal places", function () {
    const changeCalcReturnVal = changeCalculator(100.1234)
    expect(changeCalcReturnVal).to.be.false
  });
  it.skip("should return false if given a negative number", function () {
    const changeCalcReturnVal = changeCalculator(-1)
    expect(changeCalcReturnVal).to.be.false
  });
  it.skip("should return false if given something that isn't a number", function () {
    expect(changeCalculator(undefined)).to.be.false
    expect(changeCalculator(null)).to.be.false
    expect(changeCalculator({})).to.be.false
    expect(changeCalculator([])).to.be.false
    expect(changeCalculator("banana")).to.be.false
    expect(changeCalculator(NaN)).to.be.false
  });
});

mocha.run();