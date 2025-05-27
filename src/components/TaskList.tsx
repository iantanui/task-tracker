"use client";
import { saveTasks, Task } from "@/utils/TaskUtils";

interface TaskListProps {
  tasks: Task[];
  onTasksChange: (tasks: Task[]) => void;
}

export default function TaskList({ tasks, onTasksChange }: TaskListProps) {

  const toggleComplete = (id: number) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    onTasksChange(updatedTasks);
    saveTasks(updatedTasks);
  };

  const deleteTask = (id: number) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    onTasksChange(updatedTasks);
    saveTasks(updatedTasks);
  };

  const getPriorityColor = (priority: Task["priority"]) => {
    switch (priority) {
      case "Low":
        return "bg-green-100 text-green-800";
      case "Medium":
        return "bg-yellow-100 text-yellow-800";
      case "High":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getCategoryColor = (category: Task["category"]) => {
    switch (category) {
      case "Work":
        return "bg-blue-100 text-blue-800";
      case "Personal":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <ul className="space-y-2 transition-opacity duration-300">
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
            <div className="flex-1">
              <span
                className={`flex-1 text-gray-800 ${
                  task.completed ? "line-through text-gray-500" : ""
                }`}
              >
                {task.title}
              </span>
              <p className="text-xs text-gray-500">{task.createdAt}</p>
            </div>

            <span
              className={`text-xs font-semibold px-2 py-1 rounded-full ${getPriorityColor(
                task.priority
              )}`}
            >
              {task.priority}
            </span>

            <span
              className={`ml-2 text-xs font-semibold px-2 py-1 rounded-full ${getCategoryColor(
                task.category
              )}`}
            >
              {task.category}
            </span>

            <button
              onClick={() => deleteTask(task.id)}
              className="ml-3 text-red-500 hover:text-red-700 transition-colors"
              title="Delete Task"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 7l-1 14H6l-1-14m3-4h8m-4 0V3m0 0a2 2 0 00-2 2h6a2 2 0 00-2-2z"
                />
              </svg>
            </button>
          </li>
        ))
      )}
    </ul>
  );
}
