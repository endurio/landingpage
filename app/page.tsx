"use client";
import React, { useState, useCallback, useEffect } from "react";
import Header from "./components/Header";
import UniverBackground from "./components/Background";
import HomeContent from "./components/HomeContent";

const App = () => {
  const [url, setUrl] = useState("");

  return (
    <div className="relative flex w-full h-full">
      <UniverBackground />
      <Header url={url} setUrl={setUrl} />
      <HomeContent url={url} setUrl={setUrl} />
    </div>
  );
};

export default App;
