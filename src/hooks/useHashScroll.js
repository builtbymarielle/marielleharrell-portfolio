import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useHashScroll = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);

      if (element) {
        // If the element is already present, scroll to it.
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        // If the element is not present yet (due to page transition),
        // use a MutationObserver to wait for it to appear.
        const observer = new MutationObserver((mutations, me) => {
          const targetElement = document.getElementById(id);
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
            me.disconnect(); // Stop observing once the element is found and scrolled to.
          }
        });
        observer.observe(document.body, { childList: true, subtree: true });
      }
    } else {
      // If there's no hash, scroll to the top of the page.
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]); // Rerun effect when the path or hash changes.
};
