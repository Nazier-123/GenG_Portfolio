import { motion } from 'framer-motion';
import LCKHero from '../assets/LCK/06_2490_R4.png';
import KiinImg from '../assets/LCK/Kiin_Worlds_2024.jpg';
import CanyonImg from '../assets/LCK/Canyon_Worlds_2024.jpg';
import ChovyImg from '../assets/LCK/Chovy_Worlds_2024.jpg';
import RulerImg from '../assets/LCK/Ruler_LCK_Cup_2025.jpg';
import DuroImg from '../assets/LCK/Duro_LCK_Cup_2025.jpg';

const LCK = () => {
  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[500px] md:h-[600px]">
        <div
          className="absolute inset-0 bg-cover"
          style={{ 
            backgroundImage: `url(${LCKHero})`,
            backgroundPosition: 'center 35%'
          }}
        />
        {/* Subtle gradient overlay only at the bottom for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="relative z-10 flex items-center justify-center h-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center px-4"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-2xl">
              GEN.G <span className="text-geng-gold">LCK</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-100 drop-shadow-lg">
              Champions of League of Legends
            </p>
          </motion.div>
        </div>
      </div>

      {/* Team Roster Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            Team Roster
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* LCK roster (updated) */}
            {[
              { position: 'Top', name: 'Kiin', img: KiinImg },
              { position: 'Jungle', name: 'Canyon', img: CanyonImg },
              { position: 'Mid', name: 'Chovy', img: ChovyImg },
              { position: 'Bot', name: 'Ruler', img: RulerImg },
              { position: 'Support', name: 'Duro', img: DuroImg },
            ].map((player) => (
              <motion.div
                key={player.position}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-900 rounded-lg overflow-hidden"
              >
                <div className="h-56 bg-gray-800">
                  <img
                    src={player.img}
                    alt={player.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold text-white mb-1">{player.name}</h3>
                  <p className="text-geng-gold">{player.position}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Add achievement cards here */}
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            Upcoming Matches
          </h2>
          <div className="space-y-4">
            {/* Add match schedule items here */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LCK;