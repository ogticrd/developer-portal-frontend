const sortBy = (list: any[], key: string) => {
  return list.sort((a, b) => {
    const x = a[key];
    const y = b[key];
    return x < y ? -1 : x > y ? 1 : 0;
  });
};

export default sortBy;
