import { useEffect } from 'react'
import './App.css'
import AOS from "aos";
import "aos/dist/aos.css";
import Homepage from './pages/Homepage'

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Homepage />
    </>
  )
}

export default App
