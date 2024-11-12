import { BrowserRouter } from "react-router-dom";
import "./App.css";
import RouteX from "./routes/RouteX";
import { ThemeProvider } from "./utils/ThemeProvider";

function App() {
  return (
    <BrowserRouter>
    <ThemeProvider>
      <RouteX />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
