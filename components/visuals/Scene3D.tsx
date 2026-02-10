"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import { Float, MeshDistortMaterial, Sphere } from "@react-three/drei";

export default function Scene3D() {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-black">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={1} />
        <directionalLight position={[2, 1, 1]} />

        <Suspense fallback={null}>
          <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
            <Sphere args={[1, 64, 64]} scale={1.8}>
              <MeshDistortMaterial
                color="#7c3aed"
                speed={4}
                distort={0.4}
                radius={1}
              />
            </Sphere>
          </Float>
        </Suspense>
      </Canvas>
    </div>
  );
}
