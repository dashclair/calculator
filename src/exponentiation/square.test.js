import square from "./square";

describe("возведение квадрат", () => {
    it("возведение в степень положиетльного числа", () => {
        expect(square("9")).toBe(81);
    });

    it("возведение в степень отрицательного числа", () => {
        expect(square("-9")).toBe(81);
    });
});
