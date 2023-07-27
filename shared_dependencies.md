1. Dependencies: 
   - next.js: Used in all files for creating the application.
   - google-spreadsheet: Used in "googleSheets.js" for interacting with Google Sheets.
   - react: Used in all component files for creating the UI.
   - axios: Used in "bets.js" for making HTTP requests.
   - dotenv: Used in ".env.local" for managing environment variables.

2. Exported Variables:
   - BettingForm: Exported from "BettingForm.js", used in "index.js".
   - Fighter: Exported from "Fighter.js", used in "index.js".
   - OddsCalculator: Exported from "OddsCalculator.js", used in "index.js".
   - googleSheets: Exported from "googleSheets.js", used in "bets.js".
   - betting: Exported from "betting.js", used in "bets.js".

3. Data Schemas:
   - Bet: Used in "bets.js" and "BettingForm.js", includes fields for the bettor's name, the fighter they're betting on, and the amount of their bet.

4. ID Names of DOM Elements:
   - bet-form: ID of the form in "BettingForm.js".
   - fighter-nico: ID of Nico's fighter component in "index.js".
   - fighter-oli: ID of Oli's fighter component in "index.js".
   - odds-nico: ID of Nico's odds display in "OddsCalculator.js".
   - odds-oli: ID of Oli's odds display in "OddsCalculator.js".

5. Message Names:
   - BET_SUBMITTED: Used in "BettingForm.js" and "bets.js" to indicate a bet has been submitted.
   - ODDS_UPDATED: Used in "OddsCalculator.js" and "bets.js" to indicate the odds have been updated.

6. Function Names:
   - submitBet: Defined in "BettingForm.js", used to submit a new bet.
   - calculateOdds: Defined in "OddsCalculator.js", used to calculate the current odds.
   - updateSheet: Defined in "googleSheets.js", used to update the Google Sheet with new bets.
   - getBets: Defined in "bets.js", used to retrieve all bets from the Google Sheet.