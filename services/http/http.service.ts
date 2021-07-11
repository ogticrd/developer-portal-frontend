import axios from 'axios';

export const get = async (url: string): Promise<any> => {
  try {
    const res = await axios.get(url);
    return res;
  } catch (err) {
    return { err };
  }
};

export const post = async (url: string, payload: any = {}): Promise<any> => {
  try {
    const res = await axios.post(url, payload);
    return res;
  } catch (err) {
    return { err };
  }
};
