import os
import pickle
import numpy as np

BASE_DIR = os.path.dirname(__file__)

MODEL_PATH = os.path.join(
    BASE_DIR,
    "model",
    "car_price_model.pkl"
)

model = pickle.load(open(MODEL_PATH, "rb"))

def predict_price(data):

    features = np.array([[
        data.Year,
        data.Present_Price,
        data.Kms_Driven,
        data.Fuel_Type,
        data.Seller_Type,
        data.Transmission,
        data.Owner
    ]])

    prediction = model.predict(features)

    return float(prediction[0])