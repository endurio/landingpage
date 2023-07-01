import React, { useState, useEffect, useRef, useCallback } from "react";
import { ScrollSVG } from "../icons";
import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";

function shouldShowScroll() {
  return (
    typeof window !== "undefined" &&
    window.innerHeight <= 1024 &&
    window.scrollY <= 150
  );
}

const UniverBackground = (props) => {
  const [showScroll, setShowScroll] = useState(shouldShowScroll());

  const onScroll = useCallback((event) => {
    setShowScroll(shouldShowScroll());
  }, []);

  const particlesInit = useCallback(async (engine) => {
    // console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    // await console.log(container);
  }, []);

  useEffect(() => {
    //add eventlistener to window
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", onScroll);
    }
    // remove event on unmount to prevent a memory leak with the cleanup
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [onScroll]);
  return (
    <div
      id="particle-background"
      className={`background-univer fixed flex justify-center items-center w-full h-full -z-10`}
    >
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          particles: {
            number: {
              value: 160,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: "#ffffff",
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#000000",
              },
              polygon: {
                nb_sides: 5,
              },
              image: {
                src: "img/github.svg",
                width: 100,
                height: 100,
              },
            },
            opacity: {
              value: 0.5,
              random: true,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 1.5,
              random: true,
              anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false,
              },
            },
            line_linked: {
              enable: false,
              distance: 150,
              color: "#ffffff",
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 2,
              direction: "top",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            detect_on: "window",
            events: {
              onhover: {
                enable: true,
                mode: "bubble",
              },
              onclick: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 200,
                size: 3,
                duration: 4,
                opacity: 8,
                speed: 1,
              },
              repulse: {
                distance: 200,
                duration: 1,
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
          retina_detect: true,
        }}
        height="100vh"
        width="100vw"
      ></Particles>
      {showScroll && ["", "#", "#home"].includes(props.url) && (
        <div className="absolute flex flex-col justify-center items-center gap-4 w-full bottom-4">
          <ScrollSVG />
        </div>
      )}
    </div>
  );
};

export default UniverBackground;
