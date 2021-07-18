const formatVersion = (version: string): string => {
  if (!version) version = '0';
  while (version.split('.').length < 3) {
    version += '.0';
  }
  return version;
};

export default formatVersion;
