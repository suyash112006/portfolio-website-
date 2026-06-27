import { simplex3d } from './noise';

export const beamVertex = /* glsl */`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

export const beamFragment = /* glsl */`
  varying vec2 vUv;
  uniform float uTime;
  uniform float uMouseY;
  uniform float uMouseX;
  uniform float uScroll;
  uniform float uPulse;
  
  ${simplex3d}
  
  float sdSegment(vec2 p, vec2 a, vec2 b) {
      vec2 pa = p - a, ba = b - a;
      float h = clamp( dot(pa,ba)/dot(ba,ba), 0.0, 1.0 );
      return length( pa - ba*h );
  }

  void main() {
    vec2 uv = vUv;
    vec2 p = uv * 2.0 - 1.0; 
    
    float flow = uTime * 1.5;
    
    // Distance to vertical center line
    float d = sdSegment(p, vec2(0.0, -1.2), vec2(0.0, 1.2));
    
    // 1. Core Energy Beam (Ultra thin, 2px)
    float coreWidth = 0.0003;
    float core = coreWidth / (d + 0.0004);
    core = clamp(pow(core, 2.0), 0.0, 1.0); 
    
    // STRICTLY ZERO volumetric outer glow to isolate the blowout issue
    float totalIntensity = core;
    
    vec3 c_cyan = vec3(0.0, 0.7, 1.0);
    vec3 c_purple = vec3(0.7, 0.0, 1.0);
    vec3 c_white = vec3(1.0, 1.0, 1.0);
    vec3 color = mix(c_cyan, c_purple, smoothstep(-0.02, 0.02, p.x));
    color = mix(color, c_white, core * 0.9);
    
    gl_FragColor = vec4(color * totalIntensity, totalIntensity);
  }
`;
