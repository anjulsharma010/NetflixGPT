import React from "react";
import GptSearchbar from "./GptSearchbar";
import GptMovieSuggestions from "./GptMovieSuggestions";

const GptSearch = () => {
  return (
    <div>
      <div className="absolute -z-20">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/47c2bc92-5a2a-4f33-8f91-4314e9e62ef1/web/IN-en-20240916-TRIFECTA-perspective_72df5d07-cf3f-4530-9afd-8f1d92d7f1a8_large.jpg"
          alt="background"
          className="w-full"
        />
      </div>
      <GptSearchbar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearch;
