# 🚗 Car Price Prediction System

A full-stack Machine Learning web application that predicts the resale value of used cars based on vehicle specifications.

Built using:

- React.js (Frontend)
- FastAPI (Backend)
- XGBoost Machine Learning Model
- Scikit-Learn
- Tailwind CSS

---

## 📸 Project Preview

The application allows users to:

✅ Enter vehicle details

✅ Predict resale value instantly

✅ Get real-time price estimates using a trained XGBoost model

---

## ✨ Features

- Modern Responsive UI
- Real-time Predictions
- FastAPI REST API
- XGBoost Regression Model
- Clean Dark Theme Dashboard
- Fully Deployable Architecture
- React + FastAPI Integration

---

## 🧠 Machine Learning Model

### Algorithm Used

- XGBoost Regressor

### Dataset Features

| Feature | Description |
|----------|-------------|
| Year | Manufacturing Year |
| Present_Price | Current Market Price |
| Kms_Driven | Kilometers Driven |
| Fuel_Type | Petrol / Diesel / CNG |
| Seller_Type | Dealer / Individual |
| Transmission | Manual / Automatic |
| Owner | Number of Previous Owners |

---

## 📂 Project Structure

```bash
Car_Price_Prediction
│
├── Backend
│   ├── app
│   │   ├── model
│   │   │   └── car_price_model.pkl
│   │   │
│   │   ├── main.py
│   │   ├── predictor.py
│   │   └── schemas.py
│   │
│   └── requirements.txt
│
├── frontend
│   ├── public
│   │
│   ├── src
│   │   ├── assets
│   │   ├── components
│   │   │   └── PredictionForm.jsx
│   │   │
│   │   ├── pages
│   │   │   └── Dashboard.jsx
│   │   │
│   │   ├── services
│   │   │   └── predictionApi.js
│   │   │
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

## ⚙️ Backend Setup

### Navigate to Backend

```bash
cd Backend
```

### Create Virtual Environment

```bash
python -m venv venv
```

### Activate Environment

Windows:

```bash
venv\Scripts\activate
```

Mac/Linux:

```bash
source venv/bin/activate
```

### Install Dependencies

```bash
pip install -r requirements.txt
```

### Run FastAPI Server

```bash
uvicorn app.main:app --reload
```

Backend URL:

```text
http://127.0.0.1:8000
```

Swagger Documentation:

```text
http://127.0.0.1:8000/docs
```

---

## 🎨 Frontend Setup

### Navigate to Frontend

```bash
cd frontend
```

### Install Packages

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

Frontend URL:

```text
http://localhost:5173
```

---

## 🔌 API Endpoint

### Predict Car Price

**POST**

```http
/api/predict
```

### Sample Request

```json
{
  "Year": 2018,
  "Present_Price": 9.83,
  "Kms_Driven": 2071,
  "Fuel_Type": 1,
  "Seller_Type": 0,
  "Transmission": 0,
  "Owner": 0
}
```

### Sample Response

```json
{
  "predicted_price": 8.73
}
```

---

## 🚀 Deployment

### Frontend

Deploy using:

- Vercel
- Netlify

### Backend

Deploy using:

- Render
- Railway
- Fly.io

---

## 🛠 Tech Stack

### Frontend

- React.js
- Vite
- Tailwind CSS
- Axios

### Backend

- FastAPI
- Pydantic
- Uvicorn

### Machine Learning

- Python
- NumPy
- Pandas
- Scikit-Learn
- XGBoost

---

## 📈 Future Improvements

- User Authentication
- Prediction History
- Vehicle Image Upload
- Price Trend Analytics
- Model Monitoring Dashboard
- Multiple ML Models Comparison


🍴 Fork the repository

🚀 Share it with others
