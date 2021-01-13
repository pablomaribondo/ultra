import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import GlobalStyle from "./globalStyles";
import { Navbar } from "./components";

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      {/* <Switch></Switch> */}
    </Router>
  );
};

export default App;
