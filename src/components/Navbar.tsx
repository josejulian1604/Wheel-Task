import { useState } from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import CustomButton from './CustomButton';


export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="bg-neutral-900/50 shadow-md fixed top-0 left-0 w-full z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo + Links */}
                    <div className="flex items-center">
                        <h1 className="text-2xl italic font-bold text-red-600">SUPER QUADS</h1>
                        {/* Links principales (ocultos en mobile) */}
                        <div className="hidden md:flex items-center text-white text-sm font-bold divide-x-2 divide-neutral-500 ml-4">
                            <a href="/" className="px-4 hover:text-neutral-300">Tour</a>
                            <a href="/" className="px-4 hover:text-neutral-300">Galeria de Aventuras</a>
                            <a href="/" className="px-4 hover:text-neutral-300">Acerca de</a>
                        </div>
                    </div>

                    {/* Botones + redes sociales (ocultos en mobile) */}
                    <div className="hidden md:flex items-center space-x-4">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <a target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                                <InstagramIcon fontSize="medium" />
                            </a>
                            <a target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                                <WhatsAppIcon fontSize="medium" />
                            </a>
                            <a target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                                <LinkedInIcon fontSize="medium" />
                            </a>
                            <CustomButton label="RESERVAR" className="ml-2" />
                        </div>
                    </div>
                    <div className="md:hidden">
                        <button onClick={() => setMenuOpen(!menuOpen)} className="text-white focus:outline-none">
                            {menuOpen ? <CloseIcon /> : <MenuIcon />}
                        </button>
                    </div>
                </div>
            </div>
            {menuOpen && (
                <div className="md:hidden bg-neutral-900 px-4 pb-4 space-y-3 text-white font-bold text-sm">
                    <a href="/" className="block hover:text-neutral-300">Tour</a>
                    <a href="/" className="block hover:text-neutral-300">Galeria de Aventuras</a>
                    <a href="/" className="block hover:text-neutral-300">Acerca de</a>
                    <div className="flex space-x-4 pt-2">
                        <a href="/" className="text-gray-300 hover:text-white">
                            <InstagramIcon />
                        </a>
                        <a href="/" className="text-gray-300 hover:text-white">
                            <WhatsAppIcon />
                        </a>
                        <a href="/" className="text-gray-300 hover:text-white">
                            <LinkedInIcon />
                        </a>
                    </div>
                    <CustomButton label="RESERVAR" className="mt-2 w-full" />
                </div>
            )}
        </nav>
    );
}