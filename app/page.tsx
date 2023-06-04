import React from "react";
import Header from "./components/Header";
import UniverBackground from "./components/Background";
import HomeContent from "./components/HomeContent";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="relative w-full min-h-[4384px]">
      <UniverBackground />
      <Header />
      <HomeContent />
      <Footer />
    </div>
  );
};

export default App;
