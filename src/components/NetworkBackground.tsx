import { useEffect, useState } from "react"
import Particles, { initParticlesEngine } from "@tsparticles/react"
import { loadSlim } from "@tsparticles/slim"

export function NetworkBackground() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => setReady(true))
  }, [])

  if (!ready) return null

  return (
    <Particles
      id="tsparticles"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        pointerEvents: "none",
      }}
      options={{
        background: { color: { value: "transparent" } },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: { enable: true, mode: "grab" },
          },
          modes: {
            grab: {
              distance: 140,
              links: { opacity: 0.5 },
            },
          },
        },
        particles: {
          color: { value: "#ef7811" },
          links: {
            color: "#ef7811",
            distance: 150,
            enable: true,
            opacity: 0.18,
            width: 0.8,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: { default: "bounce" },
            speed: 0.6,
          },
          number: {
            density: { enable: true, area: 800 },
            value: 55,
          },
          opacity: { value: 0.3 },
          shape: { type: "circle" },
          size: { value: { min: 1.2, max: 3 } },
        },
        detectRetina: true,
      }}
    />
  )
}
