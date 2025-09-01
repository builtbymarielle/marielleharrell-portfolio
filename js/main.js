document.addEventListener("DOMContentLoaded", function () {
  // --- Element Selection ---
  const moveableImage = document.querySelector(".image__moveable");
  const heroText = document.querySelector(".hero__text");
  const aboutContent = document.querySelector(".about__content");

  // --- State Variables ---
  let lastScrollY = window.scrollY;
  let ticking = false;

  // --- Functions ---

  /**
   * Resets all animated elements to their default, non-animated state.
   * This is used for screen sizes where animations are disabled.
   */
  function resetAnimationStyles() {
    if (moveableImage) {
      // Reset the parallax scroll effect.
      moveableImage.style.setProperty("--scroll-y", "0px");
    }
    if (heroText) {
      // Make hero text fully visible.
      heroText.style.opacity = "1";
    }
    if (aboutContent) {
      // Make about content fully visible.
      aboutContent.style.opacity = "1";
    }
  }

  /**
   * Calculates and applies all scroll-based animations.
   */
  function runAnimations() {
    // --- Image Parallax Effect ---
    if (moveableImage) {
      const maxTranslateY = 500;
      const scrollDistanceForEffect = 550;
      let translateY = (lastScrollY / scrollDistanceForEffect) * maxTranslateY;
      translateY = Math.min(translateY, maxTranslateY);
      moveableImage.style.setProperty("--scroll-y", `${translateY}px`);
    }

    // --- Text Cross-Fade Effect ---
    if (heroText && aboutContent) {
      const fadeDuration = 500;
      // Hero Text Fade Out
      let heroOpacity = 1 - lastScrollY / fadeDuration;
      heroText.style.opacity = Math.max(0, heroOpacity);
      // About Content Fade In
      let aboutOpacity = lastScrollY / fadeDuration;
      aboutContent.style.opacity = Math.min(1, aboutOpacity);
    }
  }

  /**
   * The main controller that decides whether to run or reset animations.
   */
  function handleAnimationState() {
    if (window.innerWidth > 1400) {
      runAnimations();
    } else {
      resetAnimationStyles();
    }
    ticking = false;
  }

  // --- Event Listeners ---

  window.addEventListener("scroll", function () {
    // Only bother with animations on large screens.
    if (window.innerWidth > 1400) {
      lastScrollY = window.scrollY;
      if (!ticking) {
        window.requestAnimationFrame(handleAnimationState);
        ticking = true;
      }
    }
  });

  window.addEventListener("resize", function () {
    // On resize, re-evaluate whether to animate or reset.
    handleAnimationState();
  });

  // --- Initial Setup ---
  // Set the correct initial state based on the window size.
  if (window.innerWidth > 1400) {
    if (aboutContent) {
      aboutContent.style.opacity = "0";
    }
  }
  handleAnimationState();
});
