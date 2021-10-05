const { multiply } = require("./../calculator");

describe("Multiply", () => {
    test("should multiply two positive integers correctly", () => {
        const result = multiply(1, 2);
        expect(result).toBe(2);
    });

    test('should multiply a negative and a positive integer and, returns negative integer', () => {
        const result = multiply(-3, 3);
        expect(result).toBe(-9);
    });

    test('should return 0 when multiplying any number by 0', () => {
        const result = multiply(3, 0);
        expect(result).toBe(0);
    })
})