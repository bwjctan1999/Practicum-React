export default function TextField({ type, placeholder }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="p-3 text-sm bg-white w-full border border-opacity-50 rounded-2xl shadow text-black outline-none"
    />
  );
}
