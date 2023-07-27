import React, { useEffect, useState } from 'react';
import axios from 'axios';

const OddsCalculator = () => {
  const [oddsNico, setOddsNico] = useState(0);
  const [oddsOli, setOddsOli] = useState(0);

  useEffect(() => {
    const fetchOdds = async () => {
      const response = await axios.get('/api/bets');
      const bets = response.data;
      let totalNico = 0;
      let totalOli = 0;

      bets.forEach(bet => {
        if (bet.fighter === 'Nico') {
          totalNico += bet.amount;
        } else if (bet.fighter === 'Oli') {
          totalOli += bet.amount;
        }
      });

      setOddsNico(totalNico / (totalNico + totalOli));
      setOddsOli(totalOli / (totalNico + totalOli));
    };

    fetchOdds();
  }, []);

  return (
    <div>
      <h2>Odds</h2>
      <p id="odds-nico">Nico: {oddsNico}</p>
      <p id="odds-oli">Oli: {oddsOli}</p>
    </div>
  );
};

export default OddsCalculator;