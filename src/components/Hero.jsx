import React, { useEffect, useRef } from "react";
import AnimatedComponent from "./AnimatedComponent";

const Hero = ({
  title,
  subtitle,
  backgroundImage,
  showSocials = false,
  showImage = false,
  backgroundImageCirc,
}) => {
  const moveableImageRef = useRef(null);

  useEffect(() => {
    if (!showImage) return;

    const handleScroll = () => {
      if (moveableImageRef.current && window.innerWidth > 1024) {
        const scrollDistance = window.scrollY * 0.85;
        const maxOffset = 600;
        const cappedOffset = Math.min(scrollDistance, maxOffset);
        moveableImageRef.current.style.transform = `translateY(${cappedOffset}px)`;
      } else if (moveableImageRef.current) {
        moveableImageRef.current.style.transform = `translateY(0px)`;
      }
    };

    const onScroll = () => {
      window.requestAnimationFrame(handleScroll);
    };

    // Run once on mount to set initial state
    handleScroll();

    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onScroll); 
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [showImage]);

  return (
    <section id="hero" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="hero__container container">
        <div className="hero__text">
          <AnimatedComponent>
            <h1>{title}</h1>
          </AnimatedComponent>
          <AnimatedComponent delay={100}>
            <h2>{subtitle}</h2>
          </AnimatedComponent>
          {showSocials && (
            <div className="hero__socials">
              <AnimatedComponent delay={800}>
                <a href="tel:+13174468807" className="hero__socials-holder">
                  <div className="icon-circle">
                    <i className="fa-solid fa-phone"></i>
                  </div>
                  <span className="underline">+1 317-446-8807</span>
                </a>
              </AnimatedComponent>
              <AnimatedComponent delay={900}>
                <a
                  href="mailto:builtbymarielle@gmail.com"
                  className="hero__socials-holder"
                >
                  <div className="icon-circle">
                    <i className="fa-solid fa-envelope"></i>
                  </div>
                  <span className="underline">builtbymarielle@gmail.com</span>
                </a>
              </AnimatedComponent>
              <AnimatedComponent delay={1000}>
                <a
                  href="https://www.google.com/maps/place/Indianapolis,+IN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero__socials-holder"
                >
                  <div className="icon-circle">
                    <i className="fa-solid fa-location-dot"></i>
                  </div>
                  <span className="underline">Indianapolis, IN</span>
                </a>
              </AnimatedComponent>
            </div>
          )}
        </div>
        {showImage && (
          <div
            ref={moveableImageRef}
            className="image__moveable"
            style={{ backgroundImage: `url(${backgroundImageCirc})` }}
          ></div>
        )}
      </div>
    </section>
  );
};

export default Hero;
