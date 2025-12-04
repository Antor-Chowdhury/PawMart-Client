import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#fff7f4]">
      <div className="flex flex-col items-center gap-3">
        {/* Spinner */}
        <span className="loading loading-spinner loading-lg text-[#d5b60a]"></span>

        {/* Text */}
        <p className="text-[#ff8c00] text-lg font-semibold animate-pulse">
          Loading...
        </p>
      </div>
    </div>
  );
};

export default Loading;
