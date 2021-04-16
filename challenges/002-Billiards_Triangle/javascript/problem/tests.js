mocha.setup("bdd");
const expect = chai.expect;

describe("Billiards triangle calculator", function () {
  it("15 balls makes 5 levels", function () {
    expect(pyramid(15)).to.eq(5);
  });
  it("1 balls makes 1 level", function () {
    expect(pyramid(1)).to.eq(1);
  });
  it("3 balls makes 2 levels", function () {
    expect(pyramid(3)).to.eq(2);
  });
  it("6 balls makes 3 levels", function () {
    expect(pyramid(6)).to.eq(3);
  });
  it("10 balls makes 4 levels", function () {
    expect(pyramid(10)).to.eq(4);
  });
  it("100 balls makes 13 levels", function () {
    expect(pyramid(100)).to.eq(13);
  });
  it("0 balls makes 0 levels", function () {
    expect(pyramid(0)).to.eq(0);
  });
  it("42354359 balls makes 9203 levels", function () {
    expect(pyramid(42354359)).to.eq(9203);
  });
  it("142354359 balls makes 16872 levels", function () {
    expect(pyramid(142354359)).to.eq(16872);
  });
  it.skip("1423541359 balls makes 26792 levels", function () {
    expect(pyramid(358941332)).to.eq(26792);
  });
  it.skip("123124334584 balls makes 496233 levels", function () {
    expect(pyramid(123124334584)).to.eq(496233);
  });
});

mocha.run();

