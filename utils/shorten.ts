const shorten = (value: string, length: number) => {
  return value.substring(0, length) + (length < value.length ? '...' : '');
};

export default shorten;
