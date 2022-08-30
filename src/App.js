import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import Home from './Components/Home/Home'

function App() {
  return (
    <Router>
        <div className="app">
        <Routes>
          <Route path='/' element={<Home/>} />
        </Routes>
    </div>
      </Router>
  );
}

export default App;
