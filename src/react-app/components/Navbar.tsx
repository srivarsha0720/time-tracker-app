import { Link, useLocation } from "react-router";
import { useAuth } from "@getmocha/users-service/react";
import { LogOut, Clock } from "lucide-react";

export default function Navbar() {
  const { user, logout } = useAuth();
  const location = useLocation();

  const handleLogout = async () => {
    await logout();
  };

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/tracker" className="flex items-center gap-2 font-bold text-xl text-gray-900 hover:text-blue-600 transition-colors">
            <Clock className="w-6 h-6 text-blue-600" />
            <span>TimeTracker</span>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-6">
            <Link
              to="/tracker"
              className={`font-medium transition-colors ${
                location.pathname === "/tracker"
                  ? "text-blue-600"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Tracker
            </Link>
            <Link
              to="/dashboard"
              className={`font-medium transition-colors ${
                location.pathname === "/dashboard"
                  ? "text-blue-600"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Dashboard
            </Link>

            {/* User Info & Logout */}
            {user && (
              <div className="flex items-center gap-4 pl-4 border-l border-gray-200">
                <div className="hidden md:block text-sm">
                  <div className="text-gray-900 font-medium">{user.google_user_data.name}</div>
                  <div className="text-gray-500 text-xs">{user.email}</div>
                </div>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition-colors"
                  title="Logout"
                >
                  <LogOut className="w-5 h-5" />
                  <span className="hidden md:inline">Logout</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
