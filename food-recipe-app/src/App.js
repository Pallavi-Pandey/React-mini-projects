import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Navbar from './components/navbar';

function App() {
  return (
    <div>
      <div className='min-h-screen p-6 bg-white text-gray-600 text-lg'>
        <Navbar />
      </div>
      
    </div>
  );
}

export default App;
