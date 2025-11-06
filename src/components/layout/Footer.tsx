import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-geng-black text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-geng-gold font-bold text-lg mb-4">About</h3>
            <p className="text-gray-300">
              Gen.G Esports is a global esports organization that competes in a variety of games.
            </p>
          </div>
          <div>
            <h3 className="text-geng-gold font-bold text-lg mb-4">Teams</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/lck" className="text-gray-300 hover:text-geng-gold transition-colors">
                  LCK
                </Link>
              </li>
              <li>
                <Link to="/rocket-league" className="text-gray-300 hover:text-geng-gold transition-colors">
                  Rocket League
                </Link>
              </li>
              <li>
                <Link to="/valorant" className="text-gray-300 hover:text-geng-gold transition-colors">
                  VALORANT
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-geng-gold font-bold text-lg mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a 
                href="https://x.com/GenG" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-geng-gold transition-colors"
                aria-label="Gen.G Twitter"
              >
                Twitter
              </a>
              <a 
                href="https://www.instagram.com/gengesports" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-geng-gold transition-colors"
                aria-label="Gen.G Instagram"
              >
                Instagram
              </a>
              <a 
                href="https://www.youtube.com/@gengesports" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-geng-gold transition-colors"
                aria-label="Gen.G YouTube"
              >
                YouTube
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} Gen.G Esports. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;