import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Scroll to top when pathname changes
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      // Scroll to specific element by hash (like #roofing)
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100); // slight delay to ensure DOM is loaded
      }
    }
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
