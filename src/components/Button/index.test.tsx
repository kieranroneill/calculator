import { shallow, ShallowWrapper } from 'enzyme';
import * as React from 'react';

// Components.
import { Button, Props } from './';

// Types.
import { InputKeyEnum } from './types';

interface Scope {
    props: Props;
    wrapper: ShallowWrapper;
}

describe('src/components/Button', () => {
    let scope: Scope;

    beforeEach(() => {
        const props: Props = {
            label: InputKeyEnum.Addition,
            purpose: 'numeric',
        };

        scope = {
            props,
            wrapper: shallow(<Button {...props} />),
        };
    });

    describe('<Button /> snapshots', () => {
        it('should match the snapshot with the default props', () => {
            expect(scope.wrapper).toMatchSnapshot();
        });

        it('should match the snapshot when the button is an operator', () => {
            scope.wrapper.setProps({
                purpose: 'operator',
            } as Props);

            expect(scope.wrapper).toMatchSnapshot();
        });

        it('should match the snapshot when the button is an executtion', () => {
            scope.wrapper.setProps({
                purpose: 'execute',
            } as Props);

            expect(scope.wrapper).toMatchSnapshot();
        });
    });
});
