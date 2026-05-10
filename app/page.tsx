export default function NandiTravelsWebsite() {
  const seoKeywords = [
    "taxi service in varanasi",
    "varanasi cab booking",
    "airport taxi varanasi",
    "varanasi to ayodhya taxi",
    "prayagraj taxi service",
    "vindhyachal taxi booking",
  ];
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* SEO Meta Tags */}
      <title>Best Taxi Service in Varanasi | Nandi Travels</title>
      <meta
        name="description"
        content="Book local and outstation taxi service in Varanasi with Nandi Travels. Airport pickup, Ayodhya taxi, Prayagraj cab and sightseeing tours available 24/7."
      />

      <meta
        name="keywords"
        content={seoKeywords.join(", ")}
      />
      {/* Header */}
      <header className="bg-black text-white sticky top-0 z-50 shadow-lg">
  <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

    {/* Logo + Name */}
    <div className="flex items-center gap-3">
      <img
        src="/logos.png"
        alt="Nandi Travels Logo"
        className="w-20 h-20 object-contain bg-white rounded-full p-2 shadow-lg"
      />

      <div>
        <h1 className="text-2xl font-bold text-yellow-400">
          Nandi Travels
        </h1>

        <p className="text-sm text-gray-300">
          24/7 Taxi Service in Varanasi
        </p>
      </div>
    </div>

    {/* Menu */}
    <nav className="hidden md:flex gap-6 text-sm font-medium">
      <a href="#home" className="hover:text-yellow-400 transition">
        Home
      </a>

      <a href="#services" className="hover:text-yellow-400 transition">
        Services
      </a>

      <a href="#fleet" className="hover:text-yellow-400 transition">
        Fleet
      </a>

      <a href="#contact" className="hover:text-yellow-400 transition">
        Contact
      </a>
    </nav>

    {/* Buttons */}
    <div className="flex gap-3">
      <a
        href="tel:7268838241"
        className="bg-yellow-400 text-black px-4 py-2 rounded-xl font-semibold hover:scale-105 transition"
      >
        Call Now
      </a>

      <a
       href="https://wa.me/917268838241?text=Hello%20Nandi%20Travels,%20I%20want%20to%20book%20a%20cab.%20Please%20share%20price%20and%20availability."
        target="_blank"
        className="bg-green-500 text-white px-4 py-2 rounded-xl font-semibold hover:scale-105 transition"
      >
        WhatsApp
      </a>
    </div>
  </div>
</header>
      {/* <div className="flex items-center gap-3">
  <img
    src="/logo.png"
    alt="Nandi Travels Logo"
    className="w-14 h-14 object-contain bg-white rounded-full p-1"
  />

  <div>
    <h1 className="text-2xl font-bold text-yellow-400" >
      Nandi Travels
    </h1>

    <p className="text-sm text-black">
      24/7 Taxi Service in Varanasi
    </p>
  </div> */}
      {/* Logo */}

{/* </div>
      <header className="bg-black text-white sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <div>
            
            <h1 className="text-2xl font-bold text-yellow-400 " >Nandi Travels</h1>
            <p className="text-sm text-gray-300">24/7 Taxi Service in Varanasi</p>
          </div>

          <nav className="hidden md:flex gap-6 text-sm font-medium">
            <a href="#home" className="hover:text-yellow-400 transition">Home</a>
            <a href="#services" className="hover:text-yellow-400 transition">Services</a>
            <a href="#fleet" className="hover:text-yellow-400 transition">Fleet</a>
            <a href="#contact" className="hover:text-yellow-400 transition">Contact</a>
          </nav>

          <div className="flex gap-3">
            <a
              href="tel:7268838241"
              className="bg-yellow-400 text-black px-4 py-2 rounded-xl font-semibold hover:scale-105 transition"
            >
              Call Now
            </a>

            <a
              href="https://wa.me/917268838241"
              target="_blank"
              className="bg-green-500 text-white px-4 py-2 rounded-xl font-semibold hover:scale-105 transition"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </header> */}

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-r from-black to-gray-800 text-white py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl font-bold leading-tight mb-6">
              Best Taxi Service in Varanasi
            </h2>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Reliable local and outstation taxi booking service for Airport Pickup,
              Ayodhya, Prayagraj, Vindhyachal, Bodhgaya and local sightseeing.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8 text-sm">
              <div className="bg-white/10 p-4 rounded-2xl">✓ 24/7 Service</div>
              <div className="bg-white/10 p-4 rounded-2xl">✓ Clean Cars</div>
              <div className="bg-white/10 p-4 rounded-2xl">✓ Affordable Fare</div>
              <div className="bg-white/10 p-4 rounded-2xl">✓ Professional Drivers</div>
            </div>

            <div className="flex gap-4 flex-wrap mb-10">
              <a
                href="tel:7268838241"
                className="bg-yellow-400 text-black px-6 py-3 rounded-2xl font-bold text-lg"
              >
                Book Taxi Now
              </a>

              <a
               href="https://wa.me/917268838241?text=Hello%20Nandi%20Travels,%20I%20want%20to%20book%20a%20cab.%20Please%20share%20price%20and%20availability."
                target="_blank"
                className="bg-green-500 px-6 py-3 rounded-2xl font-bold text-lg"
              >
                WhatsApp Booking
              </a>
            </div>


          </div>

          <div>
            <img
              src="/front.png"
              alt="Taxi Service"
              className="rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="fleet" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-4xl font-bold mb-6">About Nandi Travels</h3>

          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
            Nandi Travels is a trusted taxi and cab booking service in Varanasi.
            We provide safe, comfortable and affordable local as well as
            outstation taxi services for tourists, families and business
            travelers.
          </p>
        </div>
      </section>

      {/* Services */}
<section id="services" className="py-20 px-6">
  <div className="max-w-7xl mx-auto">
    <h3 className="text-4xl font-bold text-center mb-14">
      Our Taxi Services
    </h3>

    <div className="grid md:grid-cols-3 gap-8">
      {[
        {
          title: "Varanasi Local Taxi",
          image:
            "/local-taxi.jpg",
          places:
            "Kashi Vishwanath, Assi Ghat, Sarnath, Dashashwamedh Ghat",
          price: "Starting from ₹2200",
        },
        {
          title: "Airport Pickup & Drop",
          image:
            "/airport.png",
          places:
            "Lal Bahadur Shastri Airport to Any Location",
          price: "Starting from ₹1000",
        },
        {
          title: "Varanasi to Ayodhya Taxi",
          image:
            "/ayodhya.png",
          places:
            "Ram Mandir, Hanuman Garhi, Saryu Ghat",
          price: "Starting from ₹5500",
        },
        {
          title: "Prayagraj Cab Booking",
          image:
            "/pryagraj.png",
          places:
            "Triveni Sangam, Anand Bhavan, Kumbh Area",
          price: "Starting from ₹3300",
        },
        {
          title: "Vindhyachal Tour",
          image:
            "/vindhyachal.png",
          places:
            "Vindhyavasini Temple, Kali Khoh, Ashtabhuja",
          price: "Starting from ₹2200",
        },
        {
          title: "Bodhgaya Taxi",
          image:
            "/bodhgaya.png",
          places:
            "Mahabodhi Temple, Bodhi Tree, Thai Monastery",
          price: "Starting from ₹6000",
        },
        {
          title: "Railway Station Pickup",
          image:
            "/station.png",
          places:
            "Varanasi Junction & Banaras Station Pickup",
          price: "Starting from ₹1000",
        },
        {
          title: "One Way Taxi",
          image:
            "/oneway.png",
          places:
            "One Side Outstation Cab Booking",
          price: "Affordable One Way Fare",
        },
        {
          title: "Outstation Cab Service",
          image:
            "/outstation.png",
          places:
            "Lucknow, Patna, Gorakhpur, Prayagraj, Ayodhya",
          price: "Custom Pricing Available",
        },
      ].map((service, index) => (
        <div
          key={index}
          className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition"
        >
          <img
            src={service.image}
            alt={service.title}
            className="h-60 w-full object-cover"
          />

          <div className="p-6">
            <h4 className="text-2xl font-bold mb-3">
              {service.title} 
            </h4>

            <p className="text-gray-600 mb-5 leading-relaxed">
              {service.places}
            </p>

            <div className="inline-block bg-yellow-400 text-black px-4 py-2 rounded-full font-bold mb-5">
              {service.price}
            </div>

            <div>
              <a
               href="https://wa.me/917268838241?text=Hello%20Nandi%20Travels,%20I%20want%20to%20book%20a%20cab.%20Please%20share%20price%20and%20availability."
                target="_blank"
                className="inline-block bg-black text-white px-6 py-3 rounded-xl font-semibold"
              >
                Book This Trip
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Tour Destinations Gallery */}
      <section className="py-20 px-6 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl font-bold text-center mb-14">
            Popular Tour Destinations
          </h3>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                name: "Ayodhya",
                image:
                  "/ayodhya.png ",
              },
              {
                name: "Prayagraj",
                image:
                  "/pryagraj.png",
              },
              {
                name: "Bodhgaya",
                image:
                  "/bodhgaya.png",
              },
              {
                name: "Varanasi",
                image:
                  "/varanasi.png",
              },
            ].map((place, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition"
              >
                <img
                  src={place.image}
                  alt={place.name}
                  className="h-72 w-full object-cover"
                />

                <div className="p-6 text-center">
                  <h4 className="text-2xl font-bold mb-4">{place.name}</h4>

                  <a
                  href="https://wa.me/917268838241?text=Hello%20Nandi%20Travels,%20I%20want%20to%20book%20a%20cab.%20Please%20share%20price%20and%20availability."
                    target="_blank"
                    className="inline-block bg-yellow-400 text-black px-5 py-2 rounded-xl font-bold"
                  >
                    Book Tour
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet */}
      <section id="fleet" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl font-bold text-center mb-14">Our Vehicles</h3>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Dzire",
                price: "₹11/km",
                image:
                  "/dzire.png",
              },
              {
                name: "Ertiga",
                price: "₹13/km",
                image:
                  "/oneway.png",
              },
              {
                name: "Innova",
                price: "₹16/km",
                image:
                  "/innova.png",
              },
              {
                name: "Crysta",
                price: "₹19/km",
                image:
                  "/outstation.png",
              },
              {
                name: "Tempo Traveller",
                price: "Contact for Fare",
                image:
                  "/tempo.png",
              },
              {
                name: "Urbania",
                price: "Premium Group Travel",
                image:
                  "/urbania.png",
              },
            ].map((car, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition"
              >
                <img
                  src={car.image}
                  alt={car.name}
                  className="h-56 w-full object-cover"
                />

                <div className="p-6">
                  <h4 className="text-2xl font-bold mb-3">{car.name}</h4>

                  <div className="inline-block bg-yellow-400 text-black px-4 py-2 rounded-full font-bold mb-4">
                    {car.price}
                  </div>

                  <p className="text-gray-600 mb-6">
                    Comfortable and clean vehicle for local and outstation travel.
                  </p>

                  <a
                   href="https://wa.me/917268838241?text=Hello%20Nandi%20Travels,%20I%20want%20to%20book%20a%20cab.%20Please%20share%20price%20and%20availability."
                    target="_blank"
                    className="inline-block bg-black text-white px-5 py-3 rounded-xl font-semibold"
                  >
                    Book Vehicle
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-4xl font-bold mb-14">Why Choose Us?</h3>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "24/7 Taxi Availability",
              "Professional Drivers",
              "Affordable Pricing",
              "Clean & Sanitized Cars",
              "Fast Booking Support",
              "Trusted Taxi Service",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-black text-white p-8 rounded-3xl"
              >
                <p className="text-xl font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-center mb-14">
            Customer Reviews
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Rahul Singh",
                review:
                  "Very professional service and clean car. Highly recommended.",
              },
              {
                name: "Amit Kumar",
                review:
                  "Best taxi service from Varanasi to Ayodhya.",
              },
              {
                name: "Priya Sharma",
                review:
                  "Driver was polite and arrived on time.",
              },
            ].map((review, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-3xl shadow-md"
              >
                <p className="text-gray-700 mb-6">“{review.review}”</p>
                <h4 className="font-bold text-lg">— {review.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-black text-white py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-4xl font-bold mb-6">Contact Nandi Travels</h3>

          <p className="text-xl text-gray-300 mb-10">
            Book your taxi anytime for local travel, airport transfer or
            outstation trips.
          </p>

          <div className="flex flex-wrap justify-center gap-5">
            <a
              href="tel:7268838241"
              className="bg-yellow-400 text-black px-8 py-4 rounded-2xl font-bold text-lg"
            >
              Call: 7268838241
            </a>

            <a
             href="https://wa.me/917268838241?text=Hello%20Nandi%20Travels,%20I%20want%20to%20book%20a%20cab.%20Please%20share%20price%20and%20availability."
              target="_blank"
              className="bg-green-500 text-white px-8 py-4 rounded-2xl font-bold text-lg"
            >
              WhatsApp Booking
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* SEO Content Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-center mb-10">
            Best Cab Booking Service in Varanasi
          </h3>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Nandi Travels offers professional taxi service in Varanasi for local sightseeing,
            airport pickup and drop, Ayodhya tour, Prayagraj trip, Vindhyachal darshan,
            and outstation cab booking. We provide clean cars, experienced drivers,
            affordable pricing and 24/7 booking support.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            If you are searching for the best taxi service in Varanasi, airport taxi,
            or Varanasi to Ayodhya cab booking, Nandi Travels provides safe and comfortable
            travel for families, tourists and business travelers.
          </p>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-400 py-8 text-center">
        <p>© 2026 Nandi Travels. All Rights Reserved.</p>
      </footer>

      {/* Live Chat Support */}
     {/* Floating Contact Buttons */}
<div className="fixed bottom-10 right-6 z-50 flex flex-col gap-3">

  {/* WhatsApp Chat */}
  <a
    href="https://wa.me/917268838241?text=Hello%20Nandi%20Travels,%20I%20want%20to%20book%20a%20cab.%20Please%20share%20price%20and%20availability."
    target="_blank"
    className="flex items-center gap-3 bg-white shadow-2xl border border-gray-200 rounded-full px-4 py-3 hover:scale-105 transition"
  >
    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>

    <div className="leading-tight">
      <p className="text-sm font-bold text-black">
        WhatsApp Chat
      </p>

      <p className="text-xs text-gray-500">
        Online Now
      </p>
    </div>
  </a>

  {/* Call Now */}
  <a
    href="tel:7268838241"
    className="flex items-center gap-3 bg-yellow-400 shadow-2xl rounded-full px-4 py-3 hover:scale-105 transition"
  >
    <div className="text-xl">
      📞
    </div>

    <div className="leading-tight">
      <p className="text-sm font-bold text-black">
        Call Now
      </p>

      <p className="text-xs text-black/70">
        24/7 Support
      </p>
    </div>
  </a>

</div>
    
    
    </div>
  );
}
