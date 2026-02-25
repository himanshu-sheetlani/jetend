import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment, Float } from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";
import modelUrl from "../assets/3d_model.glb";

function Model() {
  const { scene } = useGLTF(modelUrl);
  const ref = useRef();

  // Traverse the scene to update metallic materials to make them look more premium/metal
  scene.traverse((child) => {
    if (child.isMesh && child.material) {
      // Create a slightly dark base color that still reflects well
      child.material.color.setHex(0x8a8888);
      child.material.metalness = 0.9;
      child.material.roughness = 0.2;
      child.material.envMapIntensity = 1.2;
      child.material.needsUpdate = true;
    }
  });

  return (
    <Float
      speed={2}
      rotationIntensity={0.5}
      floatIntensity={0.5}
      floatingRange={[-0.1, 0.1]}
    >
      <pointLight
        position={[5, 5, -2]}
        color="#ff7a00"
        intensity={50}
        distance={100}
        castShadow
      />
      <primitive
        ref={ref}
        object={scene}
        scale={0.07}
        position={[0, -1, 0]}
        rotation={[0.2, -0.5, 0]}
      />
    </Float>
  );
}

export default function ModelViewer() {
  return (
    <div className="w-full h-full cursor-grab active:cursor-grabbing">
      <Canvas
        camera={{ position: [0, 0, 15], fov: 45 }}
        shadows={{ type: THREE.PCFShadowMap }}
      >
        {/* Very Low Ambient Light - prevents total black shadows */}
        <ambientLight intensity={0.35} />

        {/* 1. Orange Key Light - Top-center/left matching the 60% 0% gradient */}
        <spotLight
          position={[-5, 20, 10]}
          angle={0.6}
          penumbra={1}
          intensity={900}
          castShadow
          shadow-bias={-0.0001}
          color="#ff7300"
        />

        {/* 2. Blue Fill Light - Right side matching the 100% 50% gradient */}
        <spotLight
          position={[15, 0, 5]}
          angle={0.8}
          penumbra={1}
          intensity={500}
          color="#2600ff"
        />

        {/* 3. Teal Fill Light - Bottom-left/center matching the 65% 80% gradient */}
        <spotLight
          position={[-5, -10, 10]}
          angle={0.8}
          penumbra={1}
          intensity={400}
          color="#00ffd5"
        />

        <Suspense fallback={null}>
          <Model />
          {/* Dark studio HDR environment for metallic reflections */}
          <Environment preset="studio" environmentIntensity={0.3} />
        </Suspense>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={1.5}
          maxPolarAngle={Math.PI / 1.5}
          minPolarAngle={Math.PI / 3}
        />

        {/* Post-processing effects
        <EffectComposer disableNormalPass>
          <Bloom
            luminanceThreshold={0.5} // Only highlights glow
            mipmapBlur
            intensity={0.2} // Subtle bloom intensity
          />
          <BrightnessContrast contrast={0.15} /> 
          <Vignette eskil={false} offset={0.1} darkness={1.1} /> 
        </EffectComposer> */}
      </Canvas>
    </div>
  );
}

// Preload the model
useGLTF.preload(modelUrl);
