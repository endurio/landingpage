import React from "react";
import Header from "./components/Header";
import UniverBackground from "./components/Background";
import HomeContent from "./components/HomeContent";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="relative flex w-full">
      <UniverBackground />
      <Header />
      <HomeContent />
      <Footer />
    </div>
  );
};

export default App;
