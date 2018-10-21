// Types.
import { InputKeyEnum } from '../components/Button/types';

/**
 * Evaluates an input array using arithmetic.
 * @param inputs an array of each character.
 * @returns the evaluated inputs or 'Err' if the evaluation fails.
 */
export default function (inputs: InputKeyEnum[]): string {
    const input: string = inputs.map((value: InputKeyEnum) => { // Map to a string and "sanitise" the operators.
            switch (value) {
                case InputKeyEnum.Multiplication:
                    return '*';
                case InputKeyEnum.Division:
                    return '/';
                default:
                    return value;
            }
        })
        .join('');

    if (!input) {
        return '0';
    }

    try {
        return (eval(input) as number)
            .toFixed(9) // Fix to a maximum of 9 decimal places.
            .replace(/\.?0+$/, ''); // Remove any padded zeros, e.g. 15.00 => 15
    } catch(e) {
        return 'Err';
    }
}
