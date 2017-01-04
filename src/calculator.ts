import { Adder } from './adder';

export class Calculator {
    private adder: Adder;

    public constructor(adder?: Adder) {
        this.adder = adder;
    }

    public multiply(a : number, b : number) {
        if (!this.adder) {
            this.adder = new Adder();
        }
        let result = 0;
        for (var i = 0; i < b; i++) {
            result = this.adder.add(result, a);
        }
        return result;
    }
}
