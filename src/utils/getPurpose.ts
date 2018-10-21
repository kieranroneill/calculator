// Types.
import { InputKeyEnum, PurposeType } from '../components/Button/types';

/**
 * Convenience function that simply maps an input to a purpose type.
 * @param input a string input.
 * @returns a purpose type, defaults to 'numeric'.
 */
export default function (input: InputKeyEnum): PurposeType {
    switch (input) {
        case InputKeyEnum.Decimal:
            return 'decimal';
        case InputKeyEnum.Clear:
        case InputKeyEnum.Result:
            return 'execute';
        case InputKeyEnum.Addition:
        case InputKeyEnum.Division:
        case InputKeyEnum.Multiplication:
        case InputKeyEnum.Subtraction:
            return 'operator';
        case InputKeyEnum.Zero:
        case InputKeyEnum.One:
        case InputKeyEnum.Two:
        case InputKeyEnum.Three:
        case InputKeyEnum.Four:
        case InputKeyEnum.Five:
        case InputKeyEnum.Six:
        case InputKeyEnum.Seven:
        case InputKeyEnum.Eight:
        case InputKeyEnum.Nine:
        default:
            return 'numeric';
    }
}
