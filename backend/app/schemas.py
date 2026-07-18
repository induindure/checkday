from pydantic import BaseModel


class TaskCreate(BaseModel):
    name: str
    time: str
    repeatDays: list[str]
    priority: str
    notes: str


class TaskResponse(TaskCreate):
    id: int

    completed: dict[str, bool]

    class Config:
        from_attributes = True