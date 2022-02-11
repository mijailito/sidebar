import { ThemeProvider } from "@mui/material";
import Contenedor from "./components/Contenedor";
import theme from './components/TemaConfig';


function App() {
  return (
    <ThemeProvider theme={theme} >
      <Contenedor/>
    </ThemeProvider>
  );
}

export default App;
