export default function Contact() {
  return (
    <section id="contact" className="py-12 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-3xl font-bold mb-6 text-green-700">Contact Us</h3>

        <p className="mb-2">
          Email:{" "}
          <a
            href="mailto:sspnextgen@gmail.com"
            className="text-green-700 underline hover:text-green-900"
          >
            sspnextgen@gmail.com
          </a>
        </p>
        <p className="mb-2">
          Phone:{" "}
          <a
            href="tel:6309066338"
            className="text-green-700 underline hover:text-green-900"
          >
            6309066338
          </a>
        </p>

        <div className="mb-6 text-gray-700 leading-relaxed">
          <strong className="block text-lg mb-1">Address</strong>
          <p>Plot No. 7, Ramalayam Road, Bagh Ameer,</p>
          <p>Sumitra Nagar Colony, Kukatpally,</p>
          <p>Hyderabad, Telangana – 500072</p>
        </div>

        {/* Google Map Embed */}
        <div className="mb-8">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps?q=SSP+NextGen+E-Bikes,+Plot+No.+7,+Ramalayam+Road,+Bagh+Ameer,+Sumitra+Nagar+Colony,+Kukatpally,+Hyderabad,+Telangana+500072&output=embed"
            width="100%"
            height="350"
            className="rounded-2xl shadow-lg border-2 border-green-100"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="flex justify-center space-x-6 mt-4">
          <a
            href="https://www.instagram.com/sspnextgenebikes"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://img.icons8.com/color/48/instagram-new--v1.png"
              alt="Instagram"
              className="h-8 w-8 hover:scale-110 transition-transform duration-200"
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
              className="h-8 w-8 hover:scale-110 transition-transform duration-200"
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
              className="h-8 w-8 hover:scale-110 transition-transform duration-200"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
