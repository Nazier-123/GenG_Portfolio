import { motion } from 'framer-motion';
import RLHero from '../assets/Rocket League/Gd4AOISW4AAae-C.png';
import ScrollReveal from '../components/shared/ScrollReveal';
import StaggeredContainer from '../components/shared/StaggeredContainer';
import ParallaxSection from '../components/shared/ParallaxSection';
import SectionDivider from '../components/shared/SectionDivider';

const RocketLeague = () => {
  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section with Parallax */}
      <div className="relative h-[500px] md:h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <ParallaxSection speed={0.3} className="h-full">
            <div
              className="h-full w-full bg-cover bg-center scale-110"
              style={{ backgroundImage: `url(${RLHero})`,
              backgroundPosition: 'center 20%' }}
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
              GEN.G <span className="text-geng-gold">ROCKET LEAGUE</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-100 drop-shadow-lg">
              Masters of Aerial Control
            </p>
          </motion.div>
        </div>
      </div>

      {/* Team Roster Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-4xl font-bold text-center text-white mb-12">
              Team Roster
            </h2>
          </ScrollReveal>
          <StaggeredContainer>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: 'MajicBear', role: 'Player' },
                { name: 'jstn.', role: 'Player' },
                { name: 'rise.', role: 'Player' },
              ].map((player) => (
                <motion.div
                  key={player.name}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gray-900 rounded-lg overflow-hidden"
                >
                  <div 
                    className="h-56 bg-gray-800 bg-cover bg-center transition-transform duration-500"
                    style={{ backgroundImage: `url(${RLHero})` }}
                    aria-label={`${player.name} player image`}
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-1">{player.name}</h3>
                    <p className="text-geng-gold">{player.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </StaggeredContainer>
        </div>
      </section>

      {/* Section Divider */}
      <SectionDivider>
        TOURNAMENT HISTORY
      </SectionDivider>

      {/* Achievements Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggeredContainer>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { tournament: 'RLCS 2024', placement: '1st Place', date: '2024' },
                { tournament: 'RLCS Major', placement: '2nd Place', date: '2024' },
                { tournament: 'Regional Championship', placement: '1st Place', date: '2024' },
              ].map((tournament) => (
                <motion.div
                  key={tournament.tournament}
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: { opacity: 1, scale: 1 },
                  }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-geng-gold transition-colors"
                >
                  <h3 className="text-xl font-bold text-white mb-2">{tournament.tournament}</h3>
                  <p className="text-geng-gold text-lg mb-1">{tournament.placement}</p>
                  <p className="text-gray-400 text-sm">{tournament.date}</p>
                </motion.div>
              ))}
            </div>
          </StaggeredContainer>
        </div>
      </section>

      {/* Section Divider */}
      <SectionDivider>
        TEAM HIGHLIGHTS
      </SectionDivider>

      {/* Highlights Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggeredContainer>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: 'Incredible Aerial Goal', description: 'Watch the team execute a perfect aerial play', link: '#' },
                { title: 'Championship Winning Moment', description: 'The moment that secured victory', link: '#' },
              ].map((highlight, idx) => (
                <motion.div
                  key={idx}
                  variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gray-900 rounded-lg overflow-hidden cursor-pointer group"
                >
                  <div 
                    className="h-48 bg-gray-800 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${RLHero})` }}
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-geng-gold transition-colors">
                      {highlight.title}
                    </h3>
                    <p className="text-gray-400 mb-4">{highlight.description}</p>
                    <a 
                      href={highlight.link}
                      className="text-geng-gold hover:underline font-medium inline-flex items-center gap-2 group/link"
                    >
                      Watch Highlight
                      <motion.span
                        initial={{ x: 0 }}
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        →
                      </motion.span>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </StaggeredContainer>
        </div>
      </section>
    </div>
  );
};

export default RocketLeague;