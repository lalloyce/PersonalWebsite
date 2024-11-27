import { useCallback } from 'react';
import { Container } from '@tsparticles/engine';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadLinksPreset } from '@tsparticles/preset-links';
import { useEffect, useState } from 'react';

const ParticleBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadLinksPreset(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = useCallback(async (container?: Container) => {
    console.log('Particles container loaded', container);
  }, []);

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      particlesLoaded={particlesLoaded}
      options={{
        preset: "links",
        background: {
          color: {
            value: 'transparent',
          },
        },
        particles: {
          color: {
            value: '#1B2D53',
          },
          links: {
            color: '#1B2D53',
            opacity: 0.5,
          },
          move: {
            speed: 2,
          },
          size: {
            value: { min: 1, max: 3 },
          },
          opacity: {
            value: 0.5,
          },
        },
      }}
    />
  );
};

export default ParticleBackground;
