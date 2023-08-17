import { AdapterAxios } from "./adapter-axios";
import { HttpClientInterface } from "./httpClient-interface";

export class HttpClient implements HttpClientInterface {
  constructor(private readonly apiAdapter = new AdapterAxios("")) {}

  async get(url: string) {
    return await this.apiAdapter.getApi(url);
  }

  async post(url: string, data: unknown) {
    return await this.apiAdapter.postApi(url, data);
  }

  async put(url: string, data: unknown) {
    return await this.apiAdapter.putApi(url, data);
  }

  async delete(url: string) {
    return await this.apiAdapter.deleteApi(url);
  }
}
