import sqrRoot from "./sqrRoot";

describe("корень квадратный", ()=> {
    it("при нахождении корня из положиетльног числа", () => {
        expect(sqrRoot("9")).toBe(3);
    });
    
    it("при нахождении корня из результата", () => {
        expect(sqrRoot(9)).toBe(3);
    });
});