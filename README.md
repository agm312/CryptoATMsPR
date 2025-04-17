# Puerto Rico Crypto ATM Directory

A comprehensive directory of cryptocurrency ATMs in Puerto Rico, featuring an interactive map and detailed information about each location.

## Features

- Interactive Google Maps integration showing all crypto ATMs in Puerto Rico
- Detailed information for each ATM including:
  - Location address
  - Operating hours
  - Supported cryptocurrencies
  - Contact information
  - Operator website
- Search functionality to filter ATMs by city or operator
- Responsive design for both desktop and mobile devices
- Modal popups for detailed ATM information

## Setup

1. Clone this repository:
```bash
git clone [your-repository-url]
cd puerto-crypto
```

2. Replace the Google Maps API key:
   - Open `index.html`
   - Find the line with `YOUR_API_KEY`
   - Replace it with your actual Google Maps API key

3. Run locally:
   - You can use any local server to run the site
   - For example, using Python's built-in server:
     ```bash
     python -m http.server 8000
     ```
   - Or using Node.js's `http-server`:
     ```bash
     npx http-server
     ```
   - Then open `http://localhost:8000` in your browser

## Deployment to Netlify

1. Push your code to a GitHub repository

2. Log in to [Netlify](https://www.netlify.com/)

3. Click "New site from Git"

4. Choose GitHub and select your repository

5. Configure the build settings:
   - Build command: leave empty (not needed for static site)
   - Publish directory: `/` (root directory)

6. Add your Google Maps API key as an environment variable:
   - Go to Site settings > Build & deploy > Environment
   - Add a new variable named `GOOGLE_MAPS_API_KEY`
   - Set its value to your API key

7. Click "Deploy site"

## Environment Variables

- `GOOGLE_MAPS_API_KEY`: Your Google Maps JavaScript API key

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is licensed under the MIT License - see the LICENSE file for details. 