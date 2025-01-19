import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { useMediaQuery } from "react-responsive";
import CanvasLoader from "../components/CanvasLoader";
import HackerRoom from "../components/HackerRoom";
import HeroCamera from "../components/HeroCamera";
import Button from "../components/Button.jsx";

const calculateSizes = (isSmall, isMobile, isTablet) => {
  if (isSmall) {
    return {
      deskPosition: [0, -5, 3],
      deskScale: [0.05, 0.05, 0.05],
    };
  } else if (isMobile) {
    return {
      deskPosition: [0, -7, 2],
      deskScale: [0.07, 0.07, 0.07],
    };
  } else if (isTablet) {
    return {
      deskPosition: [0, -8, 2],
      deskScale: [0.08, 0.08, 0.08],
    };
  } else {
    return {
      deskPosition: [0, -8, 4],
      deskScale: [0.09, 0.09, 0.09],
    };
  }
};

const Hero = () => {
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      {/* 3D Canvas */}
      <div className="w-full h-full absolute inset-0 z-10">
        <Canvas>
          <Suspense fallback={<CanvasLoader />}>
            <HeroCamera isMobile={isMobile}>
              <HackerRoom
                scale={sizes.deskScale}
                position={sizes.deskPosition}
                rotation={[0.1, -Math.PI, 0]}
              />
            </HeroCamera>

            {/* Lighting */}
            <ambientLight intensity={3} />
            <directionalLight position={[10, 10, 10]} intensity={3} />
          </Suspense>
        </Canvas>
      </div>

      {/* Text Content */}
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3 z-0 relative">
        <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
          Hi, I'm Neha <span className="waving-hand">👋🏼</span>
        </p>
        <p className="text-6xl font-semibold text-gray-300 text-center">
          I'm a Data Scientist
        </p>
      </div>
      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        <a href="#contact" className="w-fit">
          <Button
            name="Let's work together"
            isBeam
            containerClass="sm:w-fit w-full sm:min-w-96"
          />
        </a>
      </div>
    </section>
  );
};

export default Hero;
