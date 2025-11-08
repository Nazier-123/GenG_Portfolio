import { motion } from 'framer-motion';
import RLHero from '../assets/Rocket League/Gd4AOISW4AAae-C.png';
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
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            Team Roster
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'MajicBear', role: 'Player' },
              { name: 'jstn.', role: 'Player' },
              { name: 'rise.', role: 'Player' },
            ].map((player) => (
              <motion.div
                key={player.name}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
                className="bg-gray-900 rounded-lg overflow-hidden"
              >
                <div className="h-56 bg-gray-800 overflow-hidden">
                  <img
                    src={RLHero}
                    alt={`${player.name} player image`}
                    loading="lazy"
                    className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
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
        TOURNAMENT HISTORY
      </SectionDivider>

      {/* Achievements Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggeredContainer>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { tournament: 'Esports World Cup', placement: '3rd-4th Place', date: '2024' },
                { tournament: 'RLCS Winter Major', placement: '1st Place', date: '2024' },
                { tournament: 'Birmingham Major: North America Open 3', placement: '1st Place', date: '2025' },
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
      <SectionDivider size="small">
        LATEST CONTENT
      </SectionDivider>

      {/* Content Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggeredContainer>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title:'LISTEN to the NA CHAMPS make RLCS HISTORY',
                  tag: 'Rocket League',
                  link: 'https://youtu.be/rpXb5gqJ6v8?si=d6anTZIIMhUC-zEU',
                  thumbnail: null,
                },
                {
                  title: 'Pro Team Vs The BEST AI Bots: Can they Win?',
                  tag: 'Rocket League',
                  link: 'https://youtu.be/tHfUScQlv7o?si=JXJ_AiMN-QP5Fyge',
                  thumbnail: null,
                },
                {
                  title: 'LISTEN to RLCS PROS try to become Champions in the London Major 2024',
                  tag: 'Rocket League',
                  link: 'https://youtu.be/Y0np6z-i85I?si=RGKsATgoM2i0g-bJ',
                  thumbnail: null,
                },

              ].map((item, idx) => {
                // Helper function to extract YouTube video ID from URL
                const getYouTubeThumbnail = (url: string) => {
                  if (!url || url === '#') return null;
                  // Match various YouTube URL formats
                  const match = url.match(/(?:youtube\.com\/live\/|youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/);
                  if (match && match[1]) {
                    const videoId = match[1];
                    // Use hqdefault as primary since it's more reliable
                    return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
                  }
                  return null;
                };

                const thumbnail = item.thumbnail || getYouTubeThumbnail(item.link);

                return (
                  <motion.div
                    key={idx}
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="bg-gray-800 rounded-lg overflow-hidden flex flex-col"
                  >
                    <div 
                      className="h-40 bg-gray-700 bg-cover bg-center relative overflow-hidden"
                      style={thumbnail ? { backgroundImage: `url(${thumbnail})` } : {}}
                    >
                      {thumbnail && (
                        <img 
                          src={thumbnail} 
                          alt={item.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      )}
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <span className="text-geng-gold text-sm font-semibold mb-2">{item.tag}</span>
                      <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                      <a 
                        href={item.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="mt-auto btn-primary self-start inline-block"
                      >
                        Watch
                      </a>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </StaggeredContainer>
        </div>
      </section>
    </div>
  );
};

export default RocketLeague;