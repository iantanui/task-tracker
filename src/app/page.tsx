import React from 'react';
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <div className="max-w-md w-full mx-auto p-6 bg-white rounded-lg shadow-md text-center">
        <h1 className="text-2xl text-gray-700 font-bold text-center mb-4">Task Tracker</h1>
        <p className="text-gray-600 text-center mb-6">
          A simple task management app to help you keep track of your tasks.
        </p>
        <Link
          href="/tasks"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-indigo-700 transition text-center block"
        >
          View Tasks
        </Link>
      </div>
    </main>
  );
}
