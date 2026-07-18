import json

from sqlalchemy.orm import Session

from . import models, schemas


def create_task(db: Session, task: schemas.TaskCreate):

    completed = {
        "Mon": False,
        "Tue": False,
        "Wed": False,
        "Thu": False,
        "Fri": False,
        "Sat": False,
        "Sun": False,
    }

    db_task = models.Task(
        name=task.name,
        time=task.time,
        repeat_days=",".join(task.repeatDays),
        priority=task.priority,
        notes=task.notes,
        completed=json.dumps(completed),
    )

    db.add(db_task)
    db.commit()
    db.refresh(db_task)

    return {
        "id": db_task.id,
        "name": db_task.name,
        "time": db_task.time,
        "repeatDays": db_task.repeat_days.split(","),
        "priority": db_task.priority,
        "notes": db_task.notes,
        "completed": json.loads(db_task.completed),
    }


def get_tasks(db: Session):

    tasks = db.query(models.Task).all()

    result = []

    for task in tasks:
        result.append(
            {
                "id": task.id,
                "name": task.name,
                "time": task.time,
                "repeatDays": task.repeat_days.split(","),
                "priority": task.priority,
                "notes": task.notes,
                "completed": json.loads(task.completed),
            }
        )

    return result

def update_task(db: Session, task_id: int, task: schemas.TaskCreate):

    db_task = db.query(models.Task).filter(models.Task.id == task_id).first()

    if not db_task:
        return None

    db_task.name = task.name
    db_task.time = task.time
    db_task.repeat_days = ",".join(task.repeatDays)
    db_task.priority = task.priority
    db_task.notes = task.notes

    db.commit()
    db.refresh(db_task)

    return {
        "id": db_task.id,
        "name": db_task.name,
        "time": db_task.time,
        "repeatDays": db_task.repeat_days.split(","),
        "priority": db_task.priority,
        "notes": db_task.notes,
        "completed": json.loads(db_task.completed),
    }

def delete_task(db: Session, task_id: int):

    db_task = db.query(models.Task).filter(models.Task.id == task_id).first()

    if not db_task:
        return None

    db.delete(db_task)
    db.commit()

    return True