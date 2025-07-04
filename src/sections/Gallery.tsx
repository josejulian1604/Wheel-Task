import CustomButton from '../components/CustomButton';
import FotoAventura from '../assets/FotoAventura.jpg';

interface GalleryProps {
    overlap: number; // Valor para superponer la galería con la sección anterior
}

export default function Gallery({ overlap }: GalleryProps) {
    // Crea un arreglo de 8 elementos para renderizar las imágenes
    const images = Array.from({ length: 8 });

    return (
        <section
            className="bg-neutral-950 text-white relative z-10 p-10 shadow-lg transition-all duration-300 ease-in-out"
            // Aplica un margen negativo para superponer la galería con la rueda
            style={{
                marginTop:
                    window.innerWidth < 640
                        ? `-${overlap * 1.1}px`  
                        : `-${overlap / 2}px`     
            }}
        >
            <h1 className="text-3xl font-bold uppercase text-center">Galeria de Aventuras</h1>
            <div className="flex justify-center">
                <CustomButton label="Ver galería" className="mt-4" />
            </div>

            {/* Grid de imágenes en columnas responsivas */}
            <div className="mt-10 columns-1 sm:columns-2 md:columns-2 lg:columns-2 gap-4 space-y-4">
                {images.map((_, index) => (
                    <img
                        key={index}
                        src={FotoAventura}
                        alt={`Aventura ${index + 1}`}
                        className="w-full rounded-lg object-cover hover:opacity-90 transition duration-300 ease-in-out"
                        // Altura variable
                        style={{
                            height: `${200 + (index % 4) * 40}px`
                        }}
                    />
                ))}
            </div>
        </section>
    );
}