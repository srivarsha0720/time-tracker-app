interface StatsCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  bgColor: string;
}

export default function StatsCard({ icon, label, value, bgColor }: StatsCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-600 mb-2">{label}</p>
          <p className="text-3xl font-bold text-gray-900">{value}</p>
        </div>
        <div className={`${bgColor} p-3 rounded-xl`}>
          {icon}
        </div>
      </div>
    </div>
  );
}
