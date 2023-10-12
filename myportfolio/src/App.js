// import logo from './logo.svg';
import './App.css';
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Switch>
        <Route path ="/" exact component ={} />
      <h1>Enyew</h1>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
