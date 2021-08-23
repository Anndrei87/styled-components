
import './App.css';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Home from './pages/index'
import SigninPage from './components/Signin/index';

 
function App() {
  return (
    <Router>
      
      <Switch>
        <Route path="/" component={Home} exact /> 
        <Route path="/signin" component={SigninPage} exact /> 
      </Switch>
    </Router>
  );
}

export default App;