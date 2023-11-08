import { useLocation } from "react-router-dom";
import { useEffect } from "react";

// Used to automatically scroll to the top
const AutoScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, [location.pathname]); // Empty dependency array to fetch articles only once on component mount

  return null;
};

export default AutoScrollToTop;
