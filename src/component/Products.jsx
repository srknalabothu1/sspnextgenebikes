import { useState } from "react";
import bike from "../assets/bike.jpg";
import bike1 from "../assets/bike2.jpg";
import bike2 from "../assets/bike2.jpg";
import bike3 from "../assets/bike3.jpg";

const productData = [
  {
    name: "E-Bike Model X",
    range: "80km",
    speed: "50km/h",
    price: "₹72,999",
    image: bike,
  },
  {
    name: "E-Bike Model Y",
    range: "100km",
    speed: "55km/h",
    price: "₹84,999",
    image: bike1,
  },
  {
    name: "E-Bike Urban Pro",
    range: "70km",
    speed: "45km/h",
    price: "₹68,499",
    image: bike2,
  },
  {
    name: "E-Bike Thunder",
    range: "90km",
    speed: "60km/h",
    price: "₹89,999",
    image: bike3,
  }
];

const PRODUCTS_PER_PAGE = 3;

export default function Products() {
  const [currentPage, setCurrentPage] = useState(0);

  const startIndex = currentPage * PRODUCTS_PER_PAGE;
  const currentProducts = productData.slice(startIndex, startIndex + PRODUCTS_PER_PAGE);
  const totalPages = Math.ceil(productData.length / PRODUCTS_PER_PAGE);

  return (
    <section id="products" className="py-12 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-3xl font-bold mb-8 text-green-700">Our Products</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {currentProducts.map((product, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
              <div className="overflow-hidden">
                <img
                  src={product.image || "default-image.jpg"}
                  alt={product.name}
                  className="w-full object-cover transition-transform duration-300 hover:scale-125 cursor-zoom-in"
                  style={{ height: "auto"}}
                />
              </div>
              <div className="p-4 flex-grow flex flex-col justify-between">
                <div>
                  <h4 className="font-bold text-xl mb-2">{product.name}</h4>
                  <p className="text-gray-700 mb-1">Range: {product.range}</p>
                  <p className="text-gray-700 mb-1">Top Speed: {product.speed}</p>
                </div>
                <p className="text-green-700 font-semibold text-lg mt-2">Price: {product.price}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-8 flex justify-center space-x-2">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i)}
              className={`w-8 h-8 rounded-full border border-green-700 flex items-center justify-center ${currentPage === i ? "bg-green-700 text-white" : "text-green-700"
                }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
