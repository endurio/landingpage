import React from "react";
import Header from "./components/Header";
import UniverBackground from "./components/Background";
import HomeContent from "./components/HomeContent";

const App = () => {
  return (
    <div className="relative bg-[#0E0C15] w-full h-full">
      <UniverBackground />
      <Header />
      <HomeContent />
    </div>
  );
};

export default App;
