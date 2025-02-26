"use client";

export default function Error({ error }: { error: Error; reset: () => void }) {
  return (
    <div className="pt-28 px-8 max-w-screen-xl mx-auto">
      <h1 className="text-3xl font-bold mb-2 text-red-500">Error</h1>
      <p>{error.message}</p>
    </div>
  );
}
