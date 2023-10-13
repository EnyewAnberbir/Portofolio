import './App.css';
import Home from "./pages/Home.js";
import Resume from "./pages/resume.js";
import Navbar from "./components/navbar";
import Footer from './components/footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<> <Home /></>}/>
          <Route path="/Resume" element={<><Navbar /><Resume /> <Footer /></>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
