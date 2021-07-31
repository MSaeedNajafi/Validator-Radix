import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";

function App() {
  return (
    //fragments
    <Router>
      <Home />
    </Router>
  );
}

export default App;
