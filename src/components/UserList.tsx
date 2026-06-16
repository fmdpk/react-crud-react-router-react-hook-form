// =============================================
// src/components/UserList.tsx
// =============================================
import { useLoaderData, Link, Form } from "react-router-dom";
import { getUsers } from "../data";

export function UserList() {
  const users = useLoaderData() as Awaited<ReturnType<typeof getUsers>>;

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-semibold">Users</h2>
        <Link
          to="/users/new"
          className="bg-blue-600 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-blue-700 transition"
        >
          + New User
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                Name
              </th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                Email
              </th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                Age
              </th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                Role
              </th>
              <th className="px-6 py-4 text-right text-sm font-medium text-gray-500">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 font-medium">{user.name}</td>
                <td className="px-6 py-4 text-gray-600">{user.email}</td>
                <td className="px-6 py-4 text-gray-600">{user.age}</td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-flex px-3 py-1 text-xs font-medium rounded-full ${
                      user.role === "admin"
                        ? "bg-purple-100 text-purple-700"
                        : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {user.role}
                  </span>
                </td>
                <td className="px-6 py-4 text-right space-x-3">
                  <Link
                    to={`/users/${user.id}`}
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    View
                  </Link>
                  <Link
                    to={`/users/${user.id}/edit`}
                    className="text-amber-600 hover:text-amber-800 font-medium"
                  >
                    Edit
                  </Link>
                  <Form
                    method="post"
                    action={`/users/${user.id}/delete`}
                    className="inline"
                    onSubmit={(e) => {
                      if (!confirm("Delete this user?")) e.preventDefault();
                    }}
                  >
                    <button
                      type="submit"
                      className="text-red-600 hover:text-red-800 font-medium"
                    >
                      Delete
                    </button>
                  </Form>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
