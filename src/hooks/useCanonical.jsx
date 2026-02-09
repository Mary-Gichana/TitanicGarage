import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function useCanonical() {
  const location = useLocation();

  useEffect(() => {
    const canonical = document.querySelector("link[rel='canonical']");
    if (canonical) {
      canonical.href = `https://www.titanicgarage.co.ke/${location.pathname}`;
    }
  }, [location.pathname]);
}

export default useCanonical;
