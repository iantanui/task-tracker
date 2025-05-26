import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-indigo-600 text-white p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Task Tracker</h1>
        <div className="space-x-4">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/tasks" className="hover:underline">
            Tasks
          </Link>
          <Link href="/tasks/new" className="hover:underline">
            New Task
          </Link>
        </div>
      </div>
    </nav>
  );
}