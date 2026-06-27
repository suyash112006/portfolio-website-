import { simplex3d } from './noise';

export const particlesVertex = /* glsl */`
  uniform float uTime;
  uniform float uScroll;
  uniform float uMouseX;
  uniform float uMouseY;
  
  attribute float aSize;
  attribute float aSpeed;
  attribute float aOffset;
  
  varying vec3 vColor;
  varying float vAlpha;
  
  ${simplex3d}
  
  void main() {
    vec3 pos = position;
    
    float yOffset = uTime * aSpeed * (1.0 + uScroll * 2.0);
    pos.y += yOffset;
    pos.y = mod(pos.y + 2.0, 4.0) - 2.0; 
    
    float noiseVal = snoise(vec3(pos.x * 2.0, pos.y * 2.0, uTime * 0.5 + aOffset));
    pos.x += noiseVal * 0.1;
    
    vec2 mouseWorld = vec2((uMouseX * 2.0 - 1.0) * 2.0, -(uMouseY * 2.0 - 1.0) * 2.0); 
    
    float mouseDist = distance(mouseWorld, pos.xy);
    float attraction = smoothstep(1.5, 0.0, mouseDist);
    pos.x += (mouseWorld.x - pos.x) * attraction * 0.1;
    pos.y += (mouseWorld.y - pos.y) * attraction * 0.1;

    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    
    gl_PointSize = aSize * (10.0 / -mvPosition.z) * (1.0 + attraction);
    gl_Position = projectionMatrix * mvPosition;
    
    vec3 cyan = vec3(0.0, 1.0, 1.0);
    vec3 white = vec3(1.0, 1.0, 1.0);
    vec3 purple = vec3(0.6, 0.2, 1.0);
    
    if (pos.y > 0.0) {
      vColor = mix(white, cyan, clamp(pos.y, 0.0, 1.0));
    } else {
      vColor = mix(white, purple, clamp(-pos.y, 0.0, 1.0));
    }
    
    vAlpha = smoothstep(2.0, 1.5, abs(pos.y)) * smoothstep(1.5, 0.5, abs(pos.x));
    vAlpha *= 0.5 + 0.5 * sin(uTime * 5.0 + aOffset);
  }
`;

export const particlesFragment = /* glsl */`
  varying vec3 vColor;
  varying float vAlpha;
  
  void main() {
    float dist = distance(gl_PointCoord, vec2(0.5));
    if (dist > 0.5) discard;
    
    float alpha = smoothstep(0.5, 0.1, dist) * vAlpha;
    gl_FragColor = vec4(vColor * alpha, alpha); // Fixed: Output correct alpha instead of 1.0 for transparent canvas compositing
  }
`;
