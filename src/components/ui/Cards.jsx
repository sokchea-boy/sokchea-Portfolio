export function Card({ children, className = "" }) {
  return (
    <div
      className={`bg-white border border-gray-200 rounded-lg shadow p-6 ${className}`}
    >
      {children}
    </div>
  );
}
