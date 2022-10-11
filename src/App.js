import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import DynamicRoutes from "./routes/Routes";

function App() {
  return <Router>{DynamicRoutes}</Router>;
}

export default App;
