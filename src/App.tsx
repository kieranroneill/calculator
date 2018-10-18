import * as React from 'react';

// Components.
import { Calculator } from './components/Calculator';
import { GlobalStyle } from './components/GlobalStyle';
import { Shell } from './components/Shell';

export const App: React.SFC = () => (
    <>
        <GlobalStyle />
        <Shell>
            <Calculator />
        </Shell>
    </>
);
