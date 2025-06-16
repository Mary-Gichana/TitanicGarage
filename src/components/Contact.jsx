import React from "react";

function Contact() {
  return (
    <div>
      <h2 className="text-2xl font-semibold  text-center mt-12"> Contact Us</h2>
      <section className="relative bg-black text-white py-16 flex flex-col items-center mt-8">
        <img
          src="/assets/Image4.jpeg"
          alt="Footer background"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="relative z-10 text-center">
          <p className="text-lg mb-4">Ready to get started?</p>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Visit Mtwapa Electrical and Hardware Today!
          </h2>

          <div className="mt-8 text-sm text-gray-300 space-y-1">
            <p>
              <strong>Address:</strong> ELDORET BRANCH JAMBONI AREA, ALONG
              ELDORET-NAIROBI ROAD
            </p>
            <p>
              <strong>Phone:</strong> 
            </p>
            <p>
              <strong>Email:</strong> 
            </p>
          </div>
        </div>

        <div className="relative z-10 mt-8 text-sm text-gray-400">
          &copy; 2025 Titanic Auto Garage Solutions. All rights reserved.
        </div>
      </section>
    </div>
  );
}

export default Contact;
