import React, { useState } from 'react';
import axios from 'axios';

const BettingForm = () => {
  const [name, setName] = useState('');
  const [fighter, setFighter] = useState('');
  const [amount, setAmount] = useState('');

  const submitBet = async (e) => {
    e.preventDefault();

    const bet = {
      name,
      fighter,
      amount: parseFloat(amount),
    };

    try {
      await axios.post('/api/bets', bet);
      setName('');
      setFighter('');
      setAmount('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form id="bet-form" onSubmit={submitBet}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </label>
      <label>
        Fighter:
        <select value={fighter} onChange={(e) => setFighter(e.target.value)} required>
          <option value="">--Please choose an option--</option>
          <option value="Nico">Nico</option>
          <option value="Oli">Oli</option>
        </select>
      </label>
      <label>
        Bet Amount (CHF):
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} required />
      </label>
      <button type="submit">Place Bet</button>
    </form>
  );
};

export default BettingForm;