import { simplex3d } from './noise';

export const waveVertex = /* glsl */`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

export const waveFragment = /* glsl */`
  varying vec2 vUv;
  uniform float uTime;
  uniform float uScroll;
  uniform float uPulse;
  
  ${simplex3d}
  
  void main() {
    vec2 p = vUv * 2.0 - 1.0; 
    
    // Wave parameters
    float amplitude = 0.05;
    float speed = 2.0;
    
    // Multiple horizontal filaments
    float filaments = 0.0;
    float dist = abs(p.x);
    float centerTaper = exp(-dist * 6.0); 
    
    for(int i = 0; i < 4; i++) {
        float fi = float(i);
        float freq = 10.0 + fi * 3.0;
        float waveSpeed = speed + fi * 0.4;
        
        float waveY = sin(p.x * freq - uTime * waveSpeed + fi * 2.0) * amplitude * centerTaper;
        
        float dToWave = abs(p.y - waveY);
        float inst = 0.00015 / (dToWave + 0.0008);
        
        inst *= smoothstep(1.0, 0.05, dist);
        filaments += clamp(inst, 0.0, 0.5);
    }
    
    // STRICTLY ZERO lens flare to isolate center blowout
    float totalIntensity = filaments * 0.5;
    
    vec3 c_cyan = vec3(0.0, 0.6, 1.0);
    vec3 c_purple = vec3(0.9, 0.1, 1.0);
    
    vec3 color = mix(c_cyan, c_purple, smoothstep(-0.15, 0.15, p.x));
    
    gl_FragColor = vec4(color * totalIntensity, totalIntensity);
  }
`;
