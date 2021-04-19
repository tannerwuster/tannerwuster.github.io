import "./App.css";
import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { Home } from "./components/Home";
import { Contact } from "./components/Contact";
import { Projects } from "./components/Projects";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route component={Home}>
          <Home />
        </Route>
        <Route component={Projects}>
          <Projects />
        </Route>
        <Route component={Contact}>
          <Contact />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;

// import "./App.css";
// import React from "react";

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Redirect,
//   z,
// } from "react-router-dom";

// import { Home } from "./components/Home";
// import { Contact } from "./components/Contact";
// import { Projects } from "./components/Projects";
// import { Header } from "./components/Header";
// import { Footer } from "./components/Footer";

// function App() {
//   return (
//     <Router>
//       <Header />
//       <Switch>
//         <Route path="./components/Home">
//           <Home />
//         </Route>
//         <Route path="./components/Projects">
//           <Projects />
//         </Route>
//         {/* <Route path="/src/components/Contact">
//             <Contact />
//           </Route> */}
//       </Switch>
//       <Footer />
//     </Router>
//   );
// }

// export default App;
