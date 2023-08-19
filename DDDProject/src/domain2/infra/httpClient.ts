import { AdapterAxios } from "./adapter-axios";
import { HttpClientInterface } from "./httpClient-interface";

export class HttpClient implements HttpClientInterface {
  constructor(
    private readonly apiAdapter = new AdapterAxios("http://localhost:3333")
  ) {}

  async get<T>(url: string) {
    const response = await this.apiAdapter.getApi<T>(url);
    return response.data;
  }

  async post<T>(url: string, data: unknown) {
    const response = await this.apiAdapter.postApi<T>(url, data);
    return response.data;
  }

  async put<T>(url: string, data: unknown) {
    const response = await this.apiAdapter.putApi<T>(url, data);
    return response.data;
  }

  async delete<T>(url: string) {
    const response = await this.apiAdapter.deleteApi<T>(url);
    return response.data;
  }
}
