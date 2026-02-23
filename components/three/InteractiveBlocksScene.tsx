"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useTheme } from "next-themes";
import type { Mesh } from "three";
import { Color, Euler, Vector3 } from "three";

type Block = {
  assembled: [number, number, number];
  disassembled: [number, number, number];
  hoverScatter: [number, number, number];
  scale: [number, number, number];
  color: string;
};

const blocks: Block[] = [
  {
    assembled: [-0.72, 0.72, 0],
    disassembled: [-2.1, 1.4, -1.1],
    hoverScatter: [-0.35, 0.2, -0.2],
    scale: [0.6, 0.6, 0.6],
    color: "#22d3ee"
  },
  {
    assembled: [0, 0.72, 0],
    disassembled: [0.3, 1.85, 1.2],
    hoverScatter: [0.25, 0.32, 0.22],
    scale: [0.6, 0.6, 0.6],
    color: "#67e8f9"
  },
  {
    assembled: [0.72, 0.72, 0],
    disassembled: [2.05, 0.9, -0.75],
    hoverScatter: [0.3, 0.18, -0.3],
    scale: [0.6, 0.6, 0.6],
    color: "#38bdf8"
  },
  {
    assembled: [-0.72, 0, 0],
    disassembled: [-1.35, -1.1, 0.8],
    hoverScatter: [-0.22, -0.2, 0.24],
    scale: [0.6, 0.6, 0.6],
    color: "#2dd4bf"
  },
  {
    assembled: [0, 0, 0],
    disassembled: [-0.1, -1.8, -0.95],
    hoverScatter: [0.12, -0.22, -0.28],
    scale: [0.6, 0.6, 0.6],
    color: "#5eead4"
  },
  {
    assembled: [0.72, 0, 0],
    disassembled: [1.4, -1.4, 0.95],
    hoverScatter: [0.26, -0.22, 0.23],
    scale: [0.6, 0.6, 0.6],
    color: "#0ea5e9"
  },
  {
    assembled: [-0.72, -0.72, 0],
    disassembled: [-1.95, -0.2, -0.92],
    hoverScatter: [-0.3, 0.12, -0.28],
    scale: [0.6, 0.6, 0.6],
    color: "#14b8a6"
  },
  {
    assembled: [0, -0.72, 0],
    disassembled: [0.12, 1.95, -1.05],
    hoverScatter: [0.15, 0.33, -0.2],
    scale: [0.6, 0.6, 0.6],
    color: "#22d3ee"
  },
  {
    assembled: [0.72, -0.72, 0],
    disassembled: [2.1, -0.55, 1.02],
    hoverScatter: [0.3, -0.05, 0.3],
    scale: [0.6, 0.6, 0.6],
    color: "#06b6d4"
  }
];

function BlocksCluster({
  progress,
  hovered,
  darkMode
}: {
  progress: number;
  hovered: boolean;
  darkMode: boolean;
}) {
  const meshRefs = useRef<Array<Mesh | null>>([]);
  const pointer = useRef(new Vector3(0, 0, 0));
  const tmpPosition = useMemo(() => new Vector3(), []);
  const tmpRotation = useMemo(() => new Euler(), []);

  useFrame((state) => {
    const targetPointer = new Vector3(state.pointer.x * 0.35, state.pointer.y * 0.25, 0);
    pointer.current.lerp(targetPointer, 0.08);

    const t = Math.max(0, Math.min(progress, 1));

    blocks.forEach((block, index) => {
      const mesh = meshRefs.current[index];
      if (!mesh) return;

      tmpPosition
        .set(...block.disassembled)
        .lerp(new Vector3(...block.assembled), t)
        .add(pointer.current);

      if (hovered) {
        const pulse = 0.45 + Math.sin(state.clock.elapsedTime * 1.4 + index * 0.7) * 0.2;
        tmpPosition.add(
          new Vector3(...block.hoverScatter).multiplyScalar(pulse)
        );
      }

      mesh.position.lerp(tmpPosition, hovered ? 0.12 : 0.1);

      tmpRotation.set(
        state.clock.elapsedTime * 0.15 + index * 0.08,
        state.clock.elapsedTime * 0.12 + index * 0.1,
        hovered ? Math.sin(state.clock.elapsedTime + index) * 0.2 : 0
      );

      mesh.rotation.x += (tmpRotation.x - mesh.rotation.x) * 0.08;
      mesh.rotation.y += (tmpRotation.y - mesh.rotation.y) * 0.08;
      mesh.rotation.z += (tmpRotation.z - mesh.rotation.z) * 0.08;
    });
  });

  return (
    <Float speed={1.25} rotationIntensity={0.15} floatIntensity={0.38}>
      <group>
        {blocks.map((block, index) => (
          <mesh
            key={`block-${index}`}
            ref={(el) => {
              meshRefs.current[index] = el;
            }}
            scale={block.scale}
          >
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial
              color={new Color(block.color)}
              roughness={darkMode ? 0.18 : 0.24}
              metalness={darkMode ? 0.45 : 0.28}
              transparent
              opacity={darkMode ? 0.94 : 0.88}
              emissive={new Color(block.color).multiplyScalar(darkMode ? 0.14 : 0.08)}
            />
          </mesh>
        ))}
      </group>
    </Float>
  );
}

export function InteractiveBlocksScene() {
  const [hovered, setHovered] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const { resolvedTheme } = useTheme();
  const darkMode = resolvedTheme === "dark";

  useEffect(() => {
    const updateProgress = () => {
      const viewport = window.innerHeight || 1;
      const progress = Math.min(window.scrollY / (viewport * 0.75), 1);
      setScrollProgress(progress);
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <div
      className="h-[300px] w-full sm:h-[360px] md:h-[520px]"
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
    >
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 5.2], fov: 42 }}
        gl={{ alpha: true, antialias: true }}
      >
        <color attach="background" args={[darkMode ? "#071426" : "#eef9ff"]} />
        <fog attach="fog" args={[darkMode ? "#071426" : "#eef9ff", 5.2, 10.4]} />
        <ambientLight intensity={darkMode ? 0.45 : 0.65} />
        <directionalLight
          position={[2.5, 3, 2]}
          intensity={darkMode ? 1 : 0.9}
          color={darkMode ? "#67e8f9" : "#0891b2"}
        />
        <pointLight
          position={[-2, -1, 2]}
          intensity={darkMode ? 0.6 : 0.45}
          color={darkMode ? "#14b8a6" : "#10b981"}
        />
        <pointLight
          position={[2, 1.4, 1.8]}
          intensity={darkMode ? 0.35 : 0.25}
          color={darkMode ? "#22d3ee" : "#06b6d4"}
        />
        <BlocksCluster progress={scrollProgress} hovered={hovered} darkMode={darkMode} />
      </Canvas>
    </div>
  );
}
