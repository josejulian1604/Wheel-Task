
import './App.css'
import BackgroundWheel from './sections/BackgroundWheel';
import Gallery from './sections/Gallery';
import Navbar from './components/Navbar';
import { useState } from 'react';

function App() {
  const [wheelHeight, setWheelHeight] = useState(0);
  return (
    <>
      <Navbar />
      <BackgroundWheel onSizeChange={setWheelHeight} />
      <Gallery overlap={wheelHeight} />
    </>
  );
}

export default App;

