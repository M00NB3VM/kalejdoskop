"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import type { ReactNode } from "react";
import type Statistics from "./types/requests";

interface ProviderValue {
  darkTheme: boolean;
  setDarkTheme: (arg0: boolean) => void;
  statistics: Statistics[];
  fetchStatistics: () => void;
}

interface PropsChildren {
  children: ReactNode;
}

export const StoreContext = createContext<ProviderValue | null>(null);

export function StoreProvider({ children }: PropsChildren) {
  const [darkTheme, setDarkTheme] = useState<boolean>(false);
  const [theme, setTheme] = useState<string>("");

  useEffect(() => {
    const item = JSON.parse(localStorage.getItem("theme") as string) as string;

    if (item === "light") {
      setTheme("light");
    }

    if (item === "dark") {
      setDarkTheme(true);
      setTheme("dark");
      document.querySelector("body")?.classList.add("dark-theme");
    }

    if (!item) {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        localStorage.setItem("theme", JSON.stringify("dark"));
        setTheme("dark");
        setDarkTheme(true);
        document.querySelector("body")?.classList.add("dark-theme");
      } else {
        localStorage.setItem("theme", JSON.stringify("light"));
      }
    }
  }, []);

  useEffect(() => {
    const item = JSON.parse(localStorage.getItem("theme") as string) as string;
    if (theme === "") {
      return;
    }
    if (
      (darkTheme === true && item === "dark") ||
      (darkTheme === false && item === "light")
    ) {
      return;
    } else {
      if (darkTheme === true && item === "light") {
        localStorage.setItem("theme", JSON.stringify("dark"));
        setTheme("dark");
        document.querySelector("body")?.classList.add("dark-theme");
      }

      if (darkTheme === false && item === "dark") {
        localStorage.setItem("theme", JSON.stringify("light"));
        setTheme("light");
        document.querySelector("body")?.classList.remove("dark-theme");
      }
    }
  }, [darkTheme]);

  // Fetch statistics
  const [statistics, setStatistics] = useState<Statistics[]>([]);

  async function fetchStatistics() {
    try {
      const URL = process.env.NEXT_PUBLIC_API_URL;
      const res = await axios.get(`${URL}/statistics`);
      setStatistics(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchStatistics();
  }, []);

  const providerValue = {
    darkTheme: darkTheme,
    setDarkTheme: setDarkTheme,
    statistics: statistics,
    fetchStatistics: fetchStatistics,
  };

  return (
    <StoreContext.Provider value={providerValue}>
      {children}
    </StoreContext.Provider>
  );
}

export function useStoreContext() {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error();
  }
  return context;
}
