import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
  );
}

export default App;
