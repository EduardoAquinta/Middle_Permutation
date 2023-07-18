const middle_permutation = require("./middle_permutation")

describe('Unit Tests for the Middle Permutation Kata ', () =>  {
    it("returns a string", () => {
        let input = "test"
        expect(typeof(middle_permutation(input))).toBe("string")
    })
    it("returns 'a' when the input is an 'a'", () => {
        let input = "a";
        expect(middle_permutation(input)).toBe("a");
    })
    it("returns 'ab' when the input is 'ab'", () => {
        let input = "ab";
        expect(middle_permutation(input)).toBe("ab");
    })
    it("returns 'bac' when the input is 'abc'", () => {
        let input = "abc";
        expect(middle_permutation(input)).toBe("bac");
    } )
});