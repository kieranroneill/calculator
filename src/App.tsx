import * as React from 'react';

// Components.
import { MuiThemeProvider } from '@material-ui/core/styles';
import { GlobalStyle } from './components/GlobalStyle';
import { Shell } from './components/Shell';

// Styles.
import { theme } from './styles/theme';

export const App: React.SFC = () => (
    <MuiThemeProvider theme={theme}>
        <GlobalStyle />
        <Shell>
            <h1>Hello human</h1>
        </Shell>
    </MuiThemeProvider>
);
