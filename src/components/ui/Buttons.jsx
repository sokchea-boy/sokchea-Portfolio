export function Button({ children, onClick, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 bg-blue-500 text-white font-semibold rounded-xl hover:bg-gray-500 transition ${className}`}
    >
      {children}
    </button>
  );
}
