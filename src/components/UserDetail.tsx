// =============================================
// src/components/UserDetail.tsx
// =============================================
import { useLoaderData, Link } from "react-router-dom";
import type { User } from "../data";

export function UserDetail() {
  const user = useLoaderData<User | null>();

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div className="max-w-lg mx-auto bg-white rounded-2xl shadow p-8">
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-3xl font-bold">{user.name}</h1>
          <p className="text-gray-500 mt-1">{user.email}</p>
        </div>
        <span
          className={`px-4 py-1.5 text-sm font-medium rounded-full ${
            user.role === "admin"
              ? "bg-purple-100 text-purple-700"
              : "bg-blue-100 text-blue-700"
          }`}
        >
          {user.role}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-6 text-sm">
        <div>
          <p className="text-gray-500">Age</p>
          <p className="text-xl font-semibold mt-1">{user.age} years old</p>
        </div>
        <div>
          <p className="text-gray-500">ID</p>
          <p className="font-mono text-gray-600 mt-1">{user.id}</p>
        </div>
      </div>

      <div className="mt-10 flex gap-4">
        <Link
          to={`/users/${user.id}/edit`}
          className="flex-1 bg-amber-600 text-white text-center py-3 rounded-xl font-medium hover:bg-amber-700"
        >
          Edit
        </Link>
        <Link
          to="/"
          className="flex-1 border border-gray-300 text-center py-3 rounded-xl font-medium hover:bg-gray-50"
        >
          Back to List
        </Link>
      </div>
    </div>
  );
}
