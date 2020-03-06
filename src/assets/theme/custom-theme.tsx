import { createMuiTheme } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#63ccff',
            main: blue[500],
            dark: '#006db3',
            contrastText: '#fff'
        },
        secondary: {
            // This is green.A700 as hex.
            main: '#11cb5f',
        },
    },
    typography: {
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
    },
    spacing: 2,
    shape: {
        borderRadius: 8,
    },
    overrides: {
        // MuiDrawer: {
        //     paper: {
        //         minWidth: 60,
        //     },
        //     paperAnchorDockedLeft: {
        //         borderRight: 'none',
        //     },
        // },
        MuiButton: {
            root: {
                background: 'linear-gradient(281deg, #3598fe 0%, #0763e0 100%) 0% 0%',
                borderRadius: 3,
                border: 0,
                color: 'white',
                height: 50,
                padding: '0 30px',
                boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
            }
        }
    },
});

export default theme;
