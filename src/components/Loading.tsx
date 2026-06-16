// src/components/Loading.tsx
export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-100">
      <div className="flex justify-center items-center gap-2">
        <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-gray-600">Loading...</p>
      </div>
    </div>
  );
}
