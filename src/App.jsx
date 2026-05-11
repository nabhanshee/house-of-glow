import { motion } from "framer-motion";

function App() {

  const candles = [
    {
      id: 1,
      name: "Cerulean Spring",
      image: "/Pillar.jpeg",
      description: "An elegantly carved pillar showcasing a vertical bloom of tulips in a calming, soft blue finish."
    },

    {
      id: 2,
      name: "Alabaster Blossom",
      image: "/Pillar1.jpeg",
      description: "A lush, spherical arrangement of ivory petals designed to serve as a timeless sculptural centerpiece."
    },

    {
      id: 3,
      name: "Antique Rosewood",
      image: "Pillar2.jpeg",
      description: "A delicate cluster of full-bloom roses captured in a muted pink hue for a romantic, vintage feel."
    },
  ];

  return (

    <div className="bg-gradient-to-b from-[#1a120b] via-[#2c1810] to-black text-white min-h-screen overflow-hidden">

      {/* NAVBAR */}
        <br />
        
        <nav className="flex justify-center items-center px-6 py-8">

          <div className="text-center">

            <h1 className="text-3xl md:text-4xl font-black tracking-[8px] text-amber-200 drop-shadow-lg">
              THE HOUSE OF GLOW
            </h1>

            <p className="text-amber-100 text-sm md:text-lg mt-4 tracking-[4px] uppercase">
              Luxury Candles
            </p>

            <p className="text-amber-300 text-xs md:text-sm mt-2 tracking-[6px] uppercase">
              Nagpur
            </p>

          </div>

        </nav>

      {/* HERO SECTION */}

      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative">

        <div className="absolute w-[500px] h-[500px] bg-amber-500/20 blur-3xl rounded-full"></div>

        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-8xl font-black leading-tight z-10"
        >
          Luxury Candles
          <br />
          Crafted In Nagpur
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-amber-100 max-w-2xl text-lg leading-8 z-10"
        >
          Handcrafted aesthetic candles designed to transform
          your space into a warm luxurious experience.
        </motion.p>

        <motion.a
          whileHover={{ scale: 1.05 }}
          href="https://wa.me/9403230348"
          target="_blank"
          className="mt-10 bg-amber-300 text-black px-8 py-4 rounded-full font-bold z-10"
        >
          Order On WhatsApp
        </motion.a>
        
        
        <motion.a
          whileHover={{ scale: 1.05 }}
          href="https://instagram.com/thehouseofglow.in"
          target="_blank"
          className="mt-10 bg-amber-300 text-black px-8 py-4 rounded-full font-bold z-10"
        >
          Order On Instagram
        </motion.a>

      </section>


      {/* CANDLE SHOWCASE */}

      <section className="px-6 md:px-16 py-24">

        <div className="text-center mb-16">

          <p className="text-amber-300 tracking-[5px] uppercase mb-4">
            Our Collection
          </p>

          <h2 className="text-5xl md:text-6xl font-black">
            Signature Candles
          </h2>

        </div>


        <div className="grid md:grid-cols-3 gap-10">

          {candles.map((candle) => (

            <motion.div
              whileHover={{ y: -10 }}
              key={candle.id}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-[35px] overflow-hidden shadow-2xl"
            >

              <div className="overflow-hidden">

                <img
                  src={candle.image}
                  alt={candle.name}
                  className="h-[450px] w-full object-cover hover:scale-110 transition duration-700"
                />

              </div>

              <div className="p-8">

                <h3 className="text-3xl font-bold text-amber-100">
                  {candle.name}
                </h3>

                <p className="text-gray-300 mt-5 leading-8">
                  {candle.description}
                </p>

                <p className="mt-6 text-amber-300 font-semibold">
                  Available in your choice of color and fragrance.
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </section>


      {/* ABOUT */}

      <section className="px-6 md:px-16 py-24 text-center">

        <p className="text-amber-300 tracking-[5px] uppercase mb-5">
          About The Brand
        </p>

        <h2 className="text-5xl md:text-6xl font-black leading-tight">
          More Than Candles.
          <br />
          It's An Experience.
        </h2>

        <p className="text-gray-300 mt-10 max-w-3xl mx-auto leading-9 text-lg">
          THE HOUSE OF GLOW creates handcrafted luxury candles
          inspired by premium interiors, cozy evenings and elegant lifestyles.
          Every candle is designed to bring warmth, aesthetics and unforgettable fragrance into your space.
        </p>

      </section>


      {/* INSTAGRAM STYLE SECTION */}

      <section className="px-6 md:px-16 py-24">

        <div className="text-center mb-16">

          <p className="text-amber-300 tracking-[5px] uppercase mb-4">
            Aesthetic Glow
          </p>

          <h2 className="text-5xl md:text-6xl font-black">
            Crafted For Modern Spaces
          </h2>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

          <img
            src="/Glass_1.jpeg"
            className="rounded-[25px] h-72 w-full object-cover"
          />

          <img
            src="/Couple.jpeg"
            className="rounded-[25px] h-72 w-full object-cover"
          />

          <img
            src="/Lotus.jpeg"
            className="rounded-[25px] h-72 w-full object-cover"
          />

          <img
            src="/Sun_Moon.jpeg"
            className="rounded-[25px] h-72 w-full object-cover"
          />

        </div>
        <br />
        <br />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

          <img
            src="/Candle1.jpeg"
            className="rounded-[25px] h-72 w-full object-cover"
          />

          <img
            src="/Candle2.jpeg"
            className="rounded-[25px] h-72 w-full object-cover"
          />

          <img
            src="/Candle3.jpeg"
            className="rounded-[25px] h-72 w-full object-cover"
          />

          <img
            src="/Candle11.jpeg"
            className="rounded-[25px] h-72 w-full object-cover"
          />

        </div>

        <br />
        <br />
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

          <img
            src="/Candle5.jpeg"
            className="rounded-[25px] h-72 w-full object-cover"
          />

          <img
            src="/Candle6.jpeg"
            className="rounded-[25px] h-72 w-full object-cover"
          />

          <img
            src="/Candle10.jpeg"
            className="rounded-[25px] h-72 w-full object-cover"
          />

          <img
            src="/Candle8.jpeg"
            className="rounded-[25px] h-72 w-full object-cover"
          />

        </div>

        <br />
        <br />
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

          <img
            src="/Candle9.jpeg"
            className="rounded-[25px] h-72 w-full object-cover"
          />

          <img
            src="/Candle7.jpeg"
            className="rounded-[25px] h-72 w-full object-cover"
          />

          <img
            src="/Candle4.jpeg"
            className="rounded-[25px] h-72 w-full object-cover"
          />

          <img
            src="/Candle12.jpeg"
            className="rounded-[25px] h-72 w-full object-cover"
          />

        </div>
      
      </section>


      {/* CONTACT */}

      <section className="px-6 py-28 text-center">

        <h2 className="text-5xl md:text-7xl font-black leading-tight">
          Let Your
          <br />
          Space Glow
        </h2>

        <p className="mt-8 text-gray-300 text-lg">
          Handmade luxury candles available in Nagpur.
        </p>

        <a
          href="https://wa.me/9403230348"
          target="_blank"
          className="inline-block mt-10 bg-green-500 px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition duration-300"
        >
          Contact On WhatsApp
        </a>
        <br />
        <a
          href="https://instagram.com/thehouseofglow.in"
          target="_blank"
          className="inline-block mt-10 bg-green-500 px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition duration-300"
        >
          Contact On Instagram
        </a>

      </section>

    </div>

  );
}

export default App;