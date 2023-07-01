'use client';

import { ReactNode } from 'react';
// @mui
import { CssBaseline } from '@mui/material';
import {
  createTheme,
  ThemeProvider as MUIThemeProvider,
  StyledEngineProvider,
} from '@mui/material/styles';
import { observer } from 'mobx-react-lite';

// ----------------------------------------------------------------------

type Props = {
  children: ReactNode;
};

function _ThemeProvider({ children }: Props) {
  const theme = createTheme();

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
}

export const ThemeProvider = observer(_ThemeProvider);
