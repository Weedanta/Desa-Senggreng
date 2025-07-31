import React from "react";

const page = () => {
  return (
    <div className="h-screen  relative overflow-hidden">
      <div className="text-center space-y-8 px-4 relative z-10 bg-custom flex flex-col items-center justify-center">
        {/* Loading Spinner */}
        <div className="relative">
          <div className="w-20 h-20 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin mx-auto shadow-lg"></div>
          <div
            className="absolute inset-0 w-20 h-20 border-4 border-transparent border-r-secondary-600 rounded-full animate-spin mx-auto"
            style={{ animationDirection: "reverse", animationDuration: "2s" }}
          ></div>
          <div
            className="absolute inset-2 w-16 h-16 border-2 border-transparent border-b-primary-700 rounded-full animate-spin mx-auto"
            style={{ animationDuration: "3s" }}
          ></div>
        </div>

        {/* Main Content */}
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-primary-800 animate-pulse font-poppins">
            Kami Sedang Mempersiapkan Sesuatu yang Menakjubkan
          </h1>
          <p className="text-lg text-white-800 max-w-lg mx-auto leading-relaxed font-poppins">
            Seperti seniman yang sedang menciptakan karya masterpiece, kami
            tengah merancang pengalaman digital yang akan memukau Anda.
            Bersiaplah untuk hal yang luar biasa!
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
