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



def total_heat():
    #Returns a modified version of the json file with the total heat for each bit of data
    data_path = Path("./data/gws_data.json")

    with open(data_path, "r") as f:
      # Read the JSON data and convert it into Python data (dictionary)
      data = json.load(f)
    
    for x in data.values():
        # Cycles through each entry in the data
        totalheat=0
        for y in x["children"].values():
          # Cycles through each entry in the data and takes the values in the children
          totalheat += y["mean_heat"]
        x.update({"total_heat": totalheat})
    return data
    # Returns the original data with an addition of a total heat value for each entry


# This URL returns the full data loaded from the load_data function
@app.get("/api/full-GWS-data")
def full_GWS_data():
  data = load_data()
  return data

#This URL returns the data loaded from the total_heat() function
@app.get("/api/heat-data")
def heat_data():
  data = total_heat()
  return data

#URL returns data loaded from the load_quota function
@app.get("/api/full-GWS-quota")
def full_GWS_quota():
  data = load_quota_data()
  return data
  
#x = @app.get(model)