import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import { Switch, Route } from 'react-router-dom'
import LandingPage from '../src/components/LandingPage';
import event from './components/event';
import CreateEvent from './components/CreateEvent';

function App() {
  return (
   
      <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/event" component={event} />
        <Route path="/create" component={CreateEvent} />
      </Switch>
      </Router>
   
  );
}

export default App;
