mocha.setup("bdd");
const expect = chai.expect;

describe("Tip Calculator", function () {
  it("should return a number", function () {
    expect(typeof tipCalculator(15)).to.eq("number");
  });
  it("$100 bill should give a tip of $15", function () {
    expect(tipCalculator(100)).to.eq(15);
  });
  it("$11 bill should give a tip of $1.65", function () {
    expect(tipCalculator(11)).to.eq(1.65);
  });
  it("$23.85 bill should give a tip of $3.58", function () {
    expect(tipCalculator(23.85)).to.eq(3.58);
  });
  it("$0.10 bill should give a tip of $0.02", function () {
    expect(tipCalculator(0.1)).to.eq(0.02);
  });
  it("$123423.57 bill should give a tip of $18513.54", function () {
    expect(tipCalculator(123423.57)).to.eq(18513.54);
  });
  it("$0 bill should give a tip of $0", function () {
    expect(tipCalculator(0)).to.eq(0);
  });
});

mocha.run();