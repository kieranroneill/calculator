import * as React from 'react';
import styled from 'styled-components';
// Components.
import {Button, InputKeyEnum} from '../Button';
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

    private readonly onButtonClick: (key: InputKeyEnum) => (event: React.MouseEvent<HTMLButtonElement>) => void = (key: InputKeyEnum) => () => {
        if (key === InputKeyEnum.Clear) {
            return this.setState({
                inputs: [],
            });
        }
    };

    constructor(props: {}) {
        super(props);

        this.state = {
            inputs: [],
        };
    }

    public render(): React.ReactElement<Calculator> {
        const { inputs } = this.state;

        return (
            <Wrapper>
                <Card>
                    <Display value={inputs.length > 0 ? inputs.join() : '0'} />
                    <Keypad>
                        <KeypadRow>
                            <Button
                                label={InputKeyEnum.Clear}
                                onClick={this.onButtonClick(InputKeyEnum.Clear)}
                                purpose="execute"
                            />
                        </KeypadRow>
                        <KeypadRow>
                            <Button
                                label={InputKeyEnum.Seven}
                                onClick={this.onButtonClick(InputKeyEnum.Seven)}
                                purpose="numeric"
                            />
                            <Button
                                label={InputKeyEnum.Eight}
                                onClick={this.onButtonClick(InputKeyEnum.Eight)}
                                purpose="numeric"
                            />
                            <Button
                                label={InputKeyEnum.Nine}
                                onClick={this.onButtonClick(InputKeyEnum.Nine)}
                                purpose="numeric"
                            />
                            <Button
                                label={InputKeyEnum.Division}
                                onClick={this.onButtonClick(InputKeyEnum.Division)}
                                purpose="operator"
                            />
                        </KeypadRow>
                        <KeypadRow>
                            <Button
                                label={InputKeyEnum.Four}
                                onClick={this.onButtonClick(InputKeyEnum.Four)}
                                purpose="numeric"
                            />
                            <Button
                                label={InputKeyEnum.Five}
                                onClick={this.onButtonClick(InputKeyEnum.Five)}
                                purpose="numeric"
                            />
                            <Button
                                label={InputKeyEnum.Six}
                                onClick={this.onButtonClick(InputKeyEnum.Six)}
                                purpose="numeric"
                            />
                            <Button
                                label={InputKeyEnum.Multiplication}
                                onClick={this.onButtonClick(InputKeyEnum.Multiplication)}
                                purpose="operator"
                            />
                        </KeypadRow>
                        <KeypadRow>
                            <Button
                                label={InputKeyEnum.One}
                                onClick={this.onButtonClick(InputKeyEnum.One)}
                                purpose="numeric"
                            />
                            <Button
                                label={InputKeyEnum.Two}
                                onClick={this.onButtonClick(InputKeyEnum.Two)}
                                purpose="numeric"
                            />
                            <Button
                                label={InputKeyEnum.Three}
                                onClick={this.onButtonClick(InputKeyEnum.Three)}
                                purpose="numeric"
                            />
                            <Button
                                label={InputKeyEnum.Subtraction}
                                onClick={this.onButtonClick(InputKeyEnum.Subtraction)}
                                purpose="operator"
                            />
                        </KeypadRow>
                        <KeypadRow>
                            <Button
                                label={InputKeyEnum.Zero}
                                onClick={this.onButtonClick(InputKeyEnum.Zero)}
                                purpose="numeric"
                            />
                            <Button
                                label={InputKeyEnum.Decimal}
                                onClick={this.onButtonClick(InputKeyEnum.Decimal)}
                                purpose="operator"
                            />
                            <Button
                                label={InputKeyEnum.Result}
                                onClick={this.onButtonClick(InputKeyEnum.Result)}
                                purpose="execute"
                            />
                            <Button
                                label={InputKeyEnum.Addition}
                                onClick={this.onButtonClick(InputKeyEnum.Addition)}
                                purpose="operator"
                            />
                        </KeypadRow>
                    </Keypad>
                </Card>
            </Wrapper>
        );
    }
}
