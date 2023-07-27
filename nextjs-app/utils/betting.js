const calculateOdds = (bets) => {
  let totalBets = 0;
  let nicoBets = 0;
  let oliBets = 0;

  bets.forEach(bet => {
    totalBets += bet.amount;
    if (bet.fighter === 'Nico') {
      nicoBets += bet.amount;
    } else if (bet.fighter === 'Oli') {
      oliBets += bet.amount;
    }
  });

  const nicoOdds = totalBets / nicoBets;
  const oliOdds = totalBets / oliBets;

  return {
    nicoOdds: isNaN(nicoOdds) ? 0 : nicoOdds,
    oliOdds: isNaN(oliOdds) ? 0 : oliOdds
  };
};

module.exports = {
  calculateOdds
};