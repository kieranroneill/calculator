import * as React from 'react';
import styled from 'styled-components';
// Components.
import {Button} from '../Button';
import {Display} from '../Display';
// Styles.
import palette from '../../styles/palette';
// Types.
import {InputKeyEnum, PurposeType} from '../Button/types';
// Utils.
import getPurpose from '../../utils/getPurpose';

const Card = styled.div`
  background-color: ${palette.primary.white};
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);
  padding: 1.5rem;
`;
const Keypad = styled.div`
  padding: 0;
`;
const KeypadRow = styled.div`
  width: 100%;
`;
const Wrapper = styled.div`
  max-width: 500px;
`;

export interface State {
    inputs: InputKeyEnum[];
}

export class Calculator extends React.PureComponent<{}, State> {
    public state: State;

    private readonly onButtonClick: (key: InputKeyEnum, purpose: PurposeType) => (event: React.MouseEvent<HTMLButtonElement>) => void;

    constructor(props: {}) {
        super(props);

        this.state = {
            inputs: [],
        };
        this.onButtonClick = (key: InputKeyEnum, purpose: PurposeType) => () => {
            const { inputs } = this.state;

            if (key === InputKeyEnum.Clear) {
                return this.setState({
                    inputs: [],
                });
            }

            if (purpose === 'operator') {
                // Pad a zero, unless it is a negative number.
                if (inputs.length < 1 && key !== InputKeyEnum.Subtraction) {
                    return this.setState({
                        inputs: [
                            InputKeyEnum.Zero,
                            key,
                        ],
                    });
                }

                if (inputs[inputs.length - 1] === InputKeyEnum.Subtraction || inputs[inputs.length - 1] === InputKeyEnum.Decimal) {
                    return undefined;
                }

                // Replace the operator.
                if (
                    (
                        key === InputKeyEnum.Addition ||
                        key === InputKeyEnum.Division ||
                        key === InputKeyEnum.Multiplication
                    ) &&
                    (
                        inputs[inputs.length - 1] === InputKeyEnum.Addition ||
                        inputs[inputs.length - 1] === InputKeyEnum.Division ||
                        inputs[inputs.length - 1] === InputKeyEnum.Multiplication ||
                        inputs[inputs.length - 1] === InputKeyEnum.Subtraction
                    )
                ) {
                    inputs.splice((inputs.length - 1), 1, key);

                    return this.setState({
                        inputs,
                    }, this.forceUpdate); // Force update as we are a pure component and we are performing a shallow render.
                }
            }

            if (key === InputKeyEnum.Decimal) {
                if (inputs.length < 1) {
                    return this.setState({
                        inputs: [
                            InputKeyEnum.Zero,
                            key,
                        ],
                    });
                }

                if (getPurpose(inputs[inputs.length - 1]) !== 'numeric') {
                    return undefined;
                }
            }

            return this.setState({
                inputs: [...inputs, key],
            });
        };
    }

    private getButton(label: InputKeyEnum): React.ReactNode {
        const purpose: PurposeType = getPurpose(label);

        return (
            <Button
                label={label}
                onClick={this.onButtonClick(label, purpose)}
                purpose={purpose}
            />
        );
    }

    public render(): React.ReactElement<Calculator> {
        const { inputs } = this.state;

        return (
            <Wrapper>
                <Card>
                    <Display value={inputs.length > 0 ? inputs.join('') : '0'} />
                    <Keypad>
                        <KeypadRow>
                            {this.getButton(InputKeyEnum.Clear)}
                        </KeypadRow>
                        <KeypadRow>
                            {this.getButton(InputKeyEnum.Seven)}
                            {this.getButton(InputKeyEnum.Eight)}
                            {this.getButton(InputKeyEnum.Nine)}
                            {this.getButton(InputKeyEnum.Division)}
                        </KeypadRow>
                        <KeypadRow>
                            {this.getButton(InputKeyEnum.Four)}
                            {this.getButton(InputKeyEnum.Five)}
                            {this.getButton(InputKeyEnum.Six)}
                            {this.getButton(InputKeyEnum.Multiplication)}
                        </KeypadRow>
                        <KeypadRow>
                            {this.getButton(InputKeyEnum.One)}
                            {this.getButton(InputKeyEnum.Two)}
                            {this.getButton(InputKeyEnum.Three)}
                            {this.getButton(InputKeyEnum.Subtraction)}
                        </KeypadRow>
                        <KeypadRow>
                            {this.getButton(InputKeyEnum.Zero)}
                            {this.getButton(InputKeyEnum.Decimal)}
                            {this.getButton(InputKeyEnum.Result)}
                            {this.getButton(InputKeyEnum.Addition)}
                        </KeypadRow>
                    </Keypad>
                </Card>
            </Wrapper>
        );
    }
}
