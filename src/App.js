import logo from './logo.svg';
import './App.css';
import Quiz from './scenes/Quiz';
import { createTheme, ThemeProvider, useTheme } from '@mui/material';
import 'typeface-montserrat';

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: 'Montserrat, sans-serif',
    },
  });
  return (
    <ThemeProvider theme={theme}>
    <div className="App"   >
        <Quiz/>
    </div>
    </ThemeProvider>
  );
}

export default App;
