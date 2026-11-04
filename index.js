/**
 * Ashtakoota 36 Gunas Compatibility Weights & Nakshatra Index Solver
 * Reference implementation for AstroGuru (RU) & AstrologyCalc (Global)
 */
const KOOTA_MAX_POINTS = {
  varna: 1,
  vashya: 2,
  tara: 3,
  yoni: 4,
  grahaMaitri: 5,
  gana: 6,
  bhakoot: 7,
  nadi: 8
};

function getNakshatraIndex(siderealMoonLongitudeDeg) {
  const norm = ((siderealMoonLongitudeDeg % 360) + 360) % 360;
  return Math.floor(norm / (360 / 27)); // 0..26 (13°20' each)
}

function getNavamshaSignIndex(siderealLongitudeDeg) {
  const norm = ((siderealLongitudeDeg % 360) + 360) % 360;
  return Math.floor(norm / (30 / 9)) % 12; // 0..11 (3°20' each)
}

module.exports = { KOOTA_MAX_POINTS, getNakshatraIndex, getNavamshaSignIndex };
