import { shallow, ShallowWrapper } from 'enzyme';
import * as React from 'react';

// Components.
import { Calculator, State } from './';
import { Button, InputKeyEnum } from '../Button';

/**
 * Convenience function to get the Button by the input.
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

describe('src/components/Shell', () => {
    let scope: Scope;

    beforeEach(() => {
        scope = {
            wrapper: shallow(<Calculator />),
        };
    });

    describe('when pressing the inputs', () => {
        it('should remove all inputs when clearing', () => {
            scope.wrapper.setState({
                inputs: ['1', 'x', '3'],
            } as State);

            findButtonByInput(scope.wrapper, InputKeyEnum.Clear).simulate('click');

            expect((scope.wrapper.state() as State).inputs.length).toBe(0);
        });

        it('should add a digit', () => {
            findButtonByInput(scope.wrapper, InputKeyEnum.One).simulate('click');

            expect((scope.wrapper.state() as State).inputs).toEqual(['1']);
        });

        it('should pad with a zero if an operator, that is not a subtraction (negative), is the first digit', () => {
            findButtonByInput(scope.wrapper, InputKeyEnum.Addition).simulate('click');

            expect((scope.wrapper.state() as State).inputs).toEqual(['0', '+']);
        });

        it('should add the subtraction as the first digit', () => {
            findButtonByInput(scope.wrapper, InputKeyEnum.Subtraction).simulate('click');

            expect((scope.wrapper.state() as State).inputs).toEqual(['-']);
        });
    });
});
