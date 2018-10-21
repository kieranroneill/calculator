// Types.
import {InputKeyEnum} from '../components/Button/types';
// Utils.
import evaluate from './evaluate';

describe('src/utils/evaluate', () => {
    it('should return 0 if the inputs are empty', () => {
        expect(evaluate([])).toEqual('0');
    });

    it('should return an error if the there is no right side operand', () => {
        const inputs: InputKeyEnum[] = [  // 2 + ???
            InputKeyEnum.Two,
            InputKeyEnum.Addition,
        ];

        expect(evaluate(inputs)).toEqual('Err');
    });

    it('should multiply two operands', () => {
        const inputs: InputKeyEnum[] = [ // 3 - 5
            InputKeyEnum.Three,
            InputKeyEnum.Multiplication,
            InputKeyEnum.Five,
        ];

        expect(evaluate(inputs)).toEqual('15');
    });

    it('should divide two operands', () => {
        const inputs: InputKeyEnum[] = [ // 4 / 2
            InputKeyEnum.Four,
            InputKeyEnum.Division,
            InputKeyEnum.Two,
        ];

        expect(evaluate(inputs)).toEqual('2');
    });

    it('should subtract two operands', () => {
        const inputs: InputKeyEnum[] = [ // 4 - 1
            InputKeyEnum.Four,
            InputKeyEnum.Subtraction,
            InputKeyEnum.One,
        ];

        expect(evaluate(inputs)).toEqual('3');
    });

    it('should subtract two operands and return a negative number', () => {
        const inputs: InputKeyEnum[] = [ // 1 - 3
            InputKeyEnum.One,
            InputKeyEnum.Subtraction,
            InputKeyEnum.Three,
        ];

        expect(evaluate(inputs)).toEqual('-2');
    });

    it('should return a sum that results in a floating point number', () => {
        const inputs: InputKeyEnum[] = [ // 2 * 0.25
            InputKeyEnum.Two,
            InputKeyEnum.Multiplication,
            InputKeyEnum.Zero,
            InputKeyEnum.Decimal,
            InputKeyEnum.Two,
            InputKeyEnum.Five,
        ];

        expect(evaluate(inputs)).toEqual('0.5');
    });

    it('should handle complex arithmetic', () => {
        const inputs: InputKeyEnum[] = [ // 9 / 78 * 4 - 8 + 345 / 2
            InputKeyEnum.Nine,
            InputKeyEnum.Division,
            InputKeyEnum.Seven,
            InputKeyEnum.Eight,
            InputKeyEnum.Multiplication,
            InputKeyEnum.Four,
            InputKeyEnum.Subtraction,
            InputKeyEnum.Eight,
            InputKeyEnum.Addition,
            InputKeyEnum.Three,
            InputKeyEnum.Four,
            InputKeyEnum.Five,
            InputKeyEnum.Division,
            InputKeyEnum.Two,
        ];

        expect(evaluate(inputs)).toEqual('164.961538462');
    });
});
