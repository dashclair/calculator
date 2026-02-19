const factorialize = require("./factorialize");

describe("факториал", () => {
    it("если значение равно 0, то будет 1", () => {
        expect(factorialize("0")).toBe(1);
    });

    it("если значение - пустая строка, то будет 1", () => {
        expect(factorialize("")).toBe(1);
    });

    it("если значение 0, то 1", () => {
        expect(factorialize(0)).toBe(1);
    });

    it("если значение 1, то 1", () => {
        expect(factorialize(1)).toBe(1);
    });

    it("если значение отрицатальное, то ошибка", () => {
        expect(factorialize(-2)).toBe("Error");
    });

    it("значение факториала при положительном значении исходного числа", () => {
        expect(factorialize("5")).toBe(120);
    });
});
