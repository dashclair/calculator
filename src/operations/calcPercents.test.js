const calcPercents = require("./calcPercents");

describe("процент", ()=> {
    it("при положительном числе", () => {
        expect(calcPercents("8")).toBe(0.08);
    });
    
    it("при отрицательном числе", () => {
        expect(calcPercents("-8")).toBe(-0.08);
    });
})