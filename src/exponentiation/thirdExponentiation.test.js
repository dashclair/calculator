const thirdExponentiation = require("./thirdExponentiation");

describe("возведение в 3 степень х", () => {
    it("возведение в степень положительное число ", () => {
        expect(thirdExponentiation("2")).toBe(8);
    });

    it("возведение в степень отрицательное число", () => {
        expect(thirdExponentiation("-2")).toBe(-8);
    });
});
