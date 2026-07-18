from fastapi import FastAPI
from .database import engine
from . import models
from .routers import tasks

models.Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="CheckDay API",
    version="1.0.0"
)

app.include_router(tasks.router)


@app.get("/")
def root():
    return {
        "message": "Welcome to CheckDay API 🚀"
    }