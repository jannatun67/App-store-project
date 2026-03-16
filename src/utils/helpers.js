export const formatNumber = (num) => {
  if (num >= 1000000000) {
    return (num / 1000000000).toFixed(1) + 'B';
  }
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K';
  }
  return num.toString();
};

export const sortApps = (apps, sortType) => {
  if (sortType === 'high-low') {
    return [...apps].sort((a, b) => b.downloads - a.downloads);
  }
  if (sortType === 'low-high') {
    return [...apps].sort((a, b) => a.downloads - b.downloads);
  }
  return apps;
};