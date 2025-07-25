# Use the official slim Python image
FROM python:3.11-slim

# Set up the working directory inside the container
WORKDIR /app

# Copy the requirements file and install dependencies
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the backend code into the container
COPY . .

# Command to start the FastAPI server with uvicorn (like we have been doing to run the app)
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
