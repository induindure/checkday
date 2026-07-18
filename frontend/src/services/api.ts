const BASE_URL = "http://192.168.51.21:8000";

export async function getTasks() {
  const response = await fetch(`${BASE_URL}/tasks/`);

  if (!response.ok) {
    throw new Error("Failed to fetch tasks");
  }

  return response.json();
}

export async function createTask(task: {
  name: string;
  time: string;
  repeatDays: string[];
  priority: string;
  notes: string;
}) {
  const response = await fetch(`${BASE_URL}/tasks/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });

  if (!response.ok) {
    throw new Error("Failed to create task");
  }

  return response.json();
}

export async function updateTask(id: number, task: any) {
  const response = await fetch(`${BASE_URL}/tasks/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });

  if (!response.ok) {
    throw new Error("Failed to update task");
  }

  return response.json();
}


export async function deleteTask(id: string | number) {
  const response = await fetch(`${BASE_URL}/tasks/${id}`, {
    method: "DELETE",
  });

  const data = await response.text();

  console.log("DELETE Status:", response.status);
  console.log("DELETE Response:", data);

  if (!response.ok) {
    throw new Error(data);
  }

  return data;
}