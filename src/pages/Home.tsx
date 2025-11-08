import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import HeroBg from '../assets/LoL_Main_img.png';
import LCKImg from '../assets/LCK/06_2490_R4.png';
import RLImg from '../assets/Rocket League/Gd4AOISW4AAae-C.png';
import ScrollReveal from '../components/shared/ScrollReveal';
import StaggeredContainer from '../components/shared/StaggeredContainer';
import ParallaxSection from '../components/shared/ParallaxSection';
import ValorantTeamImg from '../assets/Valorant/Gen.G_VALORANT_Champions_2024.jpg';
// Partner logos
import Partner1 from '../assets/Partners/4.png';
import Partner2 from '../assets/Partners/9.png';
import Partner3 from '../assets/Partners/DESCENTE_Black_Edit.png';
import Partner4 from '../assets/Partners/GGA_LOGO_BLACK_1.png';
import Partner5 from '../assets/Partners/LG_Ultragear_Black.png';
import Partner6 from '../assets/Partners/LogitechG_Black.png';
import Partner7 from '../assets/Partners/M_Stroke.png';
import Partner8 from '../assets/Partners/SOOP_Black_udate.png';

const Home = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // TODO: Connect to newsletter API
    setTimeout(() => {
      alert('Thank you for subscribing! (This is a demo - backend integration needed)');
      setEmail('');
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="relative">
      {/* Hero Section with Parallax */}
      <div className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <ParallaxSection speed={0.4} className="h-full">
            <div
              className="h-full w-full bg-cover bg-center scale-110"
              style={{ backgroundImage: `url(${HeroBg})` }}
            />
          </ParallaxSection>
        </div>
        {/* Subtle gradient overlay for text readability without hiding the image */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10" />
        <div className="relative z-20 flex items-center justify-center h-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center px-4"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-2xl"
            >
              GEN.G <span className="text-geng-gold">ESPORTS</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-gray-100 mb-8 drop-shadow-lg"
            >
              Excellence in Multiple Esports Titles
            </motion.p>
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#teams" 
              className="inline-block bg-geng-gold text-white px-8 py-3 rounded-md hover:bg-opacity-90 transition-colors shadow-lg"
            >
              Explore Teams
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Featured Teams Section */}
      <section id="teams" className="py-20 bg-black scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-4xl font-bold text-center text-white mb-12">
              Our Teams
            </h2>
          </ScrollReveal>
          <StaggeredContainer>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* LCK */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ duration: 0.3 }}
                className="bg-gray-900 rounded-lg overflow-hidden cursor-pointer group"
              >
                <Link to="/lck" className="block">
                  <div
                    className="h-48 bg-gray-800 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${LCKImg})` }}
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-geng-gold transition-colors">LCK</h3>
                    <p className="text-gray-400">
                      Our legendary League of Legends team competing in the LCK.
                    </p>
                  </div>
                </Link>
              </motion.div>

              {/* Rocket League */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ duration: 0.3 }}
                className="bg-gray-900 rounded-lg overflow-hidden cursor-pointer group"
              >
                <Link to="/rocket-league" className="block">
                  <div
                    className="h-48 bg-gray-800 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${RLImg})`,
                    backgroundPosition: 'center 25%' }}
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-geng-gold transition-colors">Rocket League</h3>
                    <p className="text-gray-400">
                      High-flying action in competitive Rocket League.
                    </p>
                  </div>
                </Link>
              </motion.div>

              {/* VALORANT */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ duration: 0.3 }}
                className="bg-gray-900 rounded-lg overflow-hidden cursor-pointer group"
              >
                <Link to="/valorant" className="block">
                  <div
                    className="h-48 bg-gray-800 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${ValorantTeamImg})` }}
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-geng-gold transition-colors">VALORANT</h3>
                    <p className="text-gray-400">
                      Tactical excellence in VALORANT competition.
                    </p>
                  </div>
                </Link>
              </motion.div>
            </div>
          </StaggeredContainer>
        </div>
      </section>

      {/* Latest Content Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-4xl font-bold text-center text-white mb-12">
              Latest Content
            </h2>
          </ScrollReveal>
          <StaggeredContainer>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              /*{
                title: 'TEAM USA vs THE WORLD (Gen.G Mobil 1 | Rocket League)',
                tag: 'Rocket League',
                link: '#',
                thumbnail: null,
              },*/
              {
                title: 'GEN vs KT | WORLDS 2025 | Semifinals',
                tag: 'LCK',
                link: 'https://www.youtube.com/live/ulwJuev03qA?si=T8wcD6MHRiFffnZo',
                thumbnail: 'https://img.youtube.com/vi/ulwJuev03qA/maxresdefault.jpg',
              },
             /* {
                title: 'Karon meets a big fan while livestreaming (Gen.G Gold | Valorant)',
                tag: 'VALORANT',
                link: '#',
                thumbnail: null,
              },*/
            ].map((item, idx) => {
              // Helper function to extract YouTube video ID from URL
              const getYouTubeThumbnail = (url: string) => {
                if (!url || url === '#') return null;
                const match = url.match(/(?:youtube\.com\/live\/|youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/);
                if (match) {
                  return `https://img.youtube.com/vi/${match[1]}/maxresdefault.jpg`;
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
                    className="h-40 bg-gray-700 bg-cover bg-center"
                    style={thumbnail ? { backgroundImage: `url(${thumbnail})`,
                    backgroundPosition: 'center 25%' } : {}}
                  />
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

      {/* Partners Section */}
      <section className="py-20 bg-[#faf9f7] relative overflow-hidden">
        {/* Decorative background elements similar to Lando Norris site */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-geng-gold/5 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-geng-gold/5 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <h3 className="text-center text-gray-700 text-xs tracking-[0.2em] uppercase mb-16 font-medium">
              Partners
            </h3>
          </ScrollReveal>
        </div>
        
        {/* Infinite scrolling logos - Full width */}
        <div className="overflow-hidden relative w-full">
          <motion.div
            className="flex items-center gap-12 md:gap-16 lg:gap-20"
            animate={{
              x: ['0%', '-50%'], // Move left by 50% (half the width of duplicated set)
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
            style={{ width: 'fit-content' }}
          >
            {/* First set of logos */}
            {[
              { name: 'Partner 1', logo: Partner1 },
              { name: 'Partner 2', logo: Partner2 },
              { name: 'DESCENTE', logo: Partner3 },
              { name: 'GGA', logo: Partner4 },
              { name: 'LG UltraGear', logo: Partner5 },
              { name: 'Logitech G', logo: Partner6 },
              { name: 'Partner 7', logo: Partner7 },
              { name: 'SOOP', logo: Partner8 },
            ].map((partner, idx) => (
              <div
                key={`first-${idx}`}
                className="flex items-center justify-center h-10 md:h-14 flex-shrink-0"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-full w-auto object-contain max-w-[120px]"
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {[
              { name: 'Partner 1', logo: Partner1 },
              { name: 'Partner 2', logo: Partner2 },
              { name: 'DESCENTE', logo: Partner3 },
              { name: 'GGA', logo: Partner4 },
              { name: 'LG UltraGear', logo: Partner5 },
              { name: 'Logitech G', logo: Partner6 },
              { name: 'Partner 7', logo: Partner7 },
              { name: 'SOOP', logo: Partner8 },
            ].map((partner, idx) => (
              <div
                key={`second-${idx}`}
                className="flex items-center justify-center h-10 md:h-14 flex-shrink-0"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-full w-auto object-contain max-w-[120px]"
                />
              </div>
            ))}
          </motion.div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal delay={0.3}>
            <p className="text-center text-gray-600 text-sm mt-16 max-w-2xl mx-auto leading-relaxed">
              Gen.G is proud to collaborate with a range of partners who share our passion for performance across multiple industries.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">Stay connected with Gen.G →</h3>
          <p className="text-gray-300 mb-8">Get the latest news, content, and drops in your inbox.</p>
          <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 justify-center">
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full sm:w-auto flex-1 px-4 py-3 rounded-md bg-black text-white placeholder-gray-500 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-geng-gold"
            />
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;