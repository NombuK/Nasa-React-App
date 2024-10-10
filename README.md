# nasa-react-app

Build a React JS app with NASA API

![Image Example](/public/nasaApi-example.png)

# NASA API Data Display

This project fetches data from NASA's API and displays it on the screen in a user-friendly format. It pulls real-time information and visual data from NASA, allowing users to explore various data sets and get updates directly from the space agency.

## Features

- Fetches data from NASA's public API.
- Displays the fetched data dynamically on the screen.
- User-friendly interface for easy navigation and data exploration.

## Installation

To run this project locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com//NombuK/Nasa-React-App.git
    ```

2. Navigate to the project directory:
    ```bash
    cd Nasa-React-App
    ```

3. Install dependencies (if any):
    ```bash
    npm install
    ```

4. Get your NASA API Key [here](https://api.nasa.gov/) if you don’t have one already.

5. Create a `.env` file to store your API key:
    ```bash
    echo NASA_API_KEY=your-api-key > .env
    ```

6. Run the application:
    ```bash
    npm run dev
    ```

## Usage

Once the application is running, data from NASA's API will be fetched and displayed. The information could range from imagery to mission details, depending on the API you are working with. Ensure you have a stable internet connection to pull real-time data.

### Example API Data Displayed

- NASA's Astronomy Picture of the Day (APOD)
- Mars Rover Photos
- Near-Earth Objects (NEOs)

## Technologies Used

- **NASA API**: For accessing real-time data.
- **JavaScript**: Logic for fetching and displaying data.
- **HTML/CSS**: User interface design.
- **Node.js**: (optional).

