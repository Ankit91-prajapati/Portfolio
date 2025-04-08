import React from 'react'
import { Canvas, useLoader } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import * as THREE from 'three'
import Earths from '/image.png'
function Earth() {
  const texture = useLoader(THREE.TextureLoader, Earths)

  return (
    <mesh>
      {/* Bigger, smoother sphere */}
      <sphereGeometry args={[3.5, 128, 128]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  )
}

function RotatingPlanets() {
  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 50 }} style={{ height: '100vh', width: '100vw', background: '#000' }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1.5} />
      <Stars radius={100} depth={50} count={5000} factor={4} fade />
      <Earth />
      <OrbitControls enableZoom={false} />
    </Canvas>
  )
}

export default  RotatingPlanets;
