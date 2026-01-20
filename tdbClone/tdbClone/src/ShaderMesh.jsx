import React, { useContext, useEffect, useRef } from 'react'
import { Canvas, useFrame, extend } from '@react-three/fiber'
import { shaderMaterial, Center } from '@react-three/drei'
import * as THREE from 'three'
import vertexShader from './shaders/vertex.glsl';
import fragmentShader from './shaders/fragment.glsl';
import './shaderMesh.css'
import { MainContext } from './App';




// 1. Define your GLSL
const MyShaderMaterial = shaderMaterial(
  { uTime: 0, uColor: new THREE.Color('#ff4500') , iResolution: new THREE.Vector2(window.innerWidth, window.innerHeight),
    uMouse: new THREE.Vector2(0.5, 0.5),
    pageType: 0
  },
  // Vertex Shader
  vertexShader,
  // Fragment Shader
 fragmentShader
)

// 2. Register the material so you can use it as a JSX tag
extend({ MyShaderMaterial })

function ShaderMesh({color = null}) {
  const meshRef = useRef()
  const [pageType] = useContext(MainContext);
  

  useEffect(() => {
    meshRef.current.pageType = pageType;
  }, [pageType])
  // 3. Animate the 'uTime' uniform
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.uTime = state.clock.elapsedTime;
      meshRef.current.uMouse.x = (state.pointer.x + 1) / 2;
      meshRef.current.uMouse.y = (state.pointer.y + 1) / 2;
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
      <Canvas 
      eventSource={document.getElementById('root')}
      camera={{ position: [0, 0, 5] }}>
        <Center>
          <ShaderMesh />
        </Center>
      </Canvas>
    </div>
  )
}