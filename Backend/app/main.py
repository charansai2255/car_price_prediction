from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.schemas import CarInput
from app.predictor import predict_price

app = FastAPI(
    title="Car Price Prediction API",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {"message": "Car Price Prediction API Running"}

@app.post("/predict")
def predict(data: CarInput):
    result = predict_price(data)
    return {"predicted_price": result}