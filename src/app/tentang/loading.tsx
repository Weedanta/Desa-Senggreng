import React from "react";
import Skeleton from "@/shared/components/ui/Skeleton";

export default function TentangLoading() {
  return (
    <div className="w-full min-h-screen bg-custom pt-24 pb-16">
      {/* Hero Skeleton */}
      <div className="w-full h-64 sm:h-80 md:h-96 lg:h-[450px] mb-12 mycontainer">
        <Skeleton className="w-full h-full rounded-3xl" />
      </div>

      {/* Content Skeleton */}
      <div className="mycontainer max-w-4xl mx-auto space-y-6">
        <div className="flex justify-center mb-8">
          <Skeleton className="h-12 w-64 rounded-2xl" />
        </div>
        <Skeleton className="h-6 w-full rounded-lg" />
        <Skeleton className="h-6 w-full rounded-lg" />
        <Skeleton className="h-6 w-5/6 rounded-lg" />
        <div className="py-4" />
        <Skeleton className="h-6 w-full rounded-lg" />
        <Skeleton className="h-6 w-full rounded-lg" />
        <Skeleton className="h-6 w-4/5 rounded-lg" />
      </div>
    </div>
  );
}
