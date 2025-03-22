import React from "react";

const Fliip = () => {
  return (
    <div className="relative py-16 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">
          Notre Horaire
        </h2>

        {/* Mobile Schedule */}
        <div className="sm:hidden relative rounded-xl overflow-hidden shadow-2xl border border-gray-800">
          <iframe
            src="https://equipeonexone.fliipapp.com/api/web_integration/index/14bfa6bb14875e45bba028a21ed38046"
            frameBorder="0"
            allowFullScreen
            className="w-full h-[1800px]"
          />
          <div className="absolute inset-0 pointer-events-none border-4 border-orange-500/10 rounded-xl" />
        </div>

        {/* Desktop Schedule */}
        <div className="hidden sm:block relative rounded-2xl overflow-hidden shadow-2xl border border-gray-800 mx-auto max-w-5xl">
          <iframe
            src="https://equipeonexone.fliipapp.com/horaire/14bfa6bb14875e45bba028a21ed38046/DefaultRoom"
            frameBorder="0"
            allowFullScreen
            className="w-full h-[800px] lg:h-[1000px]"
          />
          <div className="absolute inset-0 pointer-events-none border-4 border-orange-500/10 rounded-2xl" />
        </div>

        {/* Watermark Overlay */}
        <div className="absolute inset-x-0 bottom-8 flex justify-center">
          <span className="text-sm text-gray-500/50">Powered by Fliip App</span>
        </div>
      </div>
    </div>
  );
};

export default Fliip;
