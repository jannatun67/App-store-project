export const getInstalledApps = () => {
  const installed = localStorage.getItem('installedApps');
  return installed ? JSON.parse(installed) : [];
};

export const saveInstalledApps = (apps) => {
  localStorage.setItem('installedApps', JSON.stringify(apps));
};

export const installApp = (app) => {
  const installed = getInstalledApps();
  if (!installed.some(item => item.id === app.id)) {
    const newInstalled = [...installed, app];
    saveInstalledApps(newInstalled);
    return true;
  }
  return false;
};

export const uninstallApp = (appId) => {
  const installed = getInstalledApps();
  const newInstalled = installed.filter(app => app.id !== appId);
  saveInstalledApps(newInstalled);
  return newInstalled;
};

export const isAppInstalled = (appId) => {
  const installed = getInstalledApps();
  return installed.some(app => app.id === appId);
};