import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Sidebar from './Components/Shared/Sidebar/Sidebar';
import Home from './Components/Pages/Home/Home/Home';

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Sidebar></Sidebar> */}
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
        </Switch>

      </Router>
    </div>
  );
}

export default App;
