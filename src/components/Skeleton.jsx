export default function Skeleton() {
  return (
    <div className="bg-gray-900 p-6 rounded-2xl animate-pulse space-y-4">
      <div className="w-20 h-20 bg-gray-700 rounded-full"></div>
      <div className="h-4 bg-gray-700 w-1/2 rounded"></div>
      <div className="h-4 bg-gray-700 w-1/3 rounded"></div>
      <div className="grid grid-cols-2 gap-3">
        <div className="h-12 bg-gray-700 rounded"></div>
        <div className="h-12 bg-gray-700 rounded"></div>
        <div className="h-12 bg-gray-700 rounded"></div>
        <div className="h-12 bg-gray-700 rounded"></div>
      </div>
    </div>
  );
}
