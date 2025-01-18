import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { PerspectiveCamera } from "@react-three/drei";
import { Leva, useControls } from "leva";
import { useMediaQuery } from "react-responsive"; // Import useMediaQuery
import CanvasLoader from "../components/CanvasLoader";
import HackerRoom from "../components/HackerRoom";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 }); // Check for mobile screens
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

//   const x = useControls("HackerRoom", {
//     positionX: {
//       value: 1.4,
//       min: -10,
//       max: 10,
//     },
//     positionY: {
//       value: 0,
//       min: -10,
//       max: 10,
//     },
//     positionZ: {
//       value: 5.8,
//       min: -10,
//       max: 10,
//     },
//     rotationX: {
//       value: 0.4,
//       min: -10,
//       max: 10,
//     },
//     rotationY: {
//       value: 3.2,
//       min: -10,
//       max: 10,
//     },
//     rotationZ: {
//       value: 0,
//       min: -10,
//       max: 10,
//     },
//     scale: {
//       value: 0.08,
//       min: -10,
//       max: 10,
//     },
//   });

  return (
    <section className="min-h-screen w-full flex flex-col relative">
      {/* 3D Canvas */}
      <div className="w-full h-full absolute inset-0 z-10">
        <Leva />
        <Canvas>
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera
              makeDefault
              position={isMobile ? [0, 5, 30] : [0, 5, 30]} // No change to values
            />
            <HackerRoom
              position={[2, -3, 2]} // No change to values
              rotation={[0, -Math.PI, 0]} // No change to values
              scale={[0.1, 0.1, 0.1]} // No change to values
            />
            <ambientLight intensity={2} />
            <directionalLight position={[10, 10, 10]} intensity={1} />
          </Suspense>
        </Canvas>
      </div>

      {/* Text Content */}
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3 z-0 relative">
        <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
          Hi, I'm Neha <span className="waving-hand">👋🏼</span>
        </p>
        <p className="text-2xl font-semibold text-gray-300 text-center">
          I'm a Data Scientist
        </p>
      </div>
    </section>
  );
};

export default Hero;
