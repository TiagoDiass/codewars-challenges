const alphabetPosition1 = require("./code");
const alphabetPosition2 = require("./code2");

describe("Alphabet Position Challenge", () => {
  it("should return correctly with the first solution", () => {
    expect(alphabetPosition1("The sunset sets at twelve o' clock.")).toBe(
      "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
    );
  });

  it("should return correctly with the second solution", () => {
    expect(alphabetPosition2("The sunset sets at twelve o' clock.")).toBe(
      "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
    );
  });
});
