import React from "react";
import Navbar from "./Navbar";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import Products from "./Products";


function Home() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Navbar />

      <section className="relative bg-black text-white h-[620px] flex flex-col justify-center items-center">
        <img
          src="https://img.freepik.com/free-photo/bipoc-specialist-car-service-using-professional-mechanical-tool-repair-broken-ignition-system-licensed-specialist-garage-fixing-client-automobile-ensuring-optimal-automotive-performance_482257-73049.jpg?ga=GA1.1.475879772.1726755369&semt=ais_hybrid&w=740"
          alt="Electrical hardware background"
          className="absolute inset-0 w-full h-full object-cover  "
        />
        <div className="relative z-10 text-center px-4">
          <p className="text-sm uppercase tracking-widest">Dealers in</p>
          <h1 className="text-3xl md:text-5xl font-bold mt-2 mb-4">
            All Motor Spare Parts, Wind Screens, Importation of Motor Vehicles
            and other General Suppliers
          </h1>
        </div>
      </section>

      <section id="about" className="bg-white">
        <About />
      </section>
      <section id="products" className="bg-white">
        <Products />
      </section>
      <section className="relative bg-gray-900 text-white py-16 flex flex-col items-center mt-12">
        <img
          src="https://img.freepik.com/free-photo/worker-examines-out-order-car-engine_482257-91092.jpg?ga=GA1.1.475879772.1726755369&semt=ais_hybrid&w=740"
          alt="Hardware tools"
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        />
        <div className="relative z-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            More products,
          </h2>
        </div>
      </section>

      <section id="services" className="bg-white">
        <Services />
      </section>

      <section id="contact" className="bg-white">
        <Contact />
      </section>
    </div>
  );
}

export default Home;
