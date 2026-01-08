export function Textarea({ className = "", ...props }) {
  return (
    <textarea
      {...props}
      className={`w-full px-4 py-2 border border-gray-300 rounded-md 
      focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none ${className}`}
    />
  )
}
