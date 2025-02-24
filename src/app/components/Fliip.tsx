import React from "react";

const Fliip = () => {
  return (
    <div className="flex flex-col items-center pt-16">
      <div className="font-bold text-orange-700 relative text-center text-5xl pb-8">
        Notre Horraire.
      </div>
      {/* Mobile iframe */}
      <iframe
        className="sm:hidden"
        src="https://equipeonexone.fliipapp.com/api/web_integration/index/14bfa6bb14875e45bba028a21ed38046"
        frameBorder="0"
        allowFullScreen
        style={{ height: "1700px", width: "100%", border: "none" }}
      />
      {/* Default (larger screen) iframe */}
      <iframe
        className="hidden sm:block"
        src="https://equipeonexone.fliipapp.com/horaire/14bfa6bb14875e45bba028a21ed38046/DefaultRoom"
        frameBorder="0"
        allowFullScreen
        style={{
          height: "1200px",
          width: "80%",
          border: "none",
          background: "black",
        }}
      />
    </div>
  );
};

export default Fliip;
