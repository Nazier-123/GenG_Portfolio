import { motion } from 'framer-motion';
import CoachImg from '../assets/Valorant/GENG_Team_Pictures_Coach.png';
import KaronImg from '../assets/Valorant/Karon_GenG_Valorant.png';
import LakiaImg from '../assets/Valorant/Lakia_GenG_Valorant.png';
import MeteorImg from '../assets/Valorant/Meteor_GenG_Valorant.png';
import MunchkinImg from '../assets/Valorant/Munchkin_GenG_Valorant.png';
import T3xtureImg from '../assets/Valorant/t3xture_GenG_Valorant.png';
import ValorantTeamImg from '../assets/Valorant/Valorant_GenG_VCTPacificStage2Champions.jpg';
import ScrollReveal from '../components/shared/ScrollReveal';
import StaggeredContainer from '../components/shared/StaggeredContainer';
import ParallaxSection from '../components/shared/ParallaxSection';
import SectionDivider from '../components/shared/SectionDivider';

const Valorant = () => {
  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section with Parallax */}
      <div className="relative h-[500px] md:h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <ParallaxSection speed={0.3} className="h-full">
            <div
              className="h-full w-full bg-cover bg-center scale-110"
              style={{ 
                backgroundImage: `url(${ValorantTeamImg})`,
                backgroundPosition: 'center 0%'
              }}
            />
          </ParallaxSection>
        </div>
        {/* Subtle gradient overlay only at the bottom for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10" />
        <div className="relative z-20 flex items-center justify-center h-full">
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
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
                className="bg-gray-900 rounded-lg overflow-hidden"
              >
                <div className="h-56 bg-gray-800">
                  <img
                    src={player.img}
                    alt={player.name}
                    loading="lazy"
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

      {/* Section Divider */}
      <SectionDivider size="small">
        RECENT RESULTS
      </SectionDivider>

      {/* Recent Results Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="space-y-4">
              {/* Add match results here */}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Section Divider */}
      <SectionDivider size="small">
        UPCOMING TOURNAMENTS
      </SectionDivider>

      {/* Tournament Schedule Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggeredContainer>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Add tournament cards here */}
            </div>
          </StaggeredContainer>
        </div>
      </section>
    </div>
  );
};

export default Valorant;