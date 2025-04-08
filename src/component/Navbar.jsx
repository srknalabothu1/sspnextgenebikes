export default function Navbar() {
  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold text-green-700">SSP NextGen E-Bikes</h1>
        <div className="space-x-4 hidden md:block">
          <a href="#about" className="hover:text-green-700">About</a>
          <a href="#products" className="hover:text-green-700">Products</a>
          <a href="#contact" className="hover:text-green-700">Contact</a>
        </div>
      </div>
    </nav>
  );
}