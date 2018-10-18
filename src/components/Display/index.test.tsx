import { shallow, ShallowWrapper } from 'enzyme';
import * as React from 'react';

// Components.
import { Display, Props } from './';

interface Scope {
    props: Props;
    wrapper: ShallowWrapper;
}

describe('src/components/Display', () => {
    let scope: Scope;

    beforeEach(() => {
        const props: Props = {
            value: 'Testing cannot continue until your Companion Cube has been incinerated.',
        };

        scope = {
            props,
            wrapper: shallow(<Display {...props} />),
        };
    });

    describe('<Display /> snapshots', () => {
        it('should match the snapshot with the default props', () => {
            expect(scope.wrapper).toMatchSnapshot();
        });
    });
});
