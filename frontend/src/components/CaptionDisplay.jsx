// frontend/src/components/CaptionDisplay.jsx
import React from "react";

const CaptionDisplay = ({ caption, imageUrl }) => {
  return (
    <div className="flex flex-col gap-10 max-w-[740px]">
      {imageUrl && (
        <img src={imageUrl} alt="Uploaded" style={{ maxWidth: "100%" }} />
      )}
      <div className="flex items-center gap-8">
        <h2 className="text-2xl font-bold text-center bg-gradient-to-r from-slate-300 to-slate-500 text-transparent bg-clip-text">Generated Caption:</h2>
        <p className="capitalize font-semibold">{caption}</p>
      </div>
    </div>
  );
};

export default CaptionDisplay;
