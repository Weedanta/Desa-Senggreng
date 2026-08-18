import React from "react";
import Skeleton from "@/shared/components/ui/Skeleton";

export default function UMKMLoading() {
  return (
    <div className="w-full min-h-screen bg-custom pt-24 pb-16">
      {/* Hero Skeleton */}
      <div className="w-full h-[50vh] sm:h-[60vh] max-h-[600px] mb-12 mycontainer">
        <Skeleton className="w-full h-full rounded-3xl" />
      </div>

      {/* UMKM Cards Skeleton List */}
      <div className="mycontainer space-y-12">
        {[1, 2, 3].map((item, index) => {
          const isOdd = index % 2 === 0;
          return (
            <div
              key={item}
              className="relative w-full mx-auto bg-white/75 rounded-3xl overflow-hidden shadow-lg p-4 md:p-8 lg:p-12 border border-gray-100"
            >
              <div
                className={`flex flex-col lg:flex ${
                  isOdd ? "lg:flex-row" : "lg:flex-row-reverse"
                } items-center gap-8 min-h-[350px]`}
              >
                {/* Image Skeleton */}
                <div className="w-full lg:w-1/2 h-64 md:h-80 lg:h-96">
                  <Skeleton className="w-full h-full rounded-2xl" />
                </div>

                {/* Content Skeleton */}
                <div className="w-full lg:w-1/2 space-y-4">
                  <Skeleton className="h-10 w-3/4 rounded-xl" />
                  <Skeleton className="h-5 w-full rounded-lg" />
                  <Skeleton className="h-5 w-full rounded-lg" />
                  <Skeleton className="h-5 w-4/5 rounded-lg" />
                  <div className="pt-4">
                    <Skeleton className="h-11 w-44 rounded-xl" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
