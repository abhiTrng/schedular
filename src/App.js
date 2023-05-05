import Home from "./pages/home";
import GlobalStyle from "./components/global-styles.jsx";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import createTheme from "./theme";
import { CssBaseline, useTheme } from "@mui/material";

const Theme = ({ children }) => {
  const { theme } = useTheme();
  return <MuiThemeProvider theme={createTheme(theme)}>
    {children}
    <CssBaseline />
    <GlobalStyle />
  </MuiThemeProvider>;
};

const App = () => {
  return (
    <Theme>
      <Home />
    </Theme>
  );
};

export default App;
