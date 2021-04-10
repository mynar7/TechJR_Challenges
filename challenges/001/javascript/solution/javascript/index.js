mocha.setup('bdd')
const expect = chai.expect

function problem(param) {
  return param
}

describe('Problem Title', function() {
  it('should return param', function() {
    const param = 'banana'
    const answer = problem(param)
    expect(answer).to.eq(param)
  })
})

mocha.run()