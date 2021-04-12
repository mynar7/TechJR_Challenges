mocha.setup("bdd");
const expect = chai.expect;

describe("Caesar's Cypher", function () {
  const testCases = [
    {
      encoded: "edqdqd",
      decoded: "banana",
      shift: 3,
      caseText: "Should handle a single word",
    },
    {
      encoded: "ymj vznhp gwtbs ktc ozruji tajw ymj qfed itl",
      decoded: "the quick brown fox jumped over the lazy dog",
      shift: 5,
      caseText: "Should handle multiple words",
    },
    {
      encoded: "yNml",
      decoded: "lAzy",
      shift: 13,
      caseText: "Should preserve letter case in a single word",
    },
    {
      encoded: "Nby kocwe vliqh zir dogjyx ipyl nby fuTs XIA",
      decoded: "The quick brown fox jumped over the laZy DOG",
      shift: 20,
      caseText: "Should preserve letter case in sentences",
    },
    {
      encoded: "edq'dqd!",
      decoded: "ban'ana!",
      shift: 3,
      caseText: "Should ignore special characters in a word",
    },
    {
      encoded: "Ufw qfmsjbl'r wms (rfc ambcp) umpi ml Y++ afyjjclecq?",
      decoded: "Why shouldn't you (the coder) work on A++ challenges?",
      shift: 24,
      caseText: "Should ignore special characters in a sentence",
    },
    {
      encoded: "banana",
      decoded: "banana",
      shift: 26,
      caseText:
        "Should have same input/output if shift is the same size as character set",
    },
    {
      encoded: "cbobob",
      decoded: "banana",
      shift: 27,
      caseText:
        "Should handle shift that is slightly larger than character set",
    },
    {
      encoded: "vuhuhu",
      decoded: "banana",
      shift: 14528,
      caseText: "Should handle shift that is much larger than character set",
    },
  ];

  describe("encoding", function () {
    for (const testCase of testCases) {
      it(testCase.caseText, function () {
        const answer = encodeCaesarCypher(testCase.decoded, testCase.shift);
        expect(answer).to.eq(testCase.encoded);
      });
    }
  });
  describe("decoding", function () {
    for (const testCase of testCases) {
      it(testCase.caseText, function () {
        const answer = decodeCaesarCypher(testCase.encoded, testCase.shift);
        expect(answer).to.eq(testCase.decoded);
      });
    }
  });
});

mocha.run();
