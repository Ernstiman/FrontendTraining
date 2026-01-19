
varying vec2 vUv;
uniform float uTime;

void main() {
  vUv = uv;
  vec3 pos = position;
  pos.z += sin(pos.x * 4.0 + uTime) * 0.3;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}