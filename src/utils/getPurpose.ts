// Types.
import { InputKeyEnum, PurposeType } from '../components/Button/types';

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
