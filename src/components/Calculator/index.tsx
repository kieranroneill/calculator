import * as React from 'react';
import styled from 'styled-components';

// Components.
import { Button, InputKeyEnum } from '../Button';
import { Display } from '../Display';

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
    value: string;
}

export class Calculator extends React.PureComponent<{}, State> {
    public state: State;

    constructor(props: {}) {
        super(props);

        this.state = {
            value: '0',
        };

        // Bind functions.
        this.onButtonClick = this.onButtonClick.bind(this);
    }

    private onButtonClick(key: InputKeyEnum): void {
        console.log(key);
    }

    public render(): React.ReactElement<Calculator> {
        const { value } = this.state;

        return (
            <Wrapper>
                <Card>
                    <Display value={value} />
                    <Keypad>
                        <KeypadRow>
                            <Button
                                label={InputKeyEnum.Seven}
                                onClick={this.onButtonClick}
                                purpose="numeric"
                            />
                            <Button
                                label={InputKeyEnum.Eight}
                                onClick={this.onButtonClick}
                                purpose="numeric"
                            />
                            <Button
                                label={InputKeyEnum.Nine}
                                onClick={this.onButtonClick}
                                purpose="numeric"
                            />
                            <Button
                                label={InputKeyEnum.Division}
                                onClick={this.onButtonClick}
                                purpose="operator"
                            />
                        </KeypadRow>
                        <KeypadRow>
                            <Button
                                label={InputKeyEnum.Four}
                                onClick={this.onButtonClick}
                                purpose="numeric"
                            />
                            <Button
                                label={InputKeyEnum.Five}
                                onClick={this.onButtonClick}
                                purpose="numeric"
                            />
                            <Button
                                label={InputKeyEnum.Six}
                                onClick={this.onButtonClick}
                                purpose="numeric"
                            />
                            <Button
                                label={InputKeyEnum.Multiplication}
                                onClick={this.onButtonClick}
                                purpose="operator"
                            />
                        </KeypadRow>
                        <KeypadRow>
                            <Button
                                label={InputKeyEnum.One}
                                onClick={this.onButtonClick}
                                purpose="numeric"
                            />
                            <Button
                                label={InputKeyEnum.Two}
                                onClick={this.onButtonClick}
                                purpose="numeric"
                            />
                            <Button
                                label={InputKeyEnum.Three}
                                onClick={this.onButtonClick}
                                purpose="numeric"
                            />
                            <Button
                                label={InputKeyEnum.Subtraction}
                                onClick={this.onButtonClick}
                                purpose="operator"
                            />
                        </KeypadRow>
                        <KeypadRow>
                            <Button
                                label={InputKeyEnum.Zero}
                                onClick={this.onButtonClick}
                                purpose="numeric"
                            />
                            <Button
                                label={InputKeyEnum.Decimal}
                                onClick={this.onButtonClick}
                                purpose="operator"
                            />
                            <Button
                                label={InputKeyEnum.Result}
                                onClick={this.onButtonClick}
                                purpose="result"
                            />
                            <Button
                                label={InputKeyEnum.Addition}
                                onClick={this.onButtonClick}
                                purpose="operator"
                            />
                        </KeypadRow>
                    </Keypad>
                </Card>
            </Wrapper>
        );
    }
}
