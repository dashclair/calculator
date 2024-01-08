import tenthExponentiation from "./tenthExponentiation";

describe("возведение десяти в степень х", () => {
    it("возведение в положительную степнь", () => {
        expect(tenthExponentiation("2")).toBe(100);
    });

    it("возведение в отрицательную степень", () => {
        expect(tenthExponentiation("-2")).toBe(0.01);
    });
});
