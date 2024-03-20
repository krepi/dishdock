
const Footer = () => (
    <footer className="bg-gray-900 flex  text-gray-500 p-2 ">
        {/* Treść stopki */}
        <div className="max-w-7xl mx-auto flex justify-between items-center">
            <p>&copy; DishDock {new Date().getFullYear()}</p>
            {/* Możesz dodać więcej treści, jak linki czy informacje o prawach autorskich */}
        </div>
    </footer>
);

export default Footer;
