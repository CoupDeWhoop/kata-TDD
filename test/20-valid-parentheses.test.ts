import { isValid } from "../src/20-valid-parentheses";

describe('Valid parentheses', () => {
    test.each([
        ['()', true]
    ])('should', (s, expected) => {
        expect(isValid(s)).toEqual(expected)
    })
});