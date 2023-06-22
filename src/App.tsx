"use client";
import React, { useState, useCallback, useEffect } from "react";
import Header from "./components/Header";
import UniverBackground from "./components/Background";
import HomeContent from "./components/HomeContent";
import { BrowserRouter as Router } from "react-router-dom";
import './App.css'

const App = () => {
  const [url, setUrl] = useState("");

  return (
    <Router>
      <div className="relative flex w-full h-full bg-black">
        <UniverBackground url={url} />
        <Header url={url} setUrl={setUrl} />
        <HomeContent url={url} setUrl={setUrl} />
      </div>
    </Router>
  );
};

export default App;
