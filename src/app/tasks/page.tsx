"use client";

import TaskList from "@/components/TaskList";
import { loadTasks, Task } from "@/utils/TaskUtils";
import { useEffect, useState } from "react";

export default function Tasks() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<"All" | "Work" | "Personal">("All");

  useEffect(() => {
    setTasks(loadTasks());
  }, []);

  const handleTasksChange = (updatedTasks: Task[]) => {
    setTasks(updatedTasks);
  };

  const filteredTasks = tasks.filter((task) =>
    filter === "All" ? true : task.category === filter
  );

  return (
    <main className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl text-gray-700 font-bold text-center mb-4">
            Tasks
          </h1>
          <span className="text-gray-600 text-center mb-6">{filteredTasks.length}tasks</span>
        </div>

        <div className="flex space-x-2 mb-4">
          <button
            onClick={() => setFilter("All")}
            className={`px-3 py-1 rounded-md transition-colors ${
              filter === "All"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter("Work")}
            className={`px-3 py-1 rounded-md transition-colors ${
              filter === "Work"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            Work
          </button>
          <button
            onClick={() => setFilter("Personal")}
            className={`px-3 py-1 rounded-md transition-colors ${
              filter === "Personal"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            Personal
          </button>
        </div>
        <TaskList tasks={filteredTasks} onTasksChange={handleTasksChange}/>
      </div>
    </main>
  );
}
