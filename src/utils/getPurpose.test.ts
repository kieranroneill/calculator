// Types.
import {InputKeyEnum} from '../components/Button/types';
// Utils.
import getPurpose from './getPurpose';

describe('src/utils/getPurpose', () => {
    it('should return a decimal purpose for the decimal input', () => {
        expect(getPurpose(InputKeyEnum.Decimal)).toBe('decimal');
    });

    it('should return an execute purpose for the clear input', () => {
        expect(getPurpose(InputKeyEnum.Clear)).toBe('execute');
    });

    it('should return an execute purpose for the result input', () => {
        expect(getPurpose(InputKeyEnum.Result)).toBe('execute');
    });

    it('should return an operator purpose for the addition input', () => {
        expect(getPurpose(InputKeyEnum.Addition)).toBe('operator');
    });

    it('should return a operator purpose for the division input', () => {
        expect(getPurpose(InputKeyEnum.Division)).toBe('operator');
    });

    it('should return a operator purpose for the multiplication input', () => {
        expect(getPurpose(InputKeyEnum.Multiplication)).toBe('operator');
    });

    it('should return a operator purpose for the subtraction input', () => {
        expect(getPurpose(InputKeyEnum.Subtraction)).toBe('operator');
    });

    it('should return a numeric purpose for the 0 input', () => {
        expect(getPurpose(InputKeyEnum.Zero)).toBe('numeric');
    });

    it('should return a numeric purpose for the 1 input', () => {
        expect(getPurpose(InputKeyEnum.One)).toBe('numeric');
    });

    it('should return a numeric purpose for the 2 input', () => {
        expect(getPurpose(InputKeyEnum.Two)).toBe('numeric');
    });

    it('should return a numeric purpose for the 3 input', () => {
        expect(getPurpose(InputKeyEnum.Three)).toBe('numeric');
    });

    it('should return a numeric purpose for the 4 input', () => {
        expect(getPurpose(InputKeyEnum.Four)).toBe('numeric');
    });

    it('should return a numeric purpose for the 5 input', () => {
        expect(getPurpose(InputKeyEnum.Five)).toBe('numeric');
    });

    it('should return a numeric purpose for the 6 input', () => {
        expect(getPurpose(InputKeyEnum.Six)).toBe('numeric');
    });

    it('should return a numeric purpose for the 7 input', () => {
        expect(getPurpose(InputKeyEnum.Seven)).toBe('numeric');
    });

    it('should return a numeric purpose for the 8 input', () => {
        expect(getPurpose(InputKeyEnum.Eight)).toBe('numeric');
    });

    it('should return a numeric purpose for the 9 input', () => {
        expect(getPurpose(InputKeyEnum.Nine)).toBe('numeric');
    });
});
