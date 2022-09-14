import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import Home from './Components/Home/Home'
import Navbar from './Components/Navbar/Navbar';
import Learn from './Components/Learn/Learn'

function App() {
  return (
    <Router>
        <div className="app">
          <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/learn' element={<Learn/>} />
        </Routes>
    </div>
      </Router>
  );
}

export default App;
