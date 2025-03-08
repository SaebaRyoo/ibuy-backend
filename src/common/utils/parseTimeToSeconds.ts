export default function parseTimeToSeconds(time) {
  const units = {
    s: 1,
    m: 60,
    h: 60 * 60,
    d: 24 * 60 * 60,
  };

  const unit = time.slice(-1);
  const value = parseInt(time.slice(0, -1), 10);

  if (isNaN(value) || !units[unit]) {
    throw new Error('Invalid time format');
  }

  return value * units[unit];
}
