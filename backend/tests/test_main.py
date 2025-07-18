# test_main.py
from fastapi.testclient import TestClient
from backend.main import app

# Create a client to simulate requests to the FastAPI app without running a real server
client = TestClient(app)

# This test checks if the app's main page ("/") works correctly.
def test_read_root():
    # Send a fake GET request to the "/" URL and look at the response.
    response = client.get("/")
    # Make sure the server responded with "200 OK" (which means success).
    assert response.status_code == 200
    # Check if the response content is exactly: {"message": "Hello from FastAPI!"}
    assert response.json() == {"message": "Hello from FastAPI!"}

# This test checks if the "/api/full-GWS-data" page works properly.
def test_full_GWS_data():
    # Send a fake GET request to the GWS data URL and get the response.
    response = client.get("/api/full-GWS-data")
    # Make sure the server responded with "200 OK" (which means success).
    assert response.status_code == 200
    # Get the JSON response (a format we can easily work with)
    data = response.json()
    # Check if the response is a dictionary or list which is the format we are expecting
    assert isinstance(data, dict) or isinstance(data, list)
