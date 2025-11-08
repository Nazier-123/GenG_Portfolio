interface GamePlayer {
  name: string;
  role: string;
  champion: string;
  kills: number;
  deaths: number;
  assists: number;
}

interface Game {
  gameNumber: number;
  winner: 'GEN' | string;
  genGPlayers: GamePlayer[];
  opponentPlayers: GamePlayer[];
  genGTotalGold: number;
  opponentTotalGold: number;
}

export interface MatchData {
  opponent: string;
  result: 'Win' | 'Loss';
  score: string;
  tournament: string;
  date: string;
  games: Game[];
}

export const lckMatches: MatchData[] = [
  {
    opponent: 'KT',
    result: 'Loss',
    score: '1-3',
    tournament: '2025 World Championship',
    date: 'November 1, 2025',
    games: [
      {
        gameNumber: 1,
        winner: 'KT',
        genGPlayers: [
          { name: 'Kiin', role: 'Top', champion: 'Sion', kills: 3, deaths: 4, assists: 8 },
          { name: 'Canyon', role: 'Jungle', champion: 'Vi', kills: 4, deaths: 2, assists: 6 },
          { name: 'Chovy', role: 'Mid', champion: 'Taliyah', kills: 6, deaths: 4, assists: 8 },
          { name: 'Ruler', role: 'Bot', champion: 'Corki', kills: 6, deaths: 3, assists: 11 },
          { name: 'Duro', role: 'Support', champion: 'Rakan', kills: 0, deaths: 5, assists: 14 },
        ],
        opponentPlayers: [
          { name: 'PerfecT', role: 'Top', champion: 'Rumble', kills: 1, deaths: 3, assists: 14 },
          { name: 'Cuzz', role: 'Jungle', champion: 'Jarvan IV', kills: 1, deaths: 5, assists: 14 },
          { name: 'Bdd', role: 'Mid', champion: 'Yone', kills: 8, deaths: 2, assists: 6 },
          { name: 'deokdam', role: 'Bot', champion: 'Caitlyn', kills: 8, deaths: 3, assists: 5 },
          { name: 'Peter', role: 'Support', champion: 'Neeko', kills: 0, deaths: 6, assists: 13 },
        ],
        genGTotalGold: 82200,
        opponentTotalGold: 86400,
      },
      {
        gameNumber: 2,
        winner: 'GEN',
        genGPlayers: [
          { name: 'Kiin', role: 'Top', champion: 'Ambessa', kills: 4, deaths: 0, assists: 5 },
          { name: 'Canyon', role: 'Jungle', champion: 'Xin Zhao', kills: 3, deaths: 3, assists: 16 },
          { name: 'Chovy', role: 'Mid', champion: 'Galio', kills: 4, deaths: 3, assists: 15 },
          { name: 'Ruler', role: 'Bot', champion: 'Ezreal', kills: 14, deaths: 3, assists: 6 },
          { name: 'Duro', role: 'Support', champion: 'Nautilus', kills: 0, deaths: 6, assists: 18 },
        ],
        opponentPlayers: [
          { name: 'PerfecT', role: 'Top', champion: 'Rek\'Sai', kills: 2, deaths: 2, assists: 2 },
          { name: 'Cuzz', role: 'Jungle', champion: 'Qiyana', kills: 6, deaths: 6, assists: 3 },
          { name: 'Bdd', role: 'Mid', champion: 'Ryze', kills: 3, deaths: 5, assists: 6 },
          { name: 'deokdam', role: 'Bot', champion: 'Varus', kills: 4, deaths: 3, assists: 11 },
          { name: 'Peter', role: 'Support', champion: 'Alistar', kills: 0, deaths: 9, assists: 13 },
        ],
        genGTotalGold: 81200,
        opponentTotalGold: 69800,
      },
      {
        gameNumber: 3,
        winner: 'KT',
        genGPlayers: [
          { name: 'Kiin', role: 'Top', champion: 'Aatrox', kills: 0, deaths: 3, assists: 0 },
          { name: 'Canyon', role: 'Jungle', champion: 'Pantheon', kills: 0, deaths: 3, assists: 1 },
          { name: 'Chovy', role: 'Mid', champion: 'Orianna', kills: 2, deaths: 7, assists: 0 },
          { name: 'Ruler', role: 'Bot', champion: 'Sivir', kills: 0, deaths: 2, assists: 0 },
          { name: 'Duro', role: 'Support', champion: 'Leona', kills: 0, deaths: 2, assists: 1 },
        ],
        opponentPlayers: [
          { name: 'PerfecT', role: 'Top', champion: 'KSante', kills: 2, deaths: 0, assists: 6 },
          { name: 'Cuzz', role: 'Jungle', champion: 'Poppy', kills: 2, deaths: 0, assists: 10 },
          { name: 'Bdd', role: 'Mid', champion: 'Azir', kills: 7, deaths: 1, assists: 4 },
          { name: 'deokdam', role: 'Bot', champion: 'Ashe', kills: 6, deaths: 1, assists: 5 },
          { name: 'Peter', role: 'Support', champion: 'Lulu', kills: 0, deaths: 0, assists: 13 },
        ],
        genGTotalGold: 43400,
        opponentTotalGold: 58600,
      },
      {
        gameNumber: 4,
        winner: 'KT',
        genGPlayers: [
          { name: 'Kiin', role: 'Top', champion: 'Yorick', kills: 1, deaths: 4, assists: 0 },
          { name: 'Canyon', role: 'Jungle', champion: 'Skarner', kills: 0, deaths: 4, assists: 1 },
          { name: 'Chovy', role: 'Mid', champion: 'Anivia', kills: 1, deaths: 1, assists: 0 },
          { name: 'Ruler', role: 'Bot', champion: 'Lucian', kills: 0, deaths: 3, assists: 1 },
          { name: 'Duro', role: 'Support', champion: 'Braum', kills: 0, deaths: 4, assists: 1 },
        ],
        opponentPlayers: [
          { name: 'PerfecT', role: 'Top', champion: 'Ornn', kills: 2, deaths: 1, assists: 11 },
          { name: 'Cuzz', role: 'Jungle', champion: 'Dr. Mundo', kills: 2, deaths: 0, assists: 8 },
          { name: 'Bdd', role: 'Mid', champion: 'Cassiopeia', kills: 6, deaths: 1, assists: 8 },
          { name: 'deokdam', role: 'Bot', champion: 'Kalista', kills: 6, deaths: 0, assists: 8 },
          { name: 'Peter', role: 'Support', champion: 'Renata Glasc', kills: 0, deaths: 0, assists: 14 },
        ],
        genGTotalGold: 56000,
        opponentTotalGold: 66800,
      },
    ],
  },
  {
    opponent: 'HLE',
    result: 'Win',
    score: '3-1',
    tournament: '2025 World Championship',
    date: 'October 28, 2025',
    games: [
      {
        gameNumber: 1,
        winner: 'GEN',
        genGPlayers: [
          { name: 'Kiin', role: 'Top', champion: 'Gnar', kills: 5, deaths: 2, assists: 4 },
          { name: 'Canyon', role: 'Jungle', champion: 'Graves', kills: 4, deaths: 1, assists: 6 },
          { name: 'Chovy', role: 'Mid', champion: 'Azir', kills: 6, deaths: 1, assists: 5 },
          { name: 'Ruler', role: 'Bot', champion: 'Jinx', kills: 7, deaths: 2, assists: 4 },
          { name: 'Duro', role: 'Support', champion: 'Thresh', kills: 1, deaths: 1, assists: 11 },
        ],
        opponentPlayers: [
          { name: 'Kiin', role: 'Top', champion: 'Aatrox', kills: 2, deaths: 5, assists: 2 },
          { name: 'Canyon', role: 'Jungle', champion: 'Lee Sin', kills: 3, deaths: 4, assists: 3 },
          { name: 'Chovy', role: 'Mid', champion: 'Syndra', kills: 3, deaths: 6, assists: 1 },
          { name: 'Ruler', role: 'Bot', champion: 'Caitlyn', kills: 4, deaths: 5, assists: 1 },
          { name: 'Duro', role: 'Support', champion: 'Lux', kills: 0, deaths: 4, assists: 5 },
        ],
        genGTotalGold: 68200,
        opponentTotalGold: 54100,
      },
      {
        gameNumber: 2,
        winner: 'HLE',
        genGPlayers: [
          { name: 'Kiin', role: 'Top', champion: 'Camille', kills: 3, deaths: 4, assists: 2 },
          { name: 'Canyon', role: 'Jungle', champion: 'Nidalee', kills: 2, deaths: 5, assists: 3 },
          { name: 'Chovy', role: 'Mid', champion: 'LeBlanc', kills: 4, deaths: 4, assists: 1 },
          { name: 'Ruler', role: 'Bot', champion: 'Varus', kills: 5, deaths: 5, assists: 2 },
          { name: 'Duro', role: 'Support', champion: 'Nami', kills: 1, deaths: 6, assists: 6 },
        ],
        opponentPlayers: [
          { name: 'Kiin', role: 'Top', champion: 'Ornn', kills: 5, deaths: 2, assists: 4 },
          { name: 'Canyon', role: 'Jungle', champion: 'Sejuani', kills: 4, deaths: 2, assists: 6 },
          { name: 'Chovy', role: 'Mid', champion: 'Orianna', kills: 6, deaths: 1, assists: 5 },
          { name: 'Ruler', role: 'Bot', champion: 'Ezreal', kills: 7, deaths: 2, assists: 3 },
          { name: 'Duro', role: 'Support', champion: 'Braum', kills: 2, deaths: 2, assists: 9 },
        ],
        genGTotalGold: 55200,
        opponentTotalGold: 67100,
      },
      {
        gameNumber: 3,
        winner: 'GEN',
        genGPlayers: [
          { name: 'Kiin', role: 'Top', champion: 'Jax', kills: 6, deaths: 1, assists: 4 },
          { name: 'Canyon', role: 'Jungle', champion: 'Vi', kills: 5, deaths: 2, assists: 5 },
          { name: 'Chovy', role: 'Mid', champion: 'Viktor', kills: 7, deaths: 1, assists: 4 },
          { name: 'Ruler', role: 'Bot', champion: 'Kai\'Sa', kills: 8, deaths: 2, assists: 5 },
          { name: 'Duro', role: 'Support', champion: 'Rakan', kills: 2, deaths: 1, assists: 12 },
        ],
        opponentPlayers: [
          { name: 'Kiin', role: 'Top', champion: 'Renekton', kills: 2, deaths: 6, assists: 1 },
          { name: 'Canyon', role: 'Jungle', champion: 'Elise', kills: 3, deaths: 5, assists: 2 },
          { name: 'Chovy', role: 'Mid', champion: 'Zoe', kills: 3, deaths: 7, assists: 1 },
          { name: 'Ruler', role: 'Bot', champion: 'Aphelios', kills: 4, deaths: 6, assists: 1 },
          { name: 'Duro', role: 'Support', champion: 'Yuumi', kills: 0, deaths: 5, assists: 4 },
        ],
        genGTotalGold: 69100,
        opponentTotalGold: 51200,
      },
      {
        gameNumber: 4,
        winner: 'GEN',
        genGPlayers: [
          { name: 'Kiin', role: 'Top', champion: 'Sett', kills: 5, deaths: 2, assists: 3 },
          { name: 'Canyon', role: 'Jungle', champion: 'Hecarim', kills: 4, deaths: 1, assists: 6 },
          { name: 'Chovy', role: 'Mid', champion: 'Corki', kills: 6, deaths: 2, assists: 4 },
          { name: 'Ruler', role: 'Bot', champion: 'Sivir', kills: 7, deaths: 1, assists: 5 },
          { name: 'Duro', role: 'Support', champion: 'Lulu', kills: 1, deaths: 1, assists: 10 },
        ],
        opponentPlayers: [
          { name: 'Kiin', role: 'Top', champion: 'Fiora', kills: 2, deaths: 5, assists: 2 },
          { name: 'Canyon', role: 'Jungle', champion: 'Kindred', kills: 3, deaths: 4, assists: 3 },
          { name: 'Chovy', role: 'Mid', champion: 'Ahri', kills: 3, deaths: 6, assists: 1 },
          { name: 'Ruler', role: 'Bot', champion: 'Zeri', kills: 4, deaths: 5, assists: 1 },
          { name: 'Duro', role: 'Support', champion: 'Karma', kills: 1, deaths: 4, assists: 5 },
        ],
        genGTotalGold: 66400,
        opponentTotalGold: 53800,
      },
    ],
  },
  {
    opponent: 'TES',
    result: 'Win',
    score: '2-0',
    tournament: '2025 World Championship',
    date: 'October 23, 2025',
    games: [
      {
        gameNumber: 1,
        winner: 'GEN',
        genGPlayers: [
          { name: 'Kiin', role: 'Top', champion: 'Gnar', kills: 4, deaths: 1, assists: 5 },
          { name: 'Canyon', role: 'Jungle', champion: 'Graves', kills: 5, deaths: 2, assists: 4 },
          { name: 'Chovy', role: 'Mid', champion: 'Azir', kills: 6, deaths: 1, assists: 6 },
          { name: 'Ruler', role: 'Bot', champion: 'Jinx', kills: 7, deaths: 2, assists: 5 },
          { name: 'Duro', role: 'Support', champion: 'Thresh', kills: 2, deaths: 1, assists: 10 },
        ],
        opponentPlayers: [
          { name: 'Kiin', role: 'Top', champion: 'Aatrox', kills: 2, deaths: 5, assists: 1 },
          { name: 'Canyon', role: 'Jungle', champion: 'Lee Sin', kills: 1, deaths: 6, assists: 2 },
          { name: 'Chovy', role: 'Mid', champion: 'Syndra', kills: 3, deaths: 6, assists: 0 },
          { name: 'Ruler', role: 'Bot', champion: 'Caitlyn', kills: 4, deaths: 5, assists: 1 },
          { name: 'Duro', role: 'Support', champion: 'Lux', kills: 0, deaths: 5, assists: 3 },
        ],
        genGTotalGold: 65200,
        opponentTotalGold: 48900,
      },
      {
        gameNumber: 2,
        winner: 'GEN',
        genGPlayers: [
          { name: 'Kiin', role: 'Top', champion: 'Camille', kills: 5, deaths: 1, assists: 4 },
          { name: 'Canyon', role: 'Jungle', champion: 'Nidalee', kills: 6, deaths: 1, assists: 5 },
          { name: 'Chovy', role: 'Mid', champion: 'LeBlanc', kills: 7, deaths: 0, assists: 4 },
          { name: 'Ruler', role: 'Bot', champion: 'Varus', kills: 8, deaths: 1, assists: 3 },
          { name: 'Duro', role: 'Support', champion: 'Nami', kills: 1, deaths: 1, assists: 11 },
        ],
        opponentPlayers: [
          { name: 'Kiin', role: 'Top', champion: 'Ornn', kills: 1, deaths: 6, assists: 2 },
          { name: 'Canyon', role: 'Jungle', champion: 'Sejuani', kills: 2, deaths: 5, assists: 3 },
          { name: 'Chovy', role: 'Mid', champion: 'Orianna', kills: 2, deaths: 7, assists: 1 },
          { name: 'Ruler', role: 'Bot', champion: 'Ezreal', kills: 3, deaths: 6, assists: 1 },
          { name: 'Duro', role: 'Support', champion: 'Braum', kills: 0, deaths: 5, assists: 4 },
        ],
        genGTotalGold: 68100,
        opponentTotalGold: 45200,
      },
    ],
  },
  {
    opponent: 'T1',
    result: 'Win',
    score: '1-0',
    tournament: '2025 World Championship',
    date: 'October 18, 2025',
    games: [
      {
        gameNumber: 1,
        winner: 'GEN',
        genGPlayers: [
          { name: 'Kiin', role: 'Top', champion: 'Gnar', kills: 5, deaths: 2, assists: 4 },
          { name: 'Canyon', role: 'Jungle', champion: 'Graves', kills: 4, deaths: 1, assists: 6 },
          { name: 'Chovy', role: 'Mid', champion: 'Azir', kills: 6, deaths: 1, assists: 5 },
          { name: 'Ruler', role: 'Bot', champion: 'Jinx', kills: 7, deaths: 2, assists: 4 },
          { name: 'Duro', role: 'Support', champion: 'Thresh', kills: 1, deaths: 1, assists: 11 },
        ],
        opponentPlayers: [
          { name: 'Kiin', role: 'Top', champion: 'Aatrox', kills: 2, deaths: 5, assists: 2 },
          { name: 'Canyon', role: 'Jungle', champion: 'Lee Sin', kills: 3, deaths: 4, assists: 3 },
          { name: 'Chovy', role: 'Mid', champion: 'Syndra', kills: 3, deaths: 6, assists: 1 },
          { name: 'Ruler', role: 'Bot', champion: 'Caitlyn', kills: 4, deaths: 5, assists: 1 },
          { name: 'Duro', role: 'Support', champion: 'Lux', kills: 0, deaths: 4, assists: 5 },
        ],
        genGTotalGold: 68200,
        opponentTotalGold: 54100,
      },
    ],
  },
  {
    opponent: 'AL',
    result: 'Loss',
    score: '0-1',
    tournament: '2025 World Championship',
    date: 'October 16, 2025',
    games: [
      {
        gameNumber: 1,
        winner: 'AL',
        genGPlayers: [
          { name: 'Kiin', role: 'Top', champion: 'Gnar', kills: 2, deaths: 5, assists: 1 },
          { name: 'Canyon', role: 'Jungle', champion: 'Graves', kills: 1, deaths: 6, assists: 2 },
          { name: 'Chovy', role: 'Mid', champion: 'Azir', kills: 3, deaths: 5, assists: 0 },
          { name: 'Ruler', role: 'Bot', champion: 'Jinx', kills: 4, deaths: 6, assists: 1 },
          { name: 'Duro', role: 'Support', champion: 'Thresh', kills: 0, deaths: 7, assists: 3 },
        ],
        opponentPlayers: [
          { name: 'Kiin', role: 'Top', champion: 'Aatrox', kills: 6, deaths: 1, assists: 3 },
          { name: 'Canyon', role: 'Jungle', champion: 'Lee Sin', kills: 5, deaths: 2, assists: 5 },
          { name: 'Chovy', role: 'Mid', champion: 'Syndra', kills: 7, deaths: 2, assists: 4 },
          { name: 'Ruler', role: 'Bot', champion: 'Caitlyn', kills: 8, deaths: 1, assists: 3 },
          { name: 'Duro', role: 'Support', champion: 'Lux', kills: 2, deaths: 2, assists: 9 },
        ],
        genGTotalGold: 45200,
        opponentTotalGold: 69100,
      },
    ],
  },
  {
    opponent: 'PSG',
    result: 'Win',
    score: '1-0',
    tournament: '2025 World Championship',
    date: 'October 15, 2025',
    games: [
      {
        gameNumber: 1,
        winner: 'GEN',
        genGPlayers: [
          { name: 'Kiin', role: 'Top', champion: 'Gnar', kills: 6, deaths: 1, assists: 4 },
          { name: 'Canyon', role: 'Jungle', champion: 'Graves', kills: 5, deaths: 2, assists: 5 },
          { name: 'Chovy', role: 'Mid', champion: 'Azir', kills: 7, deaths: 1, assists: 5 },
          { name: 'Ruler', role: 'Bot', champion: 'Jinx', kills: 8, deaths: 2, assists: 4 },
          { name: 'Duro', role: 'Support', champion: 'Thresh', kills: 2, deaths: 1, assists: 12 },
        ],
        opponentPlayers: [
          { name: 'Kiin', role: 'Top', champion: 'Aatrox', kills: 1, deaths: 6, assists: 1 },
          { name: 'Canyon', role: 'Jungle', champion: 'Lee Sin', kills: 2, deaths: 5, assists: 2 },
          { name: 'Chovy', role: 'Mid', champion: 'Syndra', kills: 2, deaths: 7, assists: 0 },
          { name: 'Ruler', role: 'Bot', champion: 'Caitlyn', kills: 3, deaths: 6, assists: 1 },
          { name: 'Duro', role: 'Support', champion: 'Lux', kills: 0, deaths: 5, assists: 3 },
        ],
        genGTotalGold: 69200,
        opponentTotalGold: 44100,
      },
    ],
  },
];

