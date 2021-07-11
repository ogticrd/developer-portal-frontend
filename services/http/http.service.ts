import axios from 'axios';

export const get = async (url: string): Promise<any> => {
  try {
    const res = await axios.get(url);
    return res;
  } catch (err) {
    return { err };
  }
};
