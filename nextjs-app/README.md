# Next.js Betting App

This is a Next.js application where people can place bets on two fighters, Nico and Oli. The bets are stored in a Google Sheets file and the betting odds are calculated live depending on the bets that were made for each participant. All bets are made in CHF.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Environment Variables

You need to set up your `.env.local` file with your Google Sheets API credentials:

```bash
GOOGLE_SERVICE_ACCOUNT_EMAIL=your-service-account-email
GOOGLE_PRIVATE_KEY=your-private-key
SPREADSHEET_ID=your-spreadsheet-id
```

## Components

- `BettingForm.js`: This component contains the form for placing a bet.
- `Fighter.js`: This component displays information about a fighter.
- `OddsCalculator.js`: This component calculates and displays the current betting odds.

## API Routes

- `bets.js`: This API route handles the retrieval and submission of bets.

## Utilities

- `googleSheets.js`: This utility interacts with the Google Sheets API.
- `betting.js`: This utility contains functions related to betting calculations.

## Styles

- `globals.css`: Global styles for the application.
- `Home.module.css`: Styles for the home page.

## Public Assets

- `favicon.ico`: The favicon for the application.
- `vercel.svg`: The Vercel logo (used in the default Next.js template).

## Configuration

- `next.config.js`: Configuration for the Next.js application.

## Dependencies

This project uses the following dependencies:

- `next.js`: For creating the application.
- `google-spreadsheet`: For interacting with Google Sheets.
- `react`: For creating the UI.
- `axios`: For making HTTP requests.
- `dotenv`: For managing environment variables.

## License

This project is open source and available under the [MIT License](LICENSE).