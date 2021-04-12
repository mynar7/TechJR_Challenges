mocha.setup("bdd");
const expect = chai.expect;

describe("Reverse a String", function () {
  it("should reverse a string", function () {
    expect(reverseString("banana")).to.eq("ananab");
  });
  it("should reverse a string with spaces", function () {
    expect(reverseString("bananas are awesome")).to.eq("emosewa era sananab");
  });
  it("should reverse a string with punctuation", function () {
    expect(reverseString("bananas!?")).to.eq("?!sananab");
  });
  it("should preserve casing", function () {
    expect(reverseString("BananaS")).to.eq("SananaB");
  });
});

mocha.run();