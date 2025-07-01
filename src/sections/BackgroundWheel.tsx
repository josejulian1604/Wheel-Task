import { useRef, useState, useEffect } from 'react';
import Llanta from '../assets/Llanta.png';
import Card from '../components/Card';
import FotoAventura from '../assets/FotoAventura.jpg';

interface BackgroundWheelProps {
    onSizeChange?: (height: number) => void;
}

export default function BackgroundWheel({ onSizeChange }: BackgroundWheelProps) {
    const imgRef = useRef<HTMLImageElement>(null);
    const topCardTitleRef = useRef<string>("");
    const [isDragging, setIsDragging] = useState(false);
    const [angle, setAngle] = useState(0);
    const [radius, setRadius] = useState(0);
    const [wheelHeight, setWheelHeight] = useState(0);
    const [viewPortHeight, setViewportHeight] = useState(window.innerHeight);
    const lastX = useRef(0);

    const CARDS = 6;

    useEffect(() => {
        const img = imgRef.current;
        if (!img) return;

        const updateSize = () => {
            const rect = img.getBoundingClientRect();
            setRadius(rect.width * 0.8);
            if (onSizeChange) {
                setWheelHeight(rect.height);
                onSizeChange(rect.height);
            }
        };

        const observer = new ResizeObserver(updateSize);
        observer.observe(img);
        updateSize();

        return () => observer.disconnect();
    }, [onSizeChange]);

    useEffect(() => {
        const handleResize = () => setViewportHeight(window.innerHeight);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const offsetTop = viewPortHeight * 0.75 - wheelHeight / 2;

    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
        lastX.current = e.clientX;
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging) return;

        const deltaX = e.clientX - lastX.current;
        lastX.current = e.clientX;

        setAngle(prev => prev + deltaX * 0.2);
    };

    return (
        <section
            className="h-dvh bg-black text-white relative overflow-hidden"
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onMouseDown={handleMouseDown}
        >
            <div
                className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center"
                style={{ top: `${offsetTop}px` }}
            >
                {/* Orbiting Cards */}
                <div
                    className="absolute inset-0 flex items-center justify-center pointer-events-none z-20"
                    style={{
                        transform: `rotate(${angle}deg)`,
                        transition: 'transform 0.1s linear',
                    }}
                >
                    {Array.from({ length: CARDS }).map((_, i) => {
                        const orbitAngle = (360 / CARDS) * i;
                        const totalAngle = (angle + orbitAngle) % 360;
                        const normalizedAngle = totalAngle < 0 ? totalAngle + 360 : totalAngle;

                        const isTop = normalizedAngle >= 345 || normalizedAngle <= 15;
                        const scaleStyle = isTop ? 2 : 1;
                        const title = `Card ${i + 1}`;

                        if (isTop) {
                            topCardTitleRef.current = title;
                        }

                        return (
                            <div
                                key={i}
                                className="absolute"
                                style={{
                                    transform: `rotate(${orbitAngle}deg) translateY(-${radius}px) scale(${scaleStyle})`,
                                    transition: 'transform 0.3s ease',
                                }}
                            >
                                <Card image={FotoAventura} title={title} />
                            </div>
                        );
                    })}
                </div>

                {/* Wheel */}
                <img
                    ref={imgRef}
                    src={Llanta}
                    alt="Wheel"
                    draggable="false"
                    className="w-[50vw] sm:w-[35vw] md:w-[25vw] lg:w-[22vw] xl:w-[30vw] 2xl:w-[35vw] h-auto select-none z-10"
                    style={{ transform: `rotate(${angle}deg)` }}
                />
            </div>
            <div
                className="
                    absolute 
                    top-20 sm:top-24 md:top-28 
                    right-4 sm:right-8 md:right-16 
                    text-left z-30 max-w-xs
                "
            >
                <p className="text-base sm:text-lg md:text-xl leading-tight font-bold">
                    Recorrido dentro de nuestro bosque <br />
                    <span>{topCardTitleRef.current}</span>
                </p>
                <p className="text-red-600 font-bold italic">SUPER QUADS</p>
            </div>
        </section>
    );
}