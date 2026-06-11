"use client";

const trackWhatsApp = () => {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", "conversion", {
      send_to: "AW-17832329846/a1NGCIDTwrYcEPaEj7dC",
    });
  }
};

const WA_LINK =
  "https://wa.me/917268838241?text=Hello%20Nandi%20Travels,%20I%20want%20to%20book%20Varanasi%20to%20Ayodhya%20taxi.%20Please%20share%20price%20and%20availability.";

export default function VaranasiToAyodhyaTaxi() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">

      {/* Header */}
      <header className="bg-black text-white sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <img src="/logos.png" alt="Nandi Travels Logo" className="w-16 h-16 object-contain bg-white rounded-full p-2 shadow-lg" />
            <div>
              <h1 className="text-xl font-bold text-yellow-400">Nandi Travels</h1>
              <p className="text-sm text-gray-300">24/7 Taxi Service in Varanasi</p>
            </div>
          </div>
          <div className="flex gap-3">
            <a href="tel:7268838241" className="bg-yellow-400 text-black px-4 py-2 rounded-xl font-semibold hover:scale-105 transition">Call Now</a>
            <a href={WA_LINK} target="_blank" onClick={trackWhatsApp} className="bg-green-500 text-white px-4 py-2 rounded-xl font-semibold hover:scale-105 transition">WhatsApp</a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-r from-black to-gray-800 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-yellow-400 font-semibold mb-3 text-lg">Varanasi → Ayodhya</p>
            <h2 className="text-5xl font-bold leading-tight mb-6">Varanasi to Ayodhya Taxi Service</h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Comfortable and affordable taxi from Varanasi to Ayodhya. Visit Ram Mandir, Hanuman Garhi, Saryu Ghat with Nandi Travels. 24/7 booking available.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8 text-sm">
              <div className="bg-white/10 p-4 rounded-2xl">✓ Starting ₹5500</div>
              <div className="bg-white/10 p-4 rounded-2xl">✓ 24/7 Service</div>
              <div className="bg-white/10 p-4 rounded-2xl">✓ AC Cab</div>
              <div className="bg-white/10 p-4 rounded-2xl">✓ Professional Driver</div>
            </div>
            <div className="flex gap-4 flex-wrap">
              <a href="tel:7268838241" className="bg-yellow-400 text-black px-6 py-3 rounded-2xl font-bold text-lg">Call Now</a>
              <a href={WA_LINK} target="_blank" onClick={trackWhatsApp} className="bg-green-500 text-white px-6 py-3 rounded-2xl font-bold text-lg">WhatsApp Booking</a>
            </div>
          </div>
          <div>
            <img src="/ayodhya.png" alt="Varanasi to Ayodhya Taxi" className="rounded-3xl shadow-2xl" />
          </div>
        </div>
      </section>

      {/* Fare Table */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Varanasi to Ayodhya Taxi Fare (Round Trip)</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { car: "Dzire", fare: "₹5500", seats: "5 Seater", image: "/dzire.png", per: "Round Trip" },
              { car: "Ertiga", fare: "₹6500", seats: "7 Seater", image: "/oneway.png", per: "Round Trip" },
              { car: "Innova", fare: "₹8500", seats: "7 Seater", image: "/innova.png", per: "Round Trip" },
              { car: "Innova Crysta", fare: "₹9500", seats: "7 Seater", image: "/outstation.png", per: "Round Trip" },
              { car: "Tempo Traveller 17", fare: "", seats: "17 Seater", image: "/tempo.png", per: "Group Travel" },
              { car: "Tempo Traveller 20", fare: "", seats: "20 Seater", image: "/tempo.png", per: "Group Travel" },
              { car: "Tempo Traveller 26", fare: "", seats: "26 Seater", image: "/tempo.png", per: "Group Travel" },
              { car: "AC Cruiser", fare: "", seats: "12+1 Seater", image: "/cruiser.png", per: "Luxury Group Travel" },
              { car: "Urbania", fare: "", seats: "17 Seater", image: "/urbania.png", per: "Premium Group" },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-3xl shadow-lg overflow-hidden text-center hover:shadow-2xl transition">
                <img src={(item as any).image || "/dzire.png"} alt={item.car} className="h-48 w-full object-cover" />
                <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{item.car}</h3>
                <p className="text-gray-500 mb-3">{item.seats}</p>
                <div className="bg-yellow-400 text-black px-4 py-2 rounded-full font-bold text-xl mb-3 inline-block">{item.fare}</div>
                <p className="text-gray-500 text-sm mb-5">{item.per}</p>
                <div className="flex gap-2 justify-center">
                <a href={WA_LINK} target="_blank" onClick={trackWhatsApp} className="inline-block bg-black text-white px-5 py-2 rounded-xl font-semibold">Book Now</a>
                <a href="tel:7268838241" className="inline-block bg-yellow-400 text-black px-5 py-2 rounded-xl font-semibold">Call Now</a>
                </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Places to Visit */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Places to Visit in Ayodhya</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Ram Mandir", desc: "Ram Mandir — the most famous temple in Ayodhya. A must visit destination for every devotee." },
              { name: "Hanuman Garhi", desc: "Famous Hanuman temple in Ayodhya. Must visit during Ayodhya trip." },
              { name: "Saryu Ghat", desc: "Holy river Saryu ke kinare sunder ghats. Aarti dekhne layak jagah." },
              { name: "Kanak Bhawan", desc: "Beautiful temple dedicated to Ram and Sita. Famous for golden idols." },
              { name: "Nageshwarnath Temple", desc: "Ancient Shiva temple established by Kush, son of Lord Ram." },
              { name: "Ram Ki Paidi", desc: "Ghats along river Saryu. Perfect for morning walk and photography." },
            ].map((place, i) => (
              <div key={i} className="bg-gray-50 rounded-3xl p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold mb-3">{place.name}</h3>
                <p className="text-gray-600">{place.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trip Info */}
      <section className="py-20 px-6 bg-black text-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Trip Information</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { label: "Distance", value: "~235 km" },
              { label: "Travel Time", value: "4 Hours" },
              { label: "Starting Fare", value: "₹5500" },
            ].map((info, i) => (
              <div key={i} className="bg-white/10 p-8 rounded-3xl">
                <p className="text-yellow-400 text-lg mb-2">{info.label}</p>
                <p className="text-3xl font-bold">{info.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              { q: "How far is Varanasi to Ayodhya?", a: "The distance from Varanasi to Ayodhya is approximately 235 km by road. Travel time is around 4 hours." },
              { q: "What is the taxi fare from Varanasi to Ayodhya?", a: "Round trip fare starts from ₹5500 for Dzire, ₹6500 for Ertiga, ₹8500 for Innova and ₹9500 for Innova Crysta. For one way fare, please call or WhatsApp us at 7268838241." },
              { q: "What are the round trip charges from Varanasi to Ayodhya?", a: "Round trip charges — Dzire ₹5500, Ertiga ₹6500, Innova ₹8500 and Innova Crysta ₹9500. Driver will wait and bring you back the same day." },
              { q: "How can I book a taxi?", a: "You can book by calling or WhatsApp at 7268838241. Instant confirmation is provided." },
            ].map((faq, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow">
                <h3 className="font-bold text-xl mb-2">{faq.q}</h3>
                <p className="text-gray-700">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-black text-white py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Book Varanasi to Ayodhya Taxi Now</h2>
          <p className="text-xl text-gray-300 mb-10">24/7 Available — Call or WhatsApp Us</p>
          <div className="flex flex-wrap justify-center gap-5">
            <a href="tel:7268838241" className="bg-yellow-400 text-black px-8 py-4 rounded-2xl font-bold text-lg">Call: 7268838241</a>
            <a href={WA_LINK} target="_blank" onClick={trackWhatsApp} className="bg-green-500 text-white px-8 py-4 rounded-2xl font-bold text-lg">WhatsApp Booking</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 text-center">
        <p>© 2026 Nandi Travels. All Rights Reserved.</p>
      </footer>

      {/* Floating Buttons */}
      <div className="fixed bottom-10 right-6 z-50 flex flex-col gap-3">
        <a href={WA_LINK} target="_blank" onClick={trackWhatsApp} className="flex items-center gap-3 bg-white shadow-2xl border border-gray-200 rounded-full px-4 py-3 hover:scale-105 transition">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          <div className="leading-tight">
            <p className="text-sm font-bold text-black">WhatsApp Chat</p>
            <p className="text-xs text-gray-500">Online Now</p>
          </div>
        </a>
        <a href="tel:7268838241" className="flex items-center gap-3 bg-yellow-400 shadow-2xl rounded-full px-4 py-3 hover:scale-105 transition">
          <div className="text-xl">📞</div>
          <div className="leading-tight">
            <p className="text-sm font-bold text-black">Call Now</p>
            <p className="text-xs text-black/70">24/7 Support</p>
          </div>
        </a>
      </div>

    </div>
  );
}
