const subtract = require("./subtract");

describe("вычитание", () => {
    it("вычитание из двух положительных чисел и из большего меньшее", () => {
        expect(subtract("8", "4")).toBe(4);
    });

    it("вычитание положительного меньшего большее", () => {
        expect(subtract("5", "9")).toBe(-4);
    });

    it("вычитание из отрицательного положительное", () => {
        expect(subtract("-55", "9")).toBe(-64);
    });
});
