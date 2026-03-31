"use client";

import { useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, OrbitControls } from "@react-three/drei";
import { useTheme } from "next-themes";
import type { Mesh } from "three";
import { Color, Group, MathUtils } from "three";

function Rig({ children }: { children: React.ReactNode }) {
  const groupRef = useRef<Group | null>(null);

  useFrame(({ pointer }) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = MathUtils.lerp(
      groupRef.current.rotation.y,
      pointer.x * 0.6,
      0.08
    );
    groupRef.current.rotation.x = MathUtils.lerp(
      groupRef.current.rotation.x,
      pointer.y * 0.45,
      0.08
    );
  });

  return <group ref={groupRef}>{children}</group>;
}

function ParticleField({
  count,
  color,
  radius
}: {
  count: number;
  color: string;
  radius: number;
}) {
  const positions = useMemo(() => {
    const data = new Float32Array(count * 3);
    for (let i = 0; i < count; i += 1) {
      const r = radius * Math.cbrt(Math.random());
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      data[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      data[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      data[i * 3 + 2] = r * Math.cos(phi);
    }
    return data;
  }, [count, radius]);

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        color={new Color(color)}
        size={0.02}
        opacity={0.6}
        transparent
        depthWrite={false}
      />
    </points>
  );
}

function Satellites({ hovered }: { hovered: boolean }) {
  const groupRef = useRef<Group | null>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    const speed = hovered ? 0.6 : 0.35;
    groupRef.current.rotation.y += 0.003 + Math.sin(state.clock.elapsedTime) * 0.001 * speed;
    groupRef.current.rotation.z += 0.0015 * speed;
  });

  return (
    <group ref={groupRef}>
      {[0, 1, 2, 3].map((index) => (
        <mesh key={`sat-${index}`} position={[2.2, index * 0.4 - 0.6, index % 2 ? 0.8 : -0.8]}>
          <sphereGeometry args={[0.12, 32, 32]} />
          <meshStandardMaterial color={index % 2 ? "#38bdf8" : "#34d399"} metalness={0.5} roughness={0.2} />
        </mesh>
      ))}
    </group>
  );
}

function EnergyRings({ hovered }: { hovered: boolean }) {
  const ringRef = useRef<Group | null>(null);

  useFrame(() => {
    if (!ringRef.current) return;
    ringRef.current.rotation.x += 0.002;
    ringRef.current.rotation.y += hovered ? 0.006 : 0.004;
  });

  return (
    <group ref={ringRef}>
      <mesh rotation={[MathUtils.degToRad(70), 0, 0]}>
        <torusGeometry args={[1.9, 0.04, 16, 120]} />
        <meshStandardMaterial color="#22d3ee" emissive="#22d3ee" emissiveIntensity={0.25} />
      </mesh>
      <mesh rotation={[MathUtils.degToRad(30), MathUtils.degToRad(90), 0]}>
        <torusGeometry args={[1.4, 0.03, 16, 120]} />
        <meshStandardMaterial color="#a78bfa" emissive="#a78bfa" emissiveIntensity={0.2} />
      </mesh>
    </group>
  );
}

function CoreOrb({ hovered, darkMode }: { hovered: boolean; darkMode: boolean }) {
  const meshRef = useRef<Mesh | null>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y += 0.004;
    meshRef.current.rotation.x = MathUtils.lerp(
      meshRef.current.rotation.x,
      Math.sin(state.clock.elapsedTime * 0.4) * 0.2,
      0.04
    );
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1.15, 128, 128]} />
      <MeshDistortMaterial
        color={darkMode ? "#0ea5e9" : "#38bdf8"}
        roughness={0.1}
        metalness={0.45}
        distort={hovered ? 0.6 : 0.35}
        speed={hovered ? 2.1 : 1.4}
        emissive={darkMode ? "#22d3ee" : "#0ea5e9"}
        emissiveIntensity={darkMode ? 0.35 : 0.2}
      />
    </mesh>
  );
}

export function InteractiveOrbScene() {
  const { resolvedTheme } = useTheme();
  const darkMode = resolvedTheme === "dark";
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="h-[300px] w-full sm:h-[360px] md:h-[520px]"
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
    >
      <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 6], fov: 45 }} gl={{ antialias: true }}>
        <color attach="background" args={[darkMode ? "#050b1a" : "#eff7ff"]} />
        <fog attach="fog" args={[darkMode ? "#050b1a" : "#eff7ff", 6, 11]} />
        <ambientLight intensity={darkMode ? 0.4 : 0.6} />
        <spotLight position={[4, 6, 4]} intensity={darkMode ? 1.1 : 1} angle={0.3} penumbra={0.5} />
        <pointLight position={[-3, -2, 2]} intensity={darkMode ? 0.6 : 0.45} color="#22d3ee" />

        <Rig>
          <Float speed={1.2} floatIntensity={0.5} rotationIntensity={0.25}>
            <group>
              <CoreOrb hovered={hovered} darkMode={darkMode} />
              <EnergyRings hovered={hovered} />
              <Satellites hovered={hovered} />
            </group>
          </Float>
          <ParticleField count={700} color={darkMode ? "#7dd3fc" : "#38bdf8"} radius={5.5} />
        </Rig>

        <OrbitControls
          enablePan={false}
          enableZoom={false}
          minPolarAngle={MathUtils.degToRad(60)}
          maxPolarAngle={MathUtils.degToRad(120)}
        />
      </Canvas>
    </div>
  );
}
