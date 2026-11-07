// Simulador conceptual de gas ideal en compresión isotérmica.
// P (atm), V (L), n (mol), R (L·atm·mol⁻¹·K⁻¹), T (K).
export const GAS_DEMO = Object.freeze({
  minVolume: 5,
  maxVolume: 20,
  initialVolume: 12,
  moles: 0.5,
  temperatureKelvin: 300,
  gasConstant: 0.082057,
  // Piston is rendered between 10% (top) and 90% (bottom) of the vessel.
  topPaddingPercent: 10,
  bottomPaddingPercent: 10
});

export function clampGasVolume(volume) {
  if (!Number.isFinite(volume)) return GAS_DEMO.initialVolume;
  return Math.max(GAS_DEMO.minVolume, Math.min(GAS_DEMO.maxVolume, volume));
}

export function gasPressureAtVolume(volume) {
  return GAS_DEMO.moles * GAS_DEMO.gasConstant * GAS_DEMO.temperatureKelvin /
    clampGasVolume(volume);
}

export function gasPressureVolumeProduct(volume) {
  return gasPressureAtVolume(volume) * clampGasVolume(volume);
}

// Gas column's visual height is proportional to V, with a fixed container cross-section.
export function gasHeightPercent(volume) {
  return (100 - GAS_DEMO.topPaddingPercent - GAS_DEMO.bottomPaddingPercent) *
    (clampGasVolume(volume) / GAS_DEMO.maxVolume);
}

export function pistonTopPercent(volume) {
  return 100 - GAS_DEMO.bottomPaddingPercent - gasHeightPercent(volume);
}

// Pointer moves down -> piston compresses -> volume decreases -> pressure rises.
export function volumeFromPistonDrag(startVolume, deltaPixelsY, vesselHeightPixels) {
  if (!Number.isFinite(vesselHeightPixels) || vesselHeightPixels <= 0 || !Number.isFinite(deltaPixelsY)) {
    return clampGasVolume(startVolume);
  }
  const visualTravelFraction = (gasHeightPercent(GAS_DEMO.maxVolume) -
    gasHeightPercent(GAS_DEMO.minVolume)) / 100;
  const deltaVolume = deltaPixelsY /
    (vesselHeightPixels * visualTravelFraction) *
    (GAS_DEMO.maxVolume - GAS_DEMO.minVolume);
  return clampGasVolume(startVolume - deltaVolume);
}
