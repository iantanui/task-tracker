import TaskList from "@/components/TaskList";

export default function Tasks() {
  return (
    <main className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl text-gray-700 font-bold text-center mb-4">Tasks</h1>
        <TaskList />
      </div>
    </main>
  );
}
