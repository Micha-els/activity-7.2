import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container  from 'react-bootstrap/Container';
import NavBar from './NavBar';
import CharactersPage from './CharactersPage';
import Home from './Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// import NotFound from './NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Container bg="light">
            <NavBar/>
            <Switch>
              <Route exact path="/">
                <Home/>
              </Route>
              <Route path="/CharactersPage">
                <CharactersPage/>
              </Route>
              {/* <Route path="*">
                <NotFound/>
              </Route> */}
            </Switch>
          </Container>
        </div>
      </div>
    </Router>
  );
}

export default App;
