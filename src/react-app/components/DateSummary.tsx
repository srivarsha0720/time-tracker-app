import { Clock, TrendingUp } from "lucide-react";

interface DateSummaryProps {
  totalMinutes: number;
}

export default function DateSummary({ totalMinutes }: DateSummaryProps) {
  const totalHours = (totalMinutes / 60).toFixed(1);
  const remainingMinutes = 1440 - totalMinutes;
  const remainingHours = (remainingMinutes / 60).toFixed(1);
  const percentageUsed = ((totalMinutes / 1440) * 100).toFixed(1);

  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-lg p-6 mb-6 text-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Total Time */}
        <div className="flex items-start gap-3">
          <div className="bg-white/20 p-3 rounded-lg">
            <Clock className="w-6 h-6" />
          </div>
          <div>
            <div className="text-sm text-blue-100 mb-1">Total Time Logged</div>
            <div className="text-2xl font-bold">{totalMinutes} min</div>
            <div className="text-sm text-blue-100">({totalHours} hours)</div>
          </div>
        </div>

        {/* Remaining Time */}
        <div className="flex items-start gap-3">
          <div className="bg-white/20 p-3 rounded-lg">
            <TrendingUp className="w-6 h-6" />
          </div>
          <div>
            <div className="text-sm text-blue-100 mb-1">Time Remaining</div>
            <div className="text-2xl font-bold">{remainingMinutes} min</div>
            <div className="text-sm text-blue-100">({remainingHours} hours)</div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="flex flex-col justify-center">
          <div className="text-sm text-blue-100 mb-2">Day Progress</div>
          <div className="bg-white/20 rounded-full h-4 overflow-hidden">
            <div
              className="bg-white h-full rounded-full transition-all duration-300"
              style={{ width: `${percentageUsed}%` }}
            />
          </div>
          <div className="text-sm text-blue-100 mt-1">{percentageUsed}% of 24 hours</div>
        </div>
      </div>
    </div>
  );
}
