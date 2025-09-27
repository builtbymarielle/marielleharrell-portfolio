import React from "react";
import Projects from "./Projects";
import Hero from "./Hero";
import About from "./About";
import Footer from "../components/Footer";

const ProjectArchives = () => {
  return (
    <>
      <Hero
        title={
          <>
            Hello,Looking for <br /> Something?
          </>
        }
        subtitle={
          <>
            TAKE A LOOK AT <br /> MY HISTORY
          </>
        }
        backgroundImage="./images/hero.png"
        showSocials={false}
        showImage={true}
        backgroundImageCirc="./images/history-me.png"
      />
      <About title="My Project History">
        <p>
          For those interested in seeing my journey from the very beginning,
          I've put together a history of my projects dating back to when I first
          started. Some of these early works may no longer function, but I've
          chosen to keep them here as part of the process I've made over the
          years—from high school, through college, and up to where I am now.
          Each project represents a step in my growth, and together they tell
          the story of how my skills have developed over time. I hope you enjoy.
        </p>
      </About>
      {/* Render the Projects component for the archive page, showing all projects */}
      <Projects isArchivePage={true} />
      <Footer />
    </>
  );
};

export default ProjectArchives;
