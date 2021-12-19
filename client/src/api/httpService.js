import axois from 'axios';

class httpService {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  async fetch(url, options) {
    const {data} = await axois({
      url: `${this.baseUrl}${url}`,
      ...options,
    });
    if (data.status > 299 || data.status < 200) {
      const message =
        data && data.message ? data.message : 'Somethin went Wrong!';
      throw new Error(message);
    }
    return data;
  }
}

export default httpService;
