"use client";
import { useState, useEffect } from "react";
import { loadTasks, saveTasks, Task } from "@/utils/TaskUtils";

export default function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    setTasks(loadTasks());
  }, []);

  const toggleComplete = (id: number) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
    saveTasks(updatedTasks);
  };

  const getPriorityColor = (priority: Task["priority"]) => {
    switch (priority) {
      case "low":
        return "bg-green-100 text-green-800";
      case "medium":
        return "bg-yellow-100 text-yellow-800";
      case "high":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <ul className="space-y-2">
      {tasks.length === 0 ? (
        <p className="text-gray-500 text-center">No tasks yet. Add one!</p>
      ) : (
        tasks.map((task) => (
          <li
            key={task.id}
            className={`flex items-center p-3 bg-gray-50 rounded-md border border-gray-200 transition-all duration-300 ${
              task.completed ? "opacity-75 scale-95" : "scale-100"
            } hover:bg-gray-100`}
          >
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleComplete(task.id)}
              className="mr-3 h-5 w-5 cursor-pointer"
            />
            <span
              className={`flex-1 text-gray-800 ${
                task.completed ? "line-through text-gray-500" : ""
              }`}
            >
              {task.title}
            </span>
            <span
              className={`text-xs font-semibold px-2 py-1 rounded-full ${getPriorityColor(
                task.priority
              )}`}
            >
              {task.priority}
            </span>
          </li>
        ))
      )}
    </ul>
  );
}
