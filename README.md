# Sentiment Analysis App

A full-stack web application that analyzes the sentiment of text input using natural language processing. The application uses TextBlob for sentiment analysis and provides a React-based frontend with an Express backend.

## Features

- Real-time sentiment analysis (positive, negative, neutral)
- Clean and intuitive user interface
- RESTful API for sentiment detection
- MERN stack architecture with Python integration

## Technologies

### Backend
- **Node.js & Express**: Server-side framework
- **Python 3.11+**: Sentiment analysis processing (tested with Python 3.11 and 3.13)
- **TextBlob**: Third-party Python library for natural language processing

### Frontend
- **React**: UI framework
- **Vite**: Build tool and development server
- **Axios**: HTTP client for API requests

## Requirements

- **Python**: 3.11 or higher (tested with 3.11 and 3.13)
- **Node.js**: 14.x or higher
- **npm**: 6.x or higher

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/madhavgoyal2004/Sentiment-Analyzer.git
cd Sentiment-Analyzer
```

### 2. Setup Backend (Server)

```bash
cd server
npm install
```

### 3. Setup Python Environment

Create a virtual environment and install Python dependencies:

```bash
cd server
python -m venv venv

# On Windows
venv\Scripts\activate

# On macOS/Linux
source venv/bin/activate

# Install required Python packages
pip install textblob
python -m textblob.download_corpora
```

### 4. Setup Frontend (Client)

```bash
cd client
npm install
```

## Usage

### Start the Backend Server

```bash
cd server
npm start
```

The server will run on `http://localhost:5000`

### Start the Frontend Development Server

In a separate terminal:

```bash
cd client
npm run dev
```

The client will run on `http://localhost:5173` (or another port if 5173 is in use)

### Using the Application

1. Open your browser and navigate to the frontend URL
2. Enter text in the input field
3. The application will analyze the sentiment and display whether the text is positive, negative, or neutral

## API Endpoints

### POST /api/feedback

Analyzes the sentiment of provided text.

**Request Body:**
```json
{
  "text": "Your text to analyze"
}
```

**Response:**
```json
{
  "sentiment": "positive" | "negative" | "neutral"
}
```

## Project Structure

```
Sentiment-Analyzer/
├── client/                 # React frontend
│   ├── src/
│   ├── public/
│   └── package.json
├── server/                 # Express backend
│   ├── routes/
│   │   └── feedback.js    # API routes
│   ├── analyze.py         # Python sentiment analysis script
│   ├── server.js          # Express server
│   └── package.json
└── README.md
```

## Results

The application provides accurate sentiment analysis for most text inputs, correctly identifying positive, negative, and neutral sentiments. However, like most NLP tools, the accuracy may vary depending on:

- Text complexity and context
- Sarcasm or figurative language
- Network connectivity issues between frontend and backend
- Python environment configuration

## Known Issues

- Occasional errors may occur due to network connectivity issues between the client and server
- TextBlob requires initial corpus download for optimal performance

## License

This project is open source and available under the MIT License.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
