import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import ParticlesConfigHeader from "./Particles-configHeader.json"

const ParticleMenu = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <Particles
      id="ParticleMenu"
      init={particlesInit}
      loaded={particlesLoaded}
      options={ParticlesConfigHeader}
    />
  );
};

export default ParticleMenu;
