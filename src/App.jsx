import Navbar from "../src/component/Navbar"
import Hero from "../src/component/Hero"
import About from "../src/component/About"
import Products from "../src/component/Products"
import Contact from "../src/component/Contact"
import Footer from "../src/component/Footer"


function App() {
  return (
    <div className="font-sans text-gray-800">
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;