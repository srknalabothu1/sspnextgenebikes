export default function Contact() {
  return (
    <section id="contact" className="py-12 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-3xl font-bold mb-6 text-green-700">Contact Us</h3>

        <p className="mb-2">
          Email:{" "}
          <a href="mailto:sspnextgen@gmail.com" className="text-green-700 underline">
            sspnextgen@gmail.com
          </a>
        </p>
        <p className="mb-2">
          Phone:{" "}
          <a href="tel:6309066338" className="text-green-700 underline">
            6309066338
          </a>
        </p>
        <p className="mb-6">
        Address: Plot no 7, Ramalayam Rd, Bagh Ameer, 
        Sumitra Nagar Colony, Kukatpally, 
        Hyderabad, Telangana 500072
        </p>

        <div className="flex justify-center space-x-6 mt-4">
          <a
            href="https://www.instagram.com/sspnextgenebikes"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://img.icons8.com/color/48/instagram-new--v1.png"
              alt="Instagram"
              className="h-8 w-8 hover:scale-110 transition"
            />
          </a>
          <a
            href="https://www.facebook.com/sspnextgenebikes"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://img.icons8.com/color/48/facebook-new.png"
              alt="Facebook"
              className="h-8 w-8 hover:scale-110 transition"
            />
          </a>
          <a
            href="https://wa.me/916309066338"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://img.icons8.com/color/48/whatsapp.png"
              alt="WhatsApp"
              className="h-8 w-8 hover:scale-110 transition"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
