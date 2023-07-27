import React, { useEffect, useState } from 'react';
import BettingForm from '../components/BettingForm';
import Fighter from '../components/Fighter';
import OddsCalculator from '../components/OddsCalculator';
import axios from 'axios';

export default function Home() {
  const [bets, setBets] = useState([]);
  const [odds, setOdds] = useState({ Nico: 0, Oli: 0 });

  useEffect(() => {
    fetchBets();
  }, []);

  const fetchBets = async () => {
    const response = await axios.get('/api/bets');
    setBets(response.data);
  };

  useEffect(() => {
    calculateOdds();
  }, [bets]);

  const calculateOdds = () => {
    let totalBetsNico = 0;
    let totalBetsOli = 0;

    bets.forEach(bet => {
      if (bet.fighter === 'Nico') {
        totalBetsNico += bet.amount;
      } else if (bet.fighter === 'Oli') {
        totalBetsOli += bet.amount;
      }
    });

    const oddsNico = totalBetsNico / (totalBetsNico + totalBetsOli);
    const oddsOli = totalBetsOli / (totalBetsNico + totalBetsOli);

    setOdds({ Nico: oddsNico, Oli: oddsOli });
  };

  return (
    <div>
      <h1>Betting App</h1>
      <BettingForm onNewBet={fetchBets} />
      <div id="fighters">
        <Fighter name="Nico" odds={odds.Nico} />
        <Fighter name="Oli" odds={odds.Oli} />
      </div>
      <OddsCalculator odds={odds} />
    </div>
  );
}