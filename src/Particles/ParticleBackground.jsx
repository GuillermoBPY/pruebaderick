import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import ParticlesConfig from "./Particles-config.json";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={ParticlesConfig}
    />
  );
};

export default ParticlesBackground;