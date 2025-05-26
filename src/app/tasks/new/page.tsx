"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { saveTasks, Task, loadTasks } from "@/utils/TaskUtils";

export default function NewTask() {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState<Task["priority"]>("medium");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) {
      alert("Task title cannot be empty");
      return;
    }
    const newTask: Task = {
      id: Date.now(),
      title: title.trim(),
      completed: false,
      priority,
    };
    saveTasks([...loadTasks(), newTask]);
    router.push("/tasks");
  };

  return (
    <main className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl text-gray-700 font-bold text-center mb-4">Add New Task</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Task Title
            </label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter task title"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Priority
            </label>
            <select
              id="priority"
              value={priority}
              onChange={(e) => setPriority(e.target.value as Task["priority"])}
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Add Task
          </button>
        </form>
      </div>
    </main>
  );
}
