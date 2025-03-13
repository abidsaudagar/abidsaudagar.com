
import { useEffect, useCallback } from "react";

const useCalendlyShortcut = () => {
  const handleKeyPress = useCallback((event) => {
    if (event.key.toLowerCase() === "s") {
      window.location.href = "https://calendly.com/abidsaudagar/free-15-minute-ai-search-consulting"; // Replace with your actual Calendly link
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);
};

const Portfolio = () => {
  useCalendlyShortcut();

  return (
    <div>
      
      
    </div>
  );
};

export default Portfolio;
