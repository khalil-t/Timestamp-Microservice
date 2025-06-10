# 📆 Timestamp Microservice

This is a simple **timestamp microservice** built with **Express.js** and a **React frontend**.  
It parses a date string or Unix timestamp and returns a JSON response with:

- Unix time (`unix`)
- UTC time (`utc`)

---

## 🧠 How It Works

The backend handles 3 types of input:

1. **No input (empty)** – returns the current date/time.
2. **Numeric input** – treats it as a Unix timestamp.
3. **String input** – parses it as a date string.

### Example API routes:

```
GET /api/2015-12-25
GET /api/1451001600000
GET /api               ➜ current date/time
```

---

## 🛠 Project Structure

```
project/
├── client/            # React frontend
│   └── App.js
├── server/            # Node.js backend
│   ├── controllers/
│   │   └── dateController.js
│   ├── routes/
│   │   └── dateRoutes.js
│   └── server.js
├── .env
└── README.md
```

---

## 🚀 Getting Started

### 1. Clone the repository:

```bash
git clone https://github.com/your-username/timestamp-microservice.git
cd timestamp-microservice
```

### 2. Install server dependencies:

```bash
cd server
npm install
```

### 3. Start the backend server:

```bash
npm start
# Runs on http://localhost:3000
```

### 4. Start the React frontend:

```bash
cd ../client
npm install
npm start
# Opens on http://localhost:5173 or http://localhost:3001 depending on Vite/React
```

---

## 🧪 Example Response

**Request:**
```
GET /api/2024-01-01
```

**Response:**
```json
{
  "unix": 1704067200000,
  "utc": "Mon, 01 Jan 2024 00:00:00 GMT"
}
```

---

## 📦 Environment Variables

In your `.env` file (in the server directory):

```env
PORT=3000
```

In the client `.env` (optional):

```env
REACT_APP_API_URL=http://localhost:3000/api
```

---

## ✨ License

This project is open-source and free to use.
