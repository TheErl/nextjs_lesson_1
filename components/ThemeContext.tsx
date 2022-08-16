import React, { PropsWithChildren } from 'react';
import {useSelector} from 'react-redux';
import {getTheme} from 'selectors/theme';
import {createTheme, ThemeProvider} from '@mui/material';
import {Theme} from 'types/theme';

const ThemeContext: React.FC<PropsWithChildren> = ({ children }) => {

    const storeTheme: Theme = useSelector(getTheme);

    const themePreset = createTheme({
      palette: {
        mode: storeTheme,
      },
    });

    return (
        <ThemeProvider theme={themePreset}>
            {children}
        </ThemeProvider>
    );
};

export default ThemeContext;
