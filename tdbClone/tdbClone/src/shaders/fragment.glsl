varying vec2 vUv;
uniform float uTime;

void main() {
  vec3 color = vec3(vUv.x, vUv.y, abs(sin(uTime)));
  gl_FragColor = vec4(color, 1.0);
}