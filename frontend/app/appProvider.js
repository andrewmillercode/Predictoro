"use client";
import React, { useEffect, createContext, useState,Context } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const apiRoute = 'http://127.0.0.1:5000/';
  
  return (
    <AppContext.Provider value={
        { 
        }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
