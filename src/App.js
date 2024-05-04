import './App.css';
import Login from './components/Login'
import Dashboard from './components/Dashboard';
import { Routes, Route, HashRouter } from 'react-router-dom';

function App() {
  return (
    <>
    <HashRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
    </Routes>
    </HashRouter>

</>
  );
}

export default App;
