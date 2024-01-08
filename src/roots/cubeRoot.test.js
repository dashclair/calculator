import cubeRoot from "./cubeRoot";

describe("корень кубический", ()=> {
    it("при нахождении корня из положиетльног числа", () => {
        expect(cubeRoot("8")).toBe(2);
    });
});