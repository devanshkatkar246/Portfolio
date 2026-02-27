import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Text3D, Center, Float, Environment, ContactShadows, useMatcapTexture } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Barrier({ position, rotation }: { position: [number, number, number], rotation: [number, number, number] }) {
    return (
        <group position={position} rotation={rotation}>
            {/* Main Board */}
            <mesh position={[0, 0.5, 0]}>
                <boxGeometry args={[3, 0.5, 0.1]} />
                <meshStandardMaterial color="#fcd34d" />
            </mesh>
            {/* Stripes */}
            <mesh position={[0, 0.5, 0.06]}>
                <planeGeometry args={[2.8, 0.3]} />
                <meshStandardMaterial color="#ef4444" />
            </mesh>

            {/* Legs */}
            <mesh position={[-1.2, 0, 0]} rotation={[0, 0, 0.2]}>
                <boxGeometry args={[0.1, 1.5, 0.1]} />
                <meshStandardMaterial color="#333" />
            </mesh>
            <mesh position={[1.2, 0, 0]} rotation={[0, 0, -0.2]}>
                <boxGeometry args={[0.1, 1.5, 0.1]} />
                <meshStandardMaterial color="#333" />
            </mesh>
        </group>
    );
}

function ConstructionSign() {
    const signRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (signRef.current) {
            signRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
        }
    });

    return (
        <group ref={signRef}>
            <Float speed={2} rotationIntensity={0.2} floatIntensity={1}>
                <Center position={[0, 1.5, 0]}>
                    <Text3D
                        font="https://unpkg.com/three@0.150.1/examples/fonts/helvetiker_regular.typeface.json"
                        size={0.8}
                        height={0.2}
                        curveSegments={12}
                        bevelEnabled
                        bevelThickness={0.02}
                        bevelSize={0.02}
                        bevelOffset={0}
                        bevelSegments={5}
                    >
                        UNDER
                        <meshStandardMaterial color="#facc15" metalness={0.5} roughness={0.2} />
                    </Text3D>
                </Center>
                <Center position={[0, 0.4, 0]}>
                    <Text3D
                        font="https://unpkg.com/three@0.150.1/examples/fonts/helvetiker_regular.typeface.json"
                        size={0.6}
                        height={0.2}
                        curveSegments={12}
                        bevelEnabled
                        bevelThickness={0.02}
                        bevelSize={0.02}
                        bevelOffset={0}
                        bevelSegments={5}
                    >
                        CONSTRUCTION
                        <meshStandardMaterial color="#f97316" metalness={0.5} roughness={0.2} />
                    </Text3D>
                </Center>
            </Float>

            {/* Adding some barriers around */}
            <Barrier position={[-2.5, -1, 1]} rotation={[0, Math.PI / 4, 0]} />
            <Barrier position={[2.5, -1, 1]} rotation={[0, -Math.PI / 4, 0]} />

            {/* Cones */}
            <mesh position={[-1.5, -1.5, 2]}>
                <coneGeometry args={[0.3, 0.8, 16]} />
                <meshStandardMaterial color="#f97316" />
            </mesh>
            <mesh position={[1.5, -1.5, 2]}>
                <coneGeometry args={[0.3, 0.8, 16]} />
                <meshStandardMaterial color="#f97316" />
            </mesh>
        </group>
    );
}

export default function UnderConstruction() {
    return (
        <div className="w-full h-screen bg-dark-bg relative overflow-hidden flex flex-col items-center justify-center">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-neon-purple/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="w-full h-[60vh] md:h-[70vh] cursor-grab active:cursor-grabbing z-10">
                <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
                    <ambientLight intensity={0.5} />
                    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
                    <pointLight position={[-10, -10, -10]} intensity={0.5} />

                    <ConstructionSign />

                    <Environment preset="city" />
                    <ContactShadows position={[0, -2, 0]} opacity={0.5} scale={15} blur={2} far={4} />
                    <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 3} />
                </Canvas>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="z-20 text-center px-4 -mt-10"
            >
                <h2 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent mb-4">
                    We're Building Something Awesome
                </h2>
                <p className="text-gray-400 mb-8 max-w-md mx-auto">
                    This page is currently under development. Check back soon for exciting updates!
                </p>

                <Link
                    to="/"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-white transition-all hover:scale-105"
                >
                    <span>Return Home</span>
                </Link>
            </motion.div>

            {/* Animated stripes background */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
                style={{
                    backgroundImage: "repeating-linear-gradient(45deg, #000 0px, #000 20px, #fff 20px, #fff 40px)"
                }}
            />
        </div>
    );
}
