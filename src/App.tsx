import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from '../src/pages/Home';
import LCK from '../src/pages/LCK';
import RocketLeague from '../src/pages/RocketLeague';
import Valorant from '../src/pages/Valorant';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lck" element={<LCK />} />
          <Route path="/rocket-league" element={<RocketLeague />} />
          <Route path="/valorant" element={<Valorant />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
