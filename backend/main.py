# main.py
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pathlib import Path
import json

# Create the FastAPI app — this is the main thing that handles web requests.
app = FastAPI()

# Enable CORS (Cross-Origin Resource Sharing) so that only the website
# running on "http://localhost:3000" can talk to this API.
# This helps keep the app safe by controlling who can access it.
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"], # Allow this URL only
    allow_credentials=True,
    allow_methods=["*"], # Allow all types of HTTP requests (GET, POST, etc)
    allow_headers=["*"], # Allow any headers from the client
)

# This is the root URL ("/") of the app
@app.get("/")
def read_root():
    # When someone visits this URL, it sends back a simple message.
    return {"message": "Hello from FastAPI!"}

# This function reads data from the gws_data JSON file in the data folder.
def load_data():
   # This shows the function where the data can be found.
   data_path = Path("./data/gws_data.json")
   # Load the data into Python so we can send it to users.
   with open(data_path, "r") as f:
      # Read the JSON data and convert it into Python data (dictionary)
      return json.load(f)

# This URL returns the full data loaded from the load_data function
@app.get("/api/full-GWS-data")
def full_GWS_data():
  data = load_data()
  return data