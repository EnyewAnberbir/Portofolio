// import logo from './logo.svg';
import './App.css';
import Home from "./pages/Home.js";
import Navbar from "./components/navbar";
import Footer from './components/footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Routes>
        <Route path ="/" exact component ={Home} />
      
      </Routes>
      </Router>
      <h1>Enyew</h1>
      <Footer/>
    </div>
  );
}

export default App;
