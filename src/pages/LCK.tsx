import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import LCKHero from '../assets/LCK/06_2490_R4.png';
import KiinImg from '../assets/LCK/Kiin_Worlds_2024.jpg';
import CanyonImg from '../assets/LCK/Canyon_Worlds_2024.jpg';
import ChovyImg from '../assets/LCK/Chovy_Worlds_2024.jpg';
import RulerImg from '../assets/LCK/Ruler_LCK_Cup_2025.jpg';
import DuroImg from '../assets/LCK/Duro_LCK_Cup_2025.jpg';
import StaggeredContainer from '../components/shared/StaggeredContainer';
import ParallaxSection from '../components/shared/ParallaxSection';
import SectionDivider from '../components/shared/SectionDivider';
import { lckMatches } from '../data/lckMatches';

const LCK = () => {
  const [expandedMatch, setExpandedMatch] = useState<number | null>(null);
  const [selectedGameTab, setSelectedGameTab] = useState<Record<number, number>>({});

  const toggleMatch = (index: number) => {
    if (expandedMatch === index) {
      setExpandedMatch(null);
    } else {
      setExpandedMatch(index);
      setSelectedGameTab({ ...selectedGameTab, [index]: 0 });
    }
  };

  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section with Parallax */}
      <div className="relative h-[500px] md:h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <ParallaxSection speed={0.3} className="h-full">
            <div
              className="h-full w-full bg-cover bg-center scale-110"
              style={{ 
                backgroundImage: `url(${LCKHero})`,
                backgroundPosition: 'center 35%'
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
                  <p className="text-geng-gold">{player.position}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <SectionDivider size="small">
        ACHIEVEMENTS
      </SectionDivider>

      {/* Achievements Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggeredContainer>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { tournament: 'LCK 2025 Season', placement: '1st Place', date: '2025' },
                { tournament: 'Esports World Cup', placement: '1st Place', date: '2025' },
                { tournament: 'Mid-Season Invitational', placement: '1st Place', date: '2025' },
              ].map((achievement) => (
                <motion.div
                  key={`${achievement.tournament}-${achievement.date}`}
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: { opacity: 1, scale: 1 },
                  }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-geng-gold transition-colors"
                >
                  <h3 className="text-xl font-bold text-white mb-2">{achievement.tournament}</h3>
                  <p className="text-geng-gold text-lg mb-1">{achievement.placement}</p>
                  <p className="text-gray-400 text-sm">{achievement.date}</p>
                </motion.div>
              ))}
            </div>
          </StaggeredContainer>
        </div>
      </section>

      {/* Section Divider */}
      <SectionDivider size="small">
        RECENT RESULTS
      </SectionDivider>

      {/* Recent Results Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggeredContainer>
            <div className="space-y-4">
              {lckMatches.map((match, idx) => {
                const isExpanded = expandedMatch === idx;
                const currentGameTab = selectedGameTab[idx] ?? 0;
                const currentGame = match.games[currentGameTab];

                return (
                  <div key={idx}>
                    <motion.div
                      variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                      }}
                      whileHover={{ x: 5, scale: 1.01 }}
                      transition={{ duration: 0.3 }}
                      onClick={() => toggleMatch(idx)}
                      className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-geng-gold transition-colors cursor-pointer"
                    >
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-white mb-1">{match.tournament}</h3>
                          <p className="text-gray-400 text-sm">{match.date}</p>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="text-right">
                            <p className="text-white font-semibold">vs {match.opponent}</p>
                            <p className="text-gray-400 text-sm">{match.score}</p>
                          </div>
                          <div className={`px-4 py-2 rounded-lg font-bold ${
                            match.result === 'Win' 
                              ? 'bg-green-600/20 text-green-400 border border-green-600/50' 
                              : 'bg-red-600/20 text-red-400 border border-red-600/50'
                          }`}>
                            {match.result}
                          </div>
                          <motion.div
                            animate={{ rotate: isExpanded ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                            className="text-geng-gold"
                          >
                            ▼
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>

                    <AnimatePresence>
                      {isExpanded && currentGame && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="bg-gray-900 rounded-lg mt-2 p-6 border border-gray-700">
                            {/* Game Tabs */}
                            <div className="flex gap-2 mb-6 overflow-x-auto">
                              {match.games.map((game, gameIdx) => {
                                const isGenGWinner = game.winner === 'GEN';
                                const isActive = currentGameTab === gameIdx;
                                
                                return (
                                  <button
                                    key={gameIdx}
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      setSelectedGameTab({ ...selectedGameTab, [idx]: gameIdx });
                                    }}
                                    className={`px-4 py-2 rounded-lg font-semibold transition-colors whitespace-nowrap flex items-center gap-2 ${
                                      isActive
                                        ? isGenGWinner
                                          ? 'bg-geng-gold text-black'
                                          : 'bg-red-500 text-white'
                                        : isGenGWinner
                                          ? 'bg-green-600/20 text-green-400 border border-green-600/50 hover:bg-green-600/30'
                                          : 'bg-red-600/20 text-red-400 border border-red-600/50 hover:bg-red-600/30'
                                    }`}
                                  >
                                    <span>Game {game.gameNumber}</span>
                                    {isGenGWinner ? (
                                      <span className="text-xs">✓ GEN</span>
                                    ) : (
                                      <span className="text-xs">✗ {match.opponent}</span>
                                    )}
                                  </button>
                                );
                              })}
                            </div>

                            {/* Game Details */}
                            <div className="space-y-6">
                              {/* Team Kills Comparison */}
                              <div className="flex items-center justify-between p-4 bg-gray-800 rounded-lg">
                                <div className="text-center">
                                  <p className="text-gray-400 text-sm mb-1">GEN.G</p>
                                  <p className="text-geng-gold text-2xl font-bold">
                                    {currentGame.genGPlayers.reduce((sum, p) => sum + p.kills, 0)}
                                  </p>
                                  <p className="text-gray-500 text-xs mt-1">Total Kills</p>
                                </div>
                                <div className="text-gray-500 text-xl">vs</div>
                                <div className="text-center">
                                  <p className="text-gray-400 text-sm mb-1">{match.opponent}</p>
                                  <p className={`text-2xl font-bold ${
                                    currentGame.opponentPlayers.reduce((sum, p) => sum + p.kills, 0) > 
                                    currentGame.genGPlayers.reduce((sum, p) => sum + p.kills, 0)
                                      ? 'text-red-400'
                                      : 'text-gray-400'
                                  }`}>
                                    {currentGame.opponentPlayers.reduce((sum, p) => sum + p.kills, 0)}
                                  </p>
                                  <p className="text-gray-500 text-xs mt-1">Total Kills</p>
                                </div>
                              </div>

                              {/* Players Grid */}
                              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                {/* GEN.G Players */}
                                <div>
                                  <h4 className="text-geng-gold font-bold text-lg mb-1">GEN.G</h4>
                                  <p className="text-gray-400 text-xs mb-4">Total Gold: {currentGame.genGTotalGold.toLocaleString()}</p>
                                  <div className="space-y-3">
                                    {currentGame.genGPlayers.map((player) => (
                                      <div
                                        key={player.name}
                                        className="bg-gray-800 rounded-lg p-4 flex items-center justify-between"
                                      >
                                        <div className="flex items-center gap-3">
                                          <div className="w-12 h-12 bg-gray-700 rounded flex items-center justify-center text-xs font-bold text-white border border-gray-600">
                                            {player.champion.substring(0, 2).toUpperCase()}
                                          </div>
                                          <div>
                                            <p className="text-white font-semibold">{player.name}</p>
                                            <p className="text-geng-gold text-sm font-medium">{player.champion}</p>
                                            <p className="text-gray-400 text-xs">{player.role}</p>
                                          </div>
                                        </div>
                                        <div className="text-right">
                                          <p className="text-white font-bold">
                                            {player.kills}/{player.deaths}/{player.assists}
                                          </p>
                                          <p className="text-gray-400 text-xs">KDA</p>
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                </div>

                                {/* Opponent Players */}
                                <div>
                                  <h4 className="text-gray-300 font-bold text-lg mb-1">{match.opponent}</h4>
                                  <p className="text-gray-400 text-xs mb-4">Total Gold: {currentGame.opponentTotalGold.toLocaleString()}</p>
                                  <div className="space-y-3">
                                    {currentGame.opponentPlayers.map((player, pIdx) => (
                                      <div
                                        key={pIdx}
                                        className="bg-gray-800 rounded-lg p-4 flex items-center justify-between"
                                      >
                                        <div className="flex items-center gap-3">
                                          <div className="w-12 h-12 bg-gray-700 rounded flex items-center justify-center text-xs font-bold text-white border border-gray-600">
                                            {player.champion.substring(0, 2).toUpperCase()}
                                          </div>
                                          <div>
                                            <p className="text-white font-semibold">{player.name}</p>
                                            <p className="text-gray-300 text-sm font-medium">{player.champion}</p>
                                            <p className="text-gray-400 text-xs">{player.role}</p>
                                          </div>
                                        </div>
                                        <div className="text-right">
                                          <p className="text-white font-bold">
                                            {player.kills}/{player.deaths}/{player.assists}
                                          </p>
                                          <p className="text-gray-400 text-xs">KDA</p>
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </StaggeredContainer>
        </div>
      </section>
    </div>
  );
};

export default LCK;