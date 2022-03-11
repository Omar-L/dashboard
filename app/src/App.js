import { ThemeProvider } from "@mui/material";
import { CssBaseline } from '@mui/material';
import { BrowserRouter } from "react-router-dom";
import Navigation from "./components/navigation/navbar";
import Routes from './routes'
// import theme from 'theme';

import { createTheme, responsiveFontSizes } from '@mui/material/styles';



const App = () => {
  let theme = createTheme();
  theme = responsiveFontSizes(theme);
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Navigation />
        <Routes />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;