import './App.css'
import BackgroundWheel from './sections/BackgroundWheel';
import Gallery from './sections/Gallery';
import Navbar from './components/Navbar';
import { useState } from 'react';

function App() {
  // Estado para almacenar la altura de la rueda, que se usará para superponer la galería
  const [wheelHeight, setWheelHeight] = useState(0);

  return (
    <>
      <Navbar />
      {/* Sección de la rueda, comunica su altura al padre mediante onSizeChange */}
      <BackgroundWheel onSizeChange={setWheelHeight} />
      {/* Galería de imágenes, recibe la altura de la rueda para calcular el solapamiento */}
      <Gallery overlap={wheelHeight} />
    </>
  );
}

export default App;

