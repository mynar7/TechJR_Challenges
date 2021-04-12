mocha.setup("bdd");
const expect = chai.expect;

describe("Problem Title", function () {
  it("should return param", function () {
    expect(problem("banana")).to.eq("banana");
  });
});

mocha.run();