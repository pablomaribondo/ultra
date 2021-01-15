import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Navbar, Footer } from "./components";
import Home from "./pages/HomePage/Home";
import GlobalStyle from "./globalStyles";

const App = () => {
  return (
    <Router>
      <GlobalStyle />

      <Navbar />

      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>

      <Footer />
    </Router>
  );
};

export default App;
