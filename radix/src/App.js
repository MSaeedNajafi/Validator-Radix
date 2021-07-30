import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Page1 from "./components/pages/Page1";
import Page2 from "./components/pages/Page2";
import Page3 from "./components/pages/Page3";
import SideBar from "./components/SideBar";

function App() {
  return (
    //fragments
    <Router>
      <Home />
      {/* <SideBar />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/page1" component={Page1} />
        <Route path="/page2" component={Page2} />
        <Route path="/page3" component={Page3} />
      </Switch> */}
    </Router>
  );
}

export default App;
