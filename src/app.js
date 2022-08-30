import { PowerGlitch } from "powerglitch";

PowerGlitch.glitch(".glitch-1", {
  timing: {
    duration: 1500,
    iterations: 15,
  },
  glitchTimeSpan: {
    start: 0.4,
    end: 0.7,
  },
  shake: {
    velocity: 10,
    amplitudeX: 0.4,
    amplitudeY: 0.4,
  },
  slice: {
    count: 4,
    velocity: 10,
    minHeight: 0.02,
    maxHeight: 0.4,
    hueRotate: true,
  },
});
PowerGlitch.glitch(".glitch-2", {
  timing: {
    duration: 1500,
    iterations: 15,
  },
  glitchTimeSpan: {
    start: 0.4,
    end: 0.7,
  },
  shake: {
    velocity: 10,
    amplitudeX: 0.4,
    amplitudeY: 0.4,
  },
  slice: {
    count: 4,
    velocity: 10,
    minHeight: 0.02,
    maxHeight: 0.4,
    hueRotate: true,
  },
});

PowerGlitch.glitch(".glitch-3", {
  timing: {
    duration: 2000,
    iterations: 15,
  },
  glitchTimeSpan: {
    start: 0.4,
    end: 0.7,
  },
  shake: {
    velocity: 10,
    amplitudeX: 0.4,
    amplitudeY: 0.4,
  },
  slice: {
    count: 4,
    velocity: 10,
    minHeight: 0.02,
    maxHeight: 0.4,
    hueRotate: true,
  },
});

console.log("hello hello");
