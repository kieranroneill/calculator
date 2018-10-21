import { shallow, ShallowWrapper } from 'enzyme';
import * as React from 'react';

// Components.
import { Calculator, State } from './';
import { Button } from '../Button';

// Types.
import { InputKeyEnum } from '../Button/types';

/**
 * Convenience function to find the Button by the input type.
 * @param parent the parent wrapper that contains the Button.
 * @param input the input to search for.
 * @returns the Button.
 */
function findButtonByInput(parent: ShallowWrapper, input: InputKeyEnum): ShallowWrapper {
    return parent.findWhere((node: ShallowWrapper) => node.type() === Button && node.prop('label') === input)
        .first();
}

interface Scope {
    wrapper: ShallowWrapper;
}

describe('src/components/Calculator', () => {
    let scope: Scope;

    beforeEach(() => {
        scope = {
            wrapper: shallow(<Calculator />),
        };
    });

    describe('when pressing the inputs', () => {
        describe('when clearing the inputs', () => {
            it('should remove all inputs when clearing', () => {
                scope.wrapper.setState({
                    inputs: ['1', 'x', '3'],
                } as State);

                findButtonByInput(scope.wrapper, InputKeyEnum.Clear).simulate('click');

                expect((scope.wrapper.state() as State).inputs.length).toBe(0);
            });
        });

        describe('when adding a numerical digit', () => {
            it('should add a digit', () => {
                findButtonByInput(scope.wrapper, InputKeyEnum.One).simulate('click');

                expect((scope.wrapper.state() as State).inputs).toEqual(['1']);
            });
        });

        describe('when adding operators', () => {
            it('should pad with a zero if an operator, that is not a subtraction (negative), is the first digit', () => {
                findButtonByInput(scope.wrapper, InputKeyEnum.Addition).simulate('click');

                expect((scope.wrapper.state() as State).inputs).toEqual(['0', '+']);
            });

            it('should add the subtraction as the first digit', () => {
                findButtonByInput(scope.wrapper, InputKeyEnum.Subtraction).simulate('click');

                expect((scope.wrapper.state() as State).inputs).toEqual(['-']);
            });

            it('should replace the division operator if the next operator is a multiplication', () => {
                scope.wrapper.setState({
                    inputs: ['1', '÷'],
                } as State);

                findButtonByInput(scope.wrapper, InputKeyEnum.Multiplication).simulate('click');

                expect((scope.wrapper.state() as State).inputs).toEqual(['1', '×']);
            });

            it('should replace the division operator if the next operator is an addition', () => {
                scope.wrapper.setState({
                    inputs: ['1', '÷'],
                } as State);

                findButtonByInput(scope.wrapper, InputKeyEnum.Addition).simulate('click');

                expect((scope.wrapper.state() as State).inputs).toEqual(['1', '+']);
            });

            it('should not add the addition operator if the previous operator is a subtraction', () => {
                scope.wrapper.setState({
                    inputs: ['1', '-'],
                } as State);

                findButtonByInput(scope.wrapper, InputKeyEnum.Division).simulate('click');

                expect((scope.wrapper.state() as State).inputs).toEqual(['1', '-']);
            });

            it('should not add an operator if the previous operator is a subtraction', () => {
                scope.wrapper.setState({
                    inputs: ['1', '+', '-'],
                } as State);

                findButtonByInput(scope.wrapper, InputKeyEnum.Division).simulate('click');

                expect((scope.wrapper.state() as State).inputs).toEqual(['1', '+', '-']);
            });

            it('should not add an operator if the previous operator is a decimal', () => {
                scope.wrapper.setState({
                    inputs: ['1', '.'],
                } as State);

                findButtonByInput(scope.wrapper, InputKeyEnum.Division).simulate('click');

                expect((scope.wrapper.state() as State).inputs).toEqual(['1', '.']);
            });
        });

        describe('when adding decimals', () => {
            it('should pad a zero if the first input is a decimal', () => {
                findButtonByInput(scope.wrapper, InputKeyEnum.Decimal).simulate('click');

                expect((scope.wrapper.state() as State).inputs).toEqual(['0', '.']);
            });

            it('should not add a decimal if the previous input is not numeric', () => {
                scope.wrapper.setState({
                    inputs: ['1', '.'],
                } as State);

                findButtonByInput(scope.wrapper, InputKeyEnum.Decimal).simulate('click');

                expect((scope.wrapper.state() as State).inputs).toEqual(['1', '.']);
            });
        });
    });
});
