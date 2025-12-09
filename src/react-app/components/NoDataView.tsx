import { useNavigate } from "react-router";
import { Calendar } from "lucide-react";

export default function NoDataView() {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-12">
      <div className="text-center max-w-md mx-auto">
        <div className="text-6xl mb-6">📭</div>
        <h2 className="text-2xl font-bold text-gray-900 mb-3">No data available for this date</h2>
        <p className="text-gray-600 mb-8">
          You haven't logged any activities for this day yet. Start tracking your time to see detailed analytics and insights.
        </p>
        <button
          onClick={() => navigate("/tracker")}
          className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
        >
          <Calendar className="w-5 h-5" />
          Go to Tracker
        </button>
      </div>
    </div>
  );
}
