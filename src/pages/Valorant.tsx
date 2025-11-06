import { motion } from 'framer-motion';
import ValorantHero from '../assets/Valorant/9_bdcc7313-778c-4da2-8b11-54998b6e999b.png';
import CoachImg from '../assets/Valorant/GENG_Team_Pictures_Coach.png';
import KaronImg from '../assets/Valorant/Karon_GenG_Valorant.png';
import LakiaImg from '../assets/Valorant/Lakia_GenG_Valorant.png';
import MeteorImg from '../assets/Valorant/Meteor_GenG_Valorant.png';
import MunchkinImg from '../assets/Valorant/Munchkin_GenG_Valorant.png';
import T3xtureImg from '../assets/Valorant/t3xture_GenG_Valorant.png';

const Valorant = () => {
  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[500px] md:h-[600px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${ValorantHero})` }}
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
              GEN.G <span className="text-geng-gold">VALORANT</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-100 drop-shadow-lg">
              Tactical Precision in Every Round
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
            {[
              { name: 't3xture', role: 'Duelist', img: T3xtureImg },
              { name: 'Meteor', role: 'Flex', img: MeteorImg },
              { name: 'Munchkin', role: 'IGL', img: MunchkinImg },
              { name: 'Lakia', role: 'Initiator', img: LakiaImg },
              { name: 'Karon', role: 'Controller', img: KaronImg },
              // Coach card as an extra (wraps on small screens)
              { name: 'Coach', role: 'Coach', img: CoachImg },
            ].map((player) => (
              <motion.div
                key={player.name}
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
                  <p className="text-geng-gold">{player.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Results Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            Recent Results
          </h2>
          <div className="space-y-4">
            {/* Add match results here */}
          </div>
        </div>
      </section>

      {/* Tournament Schedule Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            Upcoming Tournaments
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Add tournament cards here */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Valorant;