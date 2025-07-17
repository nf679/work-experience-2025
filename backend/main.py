# main.py
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Item(BaseModel):
    name: str
    description: str

@app.get("/")
def read_root():
    return {"message": "Hello from FastAPI!"}

@app.post("/items/")
def create_item(item: Item):
    return {"name": item.name, "description": item.description}
