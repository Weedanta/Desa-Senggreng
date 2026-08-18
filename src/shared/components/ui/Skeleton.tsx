import React from "react";

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export const Skeleton: React.FC<SkeletonProps> = ({ className = "", ...props }) => {
  return (
    <div
      className={`bg-gray-200/80 animate-shimmer rounded-xl ${className}`}
      {...props}
    />
  );
};

export default Skeleton;
