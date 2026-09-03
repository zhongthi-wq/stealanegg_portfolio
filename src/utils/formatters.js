// Formatter utilities for Steal An Egg catalog (English)
export function compact(num) {
  if (num == null || isNaN(num)) return null;
  const n = Number(num);
  if (n >= 1e12) return (n / 1e12).toFixed(2).replace(/\.00$/, "") + "T";
  if (n >= 1e9) return (n / 1e9).toFixed(2).replace(/\.00$/, "") + "B";
  if (n >= 1e6) return (n / 1e6).toFixed(2).replace(/\.00$/, "") + "M";
  if (n >= 1e3) return (n / 1e3).toFixed(1).replace(/\.0$/, "") + "K";
  return n.toLocaleString();
}

export function formatTime(seconds) {
  if (!seconds || seconds <= 0) return "Instant";
  if (seconds >= 86400) return `${(seconds / 86400).toFixed(1).replace(/\.0$/, "")} days`;
  if (seconds >= 3600) return `${(seconds / 3600).toFixed(1).replace(/\.0$/, "")} hrs`;
  if (seconds >= 60) return `${Math.round(seconds / 60)} mins`;
  return `${seconds}s`;
}
