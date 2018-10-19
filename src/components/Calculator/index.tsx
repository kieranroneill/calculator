import * as React from 'react';
import styled from 'styled-components';
// Components.
import {Button, InputKeyEnum, PurposeType} from '../Button';
import {Display} from '../Display';
// Styles.
import palette from '../../styles/palette';

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
    inputs: string[];
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
                if (inputs.length < 1 && key !== InputKeyEnum.Subtraction) {
                    return this.setState({
                        inputs: [
                            '0',
                            key,
                        ],
                    });
                }
            }

            return this.setState({
                inputs: [...inputs, key],
            });
        };
    }

    private getButton(label: InputKeyEnum, purpose: PurposeType): React.ReactNode {
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
                            {this.getButton(InputKeyEnum.Clear, 'execute')}
                        </KeypadRow>
                        <KeypadRow>
                            {this.getButton(InputKeyEnum.Seven, 'numeric')}
                            {this.getButton(InputKeyEnum.Eight, 'numeric')}
                            {this.getButton(InputKeyEnum.Nine, 'numeric')}
                            {this.getButton(InputKeyEnum.Division, 'operator')}
                        </KeypadRow>
                        <KeypadRow>
                            {this.getButton(InputKeyEnum.Four, 'numeric')}
                            {this.getButton(InputKeyEnum.Five, 'numeric')}
                            {this.getButton(InputKeyEnum.Six, 'numeric')}
                            {this.getButton(InputKeyEnum.Multiplication, 'operator')}
                        </KeypadRow>
                        <KeypadRow>
                            {this.getButton(InputKeyEnum.One, 'numeric')}
                            {this.getButton(InputKeyEnum.Two, 'numeric')}
                            {this.getButton(InputKeyEnum.Three, 'numeric')}
                            {this.getButton(InputKeyEnum.Subtraction, 'operator')}
                        </KeypadRow>
                        <KeypadRow>
                            {this.getButton(InputKeyEnum.Zero, 'numeric')}
                            {this.getButton(InputKeyEnum.Decimal, 'operator')}
                            {this.getButton(InputKeyEnum.Result, 'execute')}
                            {this.getButton(InputKeyEnum.Addition, 'operator')}
                        </KeypadRow>
                    </Keypad>
                </Card>
            </Wrapper>
        );
    }
}
