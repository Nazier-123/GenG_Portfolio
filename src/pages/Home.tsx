import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import HeroBg from '../assets/LoL_Main_img.png';
import LCKImg from '../assets/LCK/06_2490_R4.png';
import RLImg from '../assets/Rocket League/Gd4AOISW4AAae-C.png';
import ValorantImg from '../assets/Valorant/9_bdcc7313-778c-4da2-8b11-54998b6e999b.png';
import ScrollReveal from '../components/shared/ScrollReveal';
import StaggeredContainer from '../components/shared/StaggeredContainer';
import ParallaxSection from '../components/shared/ParallaxSection';

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
                    style={{ backgroundImage: `url(${ValorantImg})` }}
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

      {/* Partners Strip */}
      <section className="py-10 bg-black/80 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-center text-gray-400 text-sm tracking-widest mb-6">Gen.G Partners</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center opacity-80">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-10 bg-gray-800 rounded" />
            ))}
          </div>
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