"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sparkles, useTexture } from "@react-three/drei";
import type { Group } from "three";

function FloatingIcon() {
  const groupRef = useRef<Group>(null);
  const iconTexture = useTexture("/icon.png");

  useFrame((state) => {
    if (!groupRef.current) return;
    const { x, y } = state.pointer;
    groupRef.current.rotation.y += (x * 0.45 - groupRef.current.rotation.y) * 0.08;
    groupRef.current.rotation.x += (-y * 0.25 - groupRef.current.rotation.x) * 0.08;
  });

  return (
    <group ref={groupRef}>
      <Float speed={2.2} rotationIntensity={0.5} floatIntensity={1.2}>
        <mesh castShadow receiveShadow>
          <boxGeometry args={[2.2, 2.2, 0.26]} />
          <meshStandardMaterial
            color="#0f172a"
            metalness={0.4}
            roughness={0.22}
            emissive="#082f49"
            emissiveIntensity={0.12}
          />
        </mesh>
        <mesh position={[0, 0, 0.14]}>
          <planeGeometry args={[1.84, 1.84]} />
          <meshStandardMaterial
            map={iconTexture}
            transparent
            alphaTest={0.08}
            metalness={0.15}
            roughness={0.35}
          />
        </mesh>
      </Float>
      <mesh position={[0, -1.65, -0.2]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[1.15, 1.3, 100]} />
        <meshBasicMaterial color="#22d3ee" transparent opacity={0.45} />
      </mesh>
      <Sparkles
        count={35}
        size={3}
        scale={[4, 3, 2]}
        speed={0.45}
        noise={0.3}
        color="#67e8f9"
      />
    </group>
  );
}

export function HeroScene() {
  return (
    <div className="h-[360px] w-full md:h-[520px]">
      <Canvas dpr={[1, 1.75]} camera={{ position: [0, 0.15, 4], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2.2, 2.5, 2]} intensity={1.35} />
        <pointLight position={[-2, -1, 2]} intensity={0.85} color="#22d3ee" />
        <pointLight position={[1.8, 0.8, 1.6]} intensity={0.65} color="#34d399" />
        <FloatingIcon />
      </Canvas>
    </div>
  );
}
