import xyExponentiation from "./xyExponentiation";

describe("возведение числа х в степень у", () => {
    it("возведение в степень положительное число ", () => {
        expect(xyExponentiation("2", "3")).toBe(8);
    });

    it("возведение в степень отрицательное число", () => {
        expect(xyExponentiation("-2", "2")).toBe(4);
    });
});
