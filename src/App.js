import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Sidebar from './Components/Shared/Sidebar/Sidebar';
import Home from './Components/Pages/Home/Home/Home';
import HomeProjects from './Components/Pages/Home/HomeProjects/HomeProjects';

function App() {
  return (
    <div className="App d-flex justify-content-start">
      <Router className="d-flex">
        <Sidebar></Sidebar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/portfolio">
            <HomeProjects></HomeProjects>
          </Route>
        </Switch>

      </Router>
    </div>
  );
}

export default App;
