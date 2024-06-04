// frontend/src/App.jsx
import React, { useState } from "react";
import ImageUploader from "./components/ImageUploader";
import CaptionDisplay from "./components/CaptionDisplay";

function App() {
  const [captionData, setCaptionData] = useState({ caption: "", imageUrl: "" });

  const handleCaption = (generatedCaption, imageUrl) => {
    setCaptionData({ caption: generatedCaption, imageUrl });
  };

  return (
    <div className="flex justify-center items-center m-20 flex-col gap-20">
      <div>
        <h1 className="text-6xl font-bold py-3 mb-2 bg-gradient-to-r from-fuchsia-500 to-cyan-500 inline-block text-transparent bg-clip-text">Image Caption Generator</h1>
        <p className="font-semibold text-xl bg-gradient-to-r from-amber-500 to-pink-500 text-transparent bg-clip-text">Unleash the Story Behind Every Image</p>
      </div>
      <div className="flex gap-10">
        <ImageUploader onCaptionGenerated={handleCaption} />
        <CaptionDisplay
          caption={captionData.caption}
          imageUrl={captionData.imageUrl}
        />
      </div>
    </div>
  );
}

export default App;
