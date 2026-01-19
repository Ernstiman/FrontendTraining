import React, { useEffect, useRef } from 'react'
import { Canvas, useFrame, extend } from '@react-three/fiber'
import { shaderMaterial, Center } from '@react-three/drei'
import * as THREE from 'three'
import vertexShader from './shaders/vertex.glsl';
import fragmentShader from './shaders/fragment.glsl';
import './shaderMesh.css'



// 1. Define your GLSL
const MyShaderMaterial = shaderMaterial(
  { uTime: 0, uColor: new THREE.Color('#ff4500') , uResolution: new THREE.Vector2(window.innerWidth, window.innerHeight)},
  // Vertex Shader
  vertexShader,
  // Fragment Shader
 fragmentShader
)

// 2. Register the material so you can use it as a JSX tag
extend({ MyShaderMaterial })

function ShaderMesh() {
  const meshRef = useRef()

  // 3. Animate the 'uTime' uniform
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.uTime = state.clock.elapsedTime
    }
  })

  return (
    <mesh>
      <planeGeometry args={[3, 3, 64, 64]} />
      <myShaderMaterial ref={meshRef} key = {MyShaderMaterial.key}/>
    </mesh>
  )
}

export default function App() {
  return (
    <div className='shader-container'>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <Center>
          <ShaderMesh />
        </Center>
      </Canvas>
    </div>
  )
}