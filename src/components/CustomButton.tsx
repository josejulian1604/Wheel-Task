import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

interface ReserveButtonProps {
  label?: string;    // Texto opcional que se mostrará en el botón
  className?: string; // Clases CSS adicionales para personalización
}

// Componente reutilizable para diferentes secciones (En este caso NavBar y Gallery)
export default function ReserveButton({ label, className = '' }: ReserveButtonProps) {
  return (
    <button
      type="button"
      className={`flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-bold p-2 rounded-full ${className}`}
    >
      <h3 className="text-sm">{label}</h3>
      <ArrowForwardIcon className="ml-2" fontSize="medium" />
    </button>
  );
}
