from sqlalchemy import Column, Integer, String, Text
from .database import Base


class Task(Base):
    __tablename__ = "tasks"

    id = Column(Integer, primary_key=True, index=True)

    name = Column(String(255), nullable=False)
    time = Column(String(50), nullable=False)

    repeat_days = Column(Text, nullable=False)      # Stored as comma-separated string

    priority = Column(String(20), nullable=False)

    notes = Column(Text, nullable=True)

    completed = Column(Text, nullable=False)         # Stored as JSON string