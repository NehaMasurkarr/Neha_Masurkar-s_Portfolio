import { useRef, useState, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import { TextureLoader } from 'three';

const DemoComputer = (props) => {
  const group = useRef();
  const { nodes, materials } = useGLTF('/models/computer.glb');
  const [currentTexture, setCurrentTexture] = useState(null);

  const textures = {
    pizza: '/textures/project/pizza.png',
    graph2: '/textures/project/graph2.png',
  };

  useEffect(() => {
    const loader = new TextureLoader();

    // Preload and set the first texture
    const initialTexture = loader.load(
      textures.pizza,
      (texture) => {
        texture.flipY = false; // Fix upside-down textures
        setCurrentTexture(texture);
      },
      undefined,
      (err) => console.error('Failed to load texture:', err)
    );

    // Shuffle between the textures every 5 seconds
    const interval = setInterval(() => {
      loader.load(
        currentTexture?.image.src === textures.pizza
          ? textures.graph2
          : textures.pizza,
        (texture) => {
          texture.flipY = false; // Fix upside-down textures
          setCurrentTexture(texture);
        },
        undefined,
        (err) => console.error('Failed to load texture:', err)
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [currentTexture, textures]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="monitor-screen"
          geometry={nodes['monitor-screen'].geometry}
          material={nodes['monitor-screen'].material}
          position={[0.127, 1.831, 0.511]}
          rotation={[1.571, -0.005, 0.031]}
          scale={[0.661, 0.608, 0.401]}
        >
          {currentTexture && (
            <meshBasicMaterial map={currentTexture} toneMapped={false} />
          )}
        </mesh>
        <group
          name="RootNode"
          position={[0, 1.093, 0]}
          rotation={[-Math.PI / 2, 0, -0.033]}
          scale={0.045}
        />
        <group
          name="Monitor-B-_computer_0"
          position={[0.266, 1.132, 0.051]}
          rotation={[0, -0.033, 0]}
          scale={[0.042, 0.045, 0.045]}
        >
          <mesh
            name="Monitor-B-_computer_0_1"
            geometry={nodes['Monitor-B-_computer_0_1'].geometry}
            material={materials.computer}
          />
          <mesh
            name="Monitor-B-_computer_0_2"
            geometry={nodes['Monitor-B-_computer_0_2'].geometry}
            material={materials.base__0}
          />
          <mesh
            name="Monitor-B-_computer_0_3"
            geometry={nodes['Monitor-B-_computer_0_3'].geometry}
            material={materials.Material_36}
          />
          <mesh
            name="Monitor-B-_computer_0_4"
            geometry={nodes['Monitor-B-_computer_0_4'].geometry}
            material={materials.Material_35}
          />
        </group>
      </group>
    </group>
  );
};

useGLTF.preload('/models/computer.glb');

export default DemoComputer;
