import React from "react";
import Skeleton from "@/shared/components/ui/Skeleton";

export default function GaleriLoading() {
  return (
    <div className="w-full min-h-screen bg-custom pt-28 pb-16">
      <div className="mycontainer">
        {/* Header Skeleton */}
        <div className="flex flex-col items-center gap-4 mb-12">
          <Skeleton className="h-12 w-64 rounded-2xl" />
          <Skeleton className="h-5 w-96 max-w-full rounded-lg" />
        </div>

        {/* Gallery Grid Skeleton */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {Array.from({ length: 8 }).map((_, i) => (
            <Skeleton
              key={i}
              className={`w-full rounded-2xl ${
                i % 3 === 0 ? "h-72" : i % 2 === 0 ? "h-60" : "h-80"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
