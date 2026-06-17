// =============================================
// src/App.tsx
// =============================================
import { Outlet, Link, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <h1 className="text-2xl font-bold text-gray-900">User CRUD</h1>
            <div className="flex gap-6 text-sm">
              <Link
                to="/"
                className={`hover:text-blue-600 ${location.pathname === "/" ? "text-blue-600 font-medium" : "text-gray-600"}`}
              >
                Users
              </Link>
              <Link
                to="/users/new"
                className={`hover:text-blue-600 ${location.pathname === "/users/new" ? "text-blue-600 font-medium" : "text-gray-600"}`}
              >
                New User
              </Link>
              <Link
                to="/form"
                className={`hover:text-blue-600 ${location.pathname === "/form" ? "text-blue-600 font-medium" : "text-gray-600"}`}
              >
                Form
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-8">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
