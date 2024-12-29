import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import TravelavinaRouter from './route/TravelavinaRouter'
import HomePage from './pages/home/HomePage';

function App() {
  const [count, setCount] = useState(0);

  return (
    <TravelavinaRouter/>
  );
}

export default App
