import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Certifications from "./components/Certifications";
import Products from "./components/Products";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

export default function App() {
  // Persist theme preference in localStorage; default to dark
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved !== null ? saved === "dark" : true;
  });

  // Sync Tailwind dark class to <html> whenever theme changes
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    // Outermost div carries the Tailwind theme transition
    <div className="bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300 min-h-screen">
      <Navbar darkMode={darkMode} toggleTheme={() => setDarkMode((p) => !p)} />
      <main>
        <Hero />
        <About />
        <Certifications />
        <Products />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}
