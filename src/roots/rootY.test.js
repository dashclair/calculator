const rootY= require("./rootY");

describe("корень y из x", ()=> {
    it("при нахождении корня из положиетльног числа", () => {
        expect(rootY("8", "3")).toBe(2);
    });
});