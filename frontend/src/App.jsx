import { useState, useEffect } from "react";
import Header from "./components/sections/header";
import Footer from "./components/sections/footer";
import Main from "./components/sections/body";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    // Check local storage or prefered color scheme
    const savedMode = localStorage.getItem("darkMode");
    return savedMode ? JSON.parse(savedMode) : window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.setAttribute("data-bs-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-bs-theme");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`app-container ${darkMode ? "dark-mode" : "light-mode"}`}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Main darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;