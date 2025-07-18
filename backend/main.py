# main.py
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pathlib import Path
import json

app = FastAPI()

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"message": "Hello from FastAPI!"}

def load_data():
   data_path = Path("./data/gws_data.json")
   with open(data_path, "r") as f:
      return json.load(f)

@app.get("/api/full-GWS-data")
def full_GWS_data():
  data = load_data()
  return data