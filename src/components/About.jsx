import React from "react";

function About() {
  return (
    <div>
      <section className="max-w-5xl mx-auto mt-12 grid md:grid-cols-2 gap-8 items-center px-4">
        <div>
          <h2 className="text-2xl font-semibold mb-2">About Us</h2>
          <p className="mb-4 text-gray-700">
            We are a Private Limited Company incorporated in Kenya fully
            registered & licensed. We are customer centric orginization
            committed to providing our clientele with quality spare parts, wind
            screens, glassess, garage services.We offer our products & services
            countrywide.Established in 2017 as Titanic Auto Solutions Ltd, we
            have under- gone a 360 degree revolution to become a leading dealer
            in motor vehicle spare parts in Kenya & a leading garage services
            provider across the public.
          </p>
        </div>
        <img
          src="https://img.freepik.com/free-photo/repairman-showing-customer-car-changes_482257-76100.jpg?ga=GA1.1.475879772.1726755369&semt=ais_hybrid&w=740"
          alt="Shop interior"
          className="rounded shadow-lg w-full h-60 object-cover"
        />
      </section>

      <section className="bg-white py-12 mt-12">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h3 className="text-xl font-bold mb-6">Our Core Values</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-bold text-600 mb-2">Integrity</h4>
              <p className="text-gray-600">
                Scissors are hard to find in the Titanic Auto solutions Ltd
                fraternity. This is because we don't dodge nor zigzag. We go
                beyond the extra mile to get you your desired results.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-600 mb-2">Flexibility</h4>
              <p className="text-gray-600">
                We understand your business; we make quick decisions that
                enhance effeciency in product availability & delivery.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-600 mb-2">Reliability</h4>
              <p className="text-gray-600">
                Our word is one of our strongest tools: if you ask us to deliver
                we will surely deliver. If we can't, we say we won't, and
                propose alter- native effective options of achieving your
                objectives
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
