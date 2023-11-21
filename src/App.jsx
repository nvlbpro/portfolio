import Router from "./components/Router";
import { useState, useEffect } from "react";
import Loader from "./components/Loader";
function App() {
  const delay = 1;
  const [isLoading, setIsLoading] = useState(true);
  // Page Loader
  useEffect(() => {
    let timer1 = setTimeout(() => setIsLoading(false), delay * 1000);
    return () => {
      clearTimeout(timer1);
    };
  }, []);

  return isLoading ? <Loader /> : <Router />;
}

export default App;
