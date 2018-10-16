import { shallow, ShallowWrapper } from 'enzyme';
import * as React from 'react';

// Components.
import { Shell, Props } from './';

interface Scope {
    props: Props;
    wrapper: ShallowWrapper;
}

describe('src/components/Shell', () => {
    let scope: Scope;

    beforeEach(() => {
        const props: Props = {
            children: <h1>Hello human</h1>,
        };

        scope = {
            props,
            wrapper: shallow(<Shell {...props} />),
        };
    });

    describe('<Shell /> snapshots', () => {
        it('should match the snapshot with the default props', () => {
            expect(scope.wrapper).toMatchSnapshot();
        });
    });
});
