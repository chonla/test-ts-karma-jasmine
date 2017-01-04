import { Calculator } from '../../src/calculator';

describe("Calculator", () => {
    it("should call adder to add X to result Y times when multiply X by Y", () => {
        let adder = jasmine.createSpyObj("adder", ["add"]),
            calculator = new Calculator(adder);

        calculator.multiply(3, 5);

        expect(adder.add.calls.count()).toEqual(5);
    });

    it("should return result of X * Y", () => {
        let calculator = new Calculator(),
            result = calculator.multiply(3, 5);

        expect(result).toEqual(15);
    });
});
