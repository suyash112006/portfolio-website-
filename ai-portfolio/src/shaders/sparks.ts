export const sparksVertex = /* glsl */`
  uniform float uTime;
  
  attribute float aSize;
  attribute float aLife;
  attribute float aOffset;
  attribute vec3 aVelocity;
  
  varying float vAlpha;
  
  void main() {
    float t = mod(uTime * 2.0 + aOffset, aLife);
    vec3 pos = position + aVelocity * t;
    
    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    gl_PointSize = aSize * (10.0 / -mvPosition.z);
    gl_Position = projectionMatrix * mvPosition;
    
    float lifePercent = t / aLife;
    vAlpha = (1.0 - lifePercent) * (0.5 + 0.5 * sin(uTime * 50.0 + aOffset));
  }
`;

export const sparksFragment = /* glsl */`
  varying float vAlpha;
  
  void main() {
    float dist = distance(gl_PointCoord, vec2(0.5));
    if (dist > 0.5) discard;
    
    float alpha = smoothstep(0.5, 0.0, dist) * vAlpha;
    vec3 sparkColor = vec3(1.0, 1.0, 1.0);
    gl_FragColor = vec4(sparkColor * alpha, alpha); // Fixed: Output correct alpha instead of 1.0 for transparent canvas compositing
  }
`;
