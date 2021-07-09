import axios from 'axios';

export class HttpService {
  async get(url: string): Promise<any> {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(url);
        return res.data;
      } catch (err) {
        console.error(err);
      }
    });
  }
}
