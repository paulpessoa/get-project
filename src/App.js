import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';






function App() {
  return (
    <Router>
      <ul>
        <li>home</li>
        <li>contato</li>
      </ul>
      <Routes>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/company">
          <Company />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/newproject">
          <NewProject />
        </Route>

      </Routes>
      <p>footer</p>
    </Router>
  );
}

export default App;
