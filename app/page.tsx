import React from "react";

export default function page() {
  return (
    <div className="px-12 min-h-screen">
      {Array.from({ length: 7 }).map((_, i) => (
        <div key={i} className="space-y-2 mb-8">
          <div className="bg-accent h-4 w-full rounded-md border" />
          <div className="bg-accent h-4 w-full rounded-md border" />
          <div className="bg-accent h-4 w-full rounded-md border" />
          <div className="bg-accent h-4 w-1/2 rounded-md border" />
        </div>
      ))}
    </div>
  );
}
