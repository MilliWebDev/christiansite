import Image from "next/image";

export default function Hero() {
    return (
      <section className="bg-gray-50 py-20 ">
        <div className="max-w-7xl mx-auto px-4 flex flex-col-reverse lg:flex-row items-center gap-12 mt-10">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Build Your Digital Presence
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Showcase your brand, services, or ideas with a beautiful and responsive website.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#"
                className="px-6 py-3 bg-indigo-600 text-white rounded-md text-lg hover:bg-indigo-700 transition"
              >
                Get Started
              </a>
              <a
                href="#"
                className="px-6 py-3 border border-indigo-600 text-indigo-600 rounded-md text-lg hover:bg-indigo-50 transition"
              >
                Learn More
              </a>
            </div>
          </div>
  
          {/* Right Image */}
          <div className="w-full lg:w-1/2">
            <Image
              src="/hero/hero.jpg"
              alt="Hero Image"
              width={500}
              height={500}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>
    );
  }
  