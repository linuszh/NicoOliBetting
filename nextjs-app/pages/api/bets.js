import { googleSheets } from '../../utils/googleSheets';
import { betting } from '../../utils/betting';
import axios from 'axios';

export default async (req, res) => {
  if (req.method === 'POST') {
    const { name, fighter, amount } = req.body;
    const bet = { name, fighter, amount };

    // Update Google Sheets with the new bet
    await googleSheets.updateSheet(bet);

    // Calculate new odds
    const bets = await googleSheets.getBets();
    const odds = betting.calculateOdds(bets);

    // Notify the frontend to update the odds
    await axios.post('/api/odds', { odds });

    res.status(200).json({ message: 'BET_SUBMITTED' });
  } else {
    // Get all bets
    const bets = await googleSheets.getBets();
    res.status(200).json(bets);
  }
};