type CardProps = {
    image: string; // Path de la imagen a mostrar en la tarjeta
    title: string; // Título que se mostrará debajo de la imagen
};

export default function Card({ image, title }: CardProps) {
    return (
        <div className="rounded-xl overflow-hidden bg-white shadow-md w-20 sm:w-36 md:w-40 lg:w-44 xl:w-40 2xl:w-50">
            <div className="p-2">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-10 sm:h-32 md:h-36 lg:h-40 xl:h-30 2xl:h-40 object-cover"
                />
                <footer className="mt-4 text-center font-medium text-black">
                    {title}
                </footer>
            </div>
        </div>
    );
}