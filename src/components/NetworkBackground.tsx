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
            distance: 160,
            enable: true,
            opacity: 0.45,
            width: 1.2,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: { default: "bounce" },
            speed: 1.0,
          },
          number: {
            density: { enable: true, area: 700 },
            value: 80,
          },
          opacity: { value: 0.6 },
          shape: { type: "circle" },
          size: { value: { min: 1.5, max: 4 } },
        },
        detectRetina: true,
      }}
    />
  )
}
