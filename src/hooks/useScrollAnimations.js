import { useEffect, useState, useCallback } from "react";

export const useScrollAnimations = () => {
  const [scrollY, setScrollY] = useState(0);
  const [ticking, setTicking] = useState(false);

  const updateScrollAnimations = useCallback(() => {
    // Only run animations on large screens
    if (window.innerWidth > 1400) {
      const heroText = document.querySelector(".hero__text");
      const moveableImage = document.querySelector(".image__moveable");
      const aboutContent = document.querySelector(".about__content");

      if (heroText && aboutContent && moveableImage) {
        const fadeStart = 100;
        const fadeEnd = 500;
        const scrollRange = fadeEnd - fadeStart;
        const scrollProgress = Math.max(
          0,
          Math.min(1, (scrollY - fadeStart) / scrollRange)
        );

        // 1. Hero text floats up and fades out
        const heroOpacity = 1 - scrollProgress;
        const heroTranslateY = -scrollProgress * 100; // Move up by 100px
        heroText.style.opacity = heroOpacity;
        heroText.style.transform = `translateY(${heroTranslateY}px)`;

        // 2. About content fades in
        aboutContent.style.opacity = scrollProgress;

        // 3. Image parallax stops gracefully
        const imageParallax = Math.min(scrollY * 0.8, 650); // Slower parallax, capped at 200px
        moveableImage.style.setProperty("--scroll-y", `${imageParallax}px`);
      }
    } else {
      // Reset animations for smaller screens
      resetAnimationStyles();
    }
    setTicking(false);
  }, [scrollY, ticking]);

  const resetAnimationStyles = useCallback(() => {
    const moveableImage = document.querySelector(".image__moveable");
    const heroText = document.querySelector(".hero__text");
    const aboutContent = document.querySelector(".about__content");

    if (moveableImage) moveableImage.style.setProperty("--scroll-y", "0px");
    if (heroText) {
      heroText.style.opacity = "1";
      heroText.style.transform = "translateY(0px)";
    }
    // On small screens, make all sections visible by default
    if (aboutContent) aboutContent.style.opacity = "1";
  }, []);

  const handleScroll = useCallback(() => {
    if (window.innerWidth > 1400) {
      setScrollY(window.scrollY);
      if (!ticking) {
        requestAnimationFrame(() => {
          updateScrollAnimations();
        });
        setTicking(true);
      }
    } else resetAnimationStyles();
  }, [updateScrollAnimations, ticking]);

  const handleResize = useCallback(() => {
    if (window.innerWidth > 1400) {
      updateScrollAnimations();
    } else {
      resetAnimationStyles();
    }
  }, [updateScrollAnimations, resetAnimationStyles]);

  useEffect(() => {
    // Initial setup
    const aboutContent = document.querySelector(".about__content");
    if (aboutContent && window.innerWidth > 1400) {
      aboutContent.style.opacity = "0";
    }

    updateScrollAnimations();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [handleScroll, handleResize, updateScrollAnimations]);

  return { scrollY };
};
