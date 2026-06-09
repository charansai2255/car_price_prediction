from pydantic import BaseModel

class CarInput(BaseModel):
    Year: int
    Present_Price: float
    Kms_Driven: int
    Fuel_Type: int
    Seller_Type: int
    Transmission: int
    Owner: int