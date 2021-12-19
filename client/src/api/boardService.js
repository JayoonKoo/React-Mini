import HttpService from './httpService';

const httpService = new HttpService('/api/Board');

class boardService {
  static async getBoards(start, length = 10) {
    const form = new URLSearchParams();
    form.append('length', length);
    form.append('start', start);
    const data = httpService.fetch('?type=page', {method: 'POST', data: form});
    return data;
  }
}

export default boardService;
