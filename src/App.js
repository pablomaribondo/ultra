import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Navbar, Footer } from "./components";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/HomePage/Home";
import GlobalStyle from "./globalStyles";

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />

      <Navbar />

      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>

      <Footer />
    </Router>
  );
};

export default App;
