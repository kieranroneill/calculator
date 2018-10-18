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
    });
});
