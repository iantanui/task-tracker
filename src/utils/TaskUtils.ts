export interface Task {
  id: number;
  title: string;
  completed: boolean;
  priority?: "low" | "medium" | "high";
}

export const saveTasks = (tasks: Task[]): void => {
  if (typeof window !== "undefined") {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
};

export const loadTasks = (): Task[] => {
  if (typeof window !== "undefined") {
    const tasks = localStorage.getItem("tasks");
    return tasks ? JSON.parse(tasks) : [];
  }
  return [];
};
