
# Flight Status Board

## Overview
A React-based TypeScript application that displays real-time flight statuses with detailed flight information.

## Features
- Real-time flight status board
- Periodic data refresh (every 30 seconds)
- Detailed flight view
- Responsive and user-friendly design
- Error handling for API requests

## Technologies Used
- React
- TypeScript
- React Router
- Axios
- CSS

## Prerequisites
- Node.js (v14 or later)
- npm (v6 or later)

## Installation
1. Clone the repository
2. Navigate to the project directory
3. Install dependencies:
   ```
   npm install
   ```

## Running the Application
```
npm start
```
Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

## API
- Flight List: `https://flight-status-mock.core.travelopia.cloud/flights`
- Flight Details: `https://flight-status-mock.core.travelopia.cloud/flights/:id`

## Testing
```
npm test
```

## Build for Production
```
npm run build
```

## Deployment
The application can be deployed to any static hosting platform like Netlify, Vercel, or GitHub Pages.

## License
MIT License

