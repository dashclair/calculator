const oneDevideX = require("./oneDevideX");

describe("деление 1 на х", () => {
    it("деление на положительное число", () => {
        expect(oneDevideX("2")).toBe(0.5);
    });

    it("деление на отрицательное число", () => {
        expect(oneDevideX("-2")).toBe(-0.5);
    });
});
