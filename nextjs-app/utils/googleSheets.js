const { GoogleSpreadsheet } = require('google-spreadsheet');

require('dotenv').config();

const doc = new GoogleSpreadsheet(process.env.SHEET_ID);

const initializeDoc = async () => {
  await doc.useServiceAccountAuth({
    client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY,
  });

  await doc.loadInfo();
};

const getBets = async () => {
  await initializeDoc();

  const sheet = doc.sheetsByIndex[0];
  const rows = await sheet.getRows();

  return rows.map(row => ({
    name: row.name,
    fighter: row.fighter,
    bet: row.bet,
  }));
};

const addBet = async (name, fighter, bet) => {
  await initializeDoc();

  const sheet = doc.sheetsByIndex[0];
  await sheet.addRow({ name, fighter, bet });
};

module.exports = {
  getBets,
  addBet,
};