import { useEffect, useState, useCallback } from "react";

export const useScrollAnimations = () => {
  const [scrollY, setScrollY] = useState(0);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollVelocity, setScrollVelocity] = useState(0);
  const [ticking, setTicking] = useState(false);

  const updateScrollAnimations = useCallback(() => {
    // Only run animations on large screens
    if (window.innerWidth > 1400) {
      // Image Parallax Effect
      const moveableImage = document.querySelector(".image__moveable");
      if (moveableImage) {
        const maxTranslateY = 600;
        const scrollDistanceForEffect = 600;
        let parallaxY = (scrollY / scrollDistanceForEffect) * maxTranslateY;
        parallaxY = Math.min(parallaxY, maxTranslateY);

        const velocityFactor = Math.min(Math.abs(scrollVelocity) * 0.5, 30);
        const floatIntensity = 25 + velocityFactor;

        const easedParallax = parallaxY * (1 - Math.exp(-scrollY / 200));

        moveableImage.style.setProperty("--scroll-y", `${easedParallax}px`);
        moveableImage.style.setProperty(
          "--float-intensity",
          `${floatIntensity}px`
        );
      }

      // Text Cross-Fade Effect
      const heroText = document.querySelector(".hero__text");
      const aboutContent = document.querySelector(".about__content");

      if (heroText) {
        const fadeDuration = 500;
        // Hero Text Fade Out
        let heroOpacity = 1 - scrollY / fadeDuration;
        heroText.style.opacity = Math.max(0, heroOpacity);
        // About Content Fade In
        let aboutOpacity = scrollY / fadeDuration;
        aboutContent.style.opacity = Math.min(1, aboutOpacity);
      }
    } else {
      // Reset animations for smaller screens
      resetAnimationStyles();
    }
    setTicking(false);
  }, [scrollY]);

  const resetAnimationStyles = useCallback(() => {
    const moveableImage = document.querySelector(".image__moveable");
    const heroText = document.querySelector(".hero__text");
    const aboutContent = document.querySelector(".about__content");

    if (moveableImage) {
      moveableImage.style.setProperty("--scroll-y", "0px");
      moveableImage.style.setProperty("--float-intensity", "25px");
    }
    if (heroText) {
      heroText.style.opacity = "1";
    }
    if (aboutContent) {
      aboutContent.style.opacity = "1";
    }
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
    }
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
    if (window.innerWidth > 1400) {
      const aboutContent = document.querySelector(".about__content");
      if (aboutContent) {
        aboutContent.style.opacity = "0";
      }
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
