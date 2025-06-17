import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


const beforeAfterPairs = [
  {
    id: 1,
    before: "/assets/Image5.jpeg",
    after: "/assets/Image2.jpeg",
    description: "Car1",
  },
  {
    id: 2,
    before: "/assets/Image6 (2).jpeg",
    after: "/assets/Image7 (2).jpeg",
    description: "Car2",
  },
  {
    id: 3,
    before: "/assets/Image8 (2).jpeg",
    after: "/assets/Image9.jpeg",
    description: "Car3",
  },
  {
    id: 4,
    before: "/assets/Image8 (2).jpeg",
    after: "/assets/Image9.jpeg",
    description: "Car4",
  },
  {
    id: 5,
    before: "/assets/Image10.jpeg",
    after: "/assets/Image11.jpeg",
    description: "Car5",
  },
];

function Services() {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-center mt-5">Services</h2>

      <section className="max-w-5xl mx-auto py-8 px-4 grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-3">
            Why Choose Titanic Auto Garage Solutions?
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Expert mechanics with years of experience</li>
            <li>Genuine spare parts for all major car brands</li>
            <li>Quick diagnostics and efficient repairs</li>
            <li>Transparent pricing and detailed quotations</li>
            <li>Fast turnaround for emergency repairs</li>
            <li>Convenient pick-up and drop-off services</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-700 mb-2">Our Auto Services</h4>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Engine diagnostics and repairs</li>
            <li>Routine maintenance (oil change, brakes, filters, etc.)</li>
            <li>Electrical system troubleshooting</li>
            <li>Bodywork and paint restoration</li>
            <li>Windscreen and glass replacement</li>
            <li>Importation and installation of spare parts</li>
          </ul>
        </div>
      </section>
      <section className="max-w-7xl mx-auto py-12 px-4">
        <h3 className="text-center text-xl font-semibold mb-8">Car Repair</h3>

        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {beforeAfterPairs.map(({ id, before, after, description }) => (
            <SwiperSlide key={id}>
              <div className="bg-white rounded-lg flex flex-col items-center">
                <div className="w-full mb-4">
                  <h4 className="text-center font-semibold mb-2">
                    {description}
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-center mb-1 font-medium text-gray-600">
                        Before
                      </p>
                      <img
                        src={before}
                        alt={`Before repair - ${description}`}
                        className="w-full h-48 object-cover rounded filter blur-sm"
                      />
                    </div>

                    <div>
                      <p className="text-center mb-1 font-medium text-gray-600">
                        After
                      </p>
                      <img
                        src={after}
                        alt={`After repair - ${description}`}
                        className="w-full h-48 object-cover rounded filter blur-sm"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section className="bg-gray-100 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-xl font-semibold text-center mb-8">
            What Our Customers Say
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded shadow">
              <p className="italic text-gray-700">
                "Professional service and genuine parts. My car was back on the
                road in no time!"
              </p>
              <div className="mt-4 text-sm text-gray-500">- Samuel Kimani</div>
            </div>
            <div className="bg-white p-6 rounded shadow">
              <p className="italic text-gray-700">
                "They handled my emergency breakdown quickly and transparently.
                Highly recommended."
              </p>
              <div className="mt-4 text-sm text-gray-500">- Faith Njeri</div>
            </div>
            <div className="bg-white p-6 rounded shadow">
              <p className="italic text-gray-700">
                "I always trust Titanic Auto Garage for my routine maintenance.
                Reliable and honest team."
              </p>
              <div className="mt-4 text-sm text-gray-500">- Kevin Otieno</div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12">
        <h3 className="text-xl font-semibold text-center mb-6">Our Clients</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2 max-w-md mx-auto">
          <li>Pioneer General Insurance</li>
          <li>Old Mutual General Insurance</li>
          <li>Mua Insurance</li>
          <li>General Accident Insurance Company (K) LTD</li>
          <li>Heritage Insurance</li>
          <li>First Assurance Company LTD</li>
          <li>Allianz En France Insurance</li>
          <li>Canon General Insurance</li>
          <li>Ministry Of Defence (KACEME)</li>
          <li>Office Of The President (Statehouse)</li>
          <li>Office Of The Deputy President (Harambee Annex)</li>
        </ul>
      </section>
    </div>
  );
}

export default Services;
