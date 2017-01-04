import { Adder } from '../../src/adder';
import { add_number } from '../../src/adder_functional'

describe("Adder", () => {
    it("should return 3 when add by Adder", () => {
        let adder = new Adder(),
            result = adder.add(1, 2);

        expect(result).toEqual(3);
    });

    it("should return 3 when add by add function", () => {
        let result = add_number(1, 2);

        expect(result).toEqual(3);
    });
});
