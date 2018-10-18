import { shallow, ShallowWrapper } from 'enzyme';
import * as React from 'react';

// Components.
import { Button, InputKeyEnum, Props } from './';

interface Scope {
    props: Props;
    wrapper: ShallowWrapper;
}

describe('src/components/Button', () => {
    let scope: Scope;

    beforeEach(() => {
        const props: Props = {
            label: InputKeyEnum.Addition,
            onClick: jest.fn(),
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

        it('should match the snapshot when the button is a result', () => {
            scope.wrapper.setProps({
                purpose: 'result',
            } as Props);

            expect(scope.wrapper).toMatchSnapshot();
        });
    });

    describe('when clicking the button', () => {
        it('should return the input', () => {
            scope.wrapper.simulate('click');

            expect(scope.props.onClick).toBeCalledWith(scope.props.label);
        });
    });
});
