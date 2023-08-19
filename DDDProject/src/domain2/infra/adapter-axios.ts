import axios, { Axios } from "axios";
import { AdapterInterface } from "./adapter-interface";

export class AdapterAxios implements AdapterInterface {
  private readonly api: Axios;

  constructor(private readonly baseUrl: string) {
    this.api = axios.create({ baseURL: this.baseUrl });
  }

  get getAxios() {
    return this.api;
  }

  async getApi<T>(url: string) {
    return this.api.get<T>(url);
  }

  async postApi<T>(url: string, data: unknown) {
    return this.api.post<T>(url, data);
  }

  async putApi<T>(url: string, data: unknown) {
    return this.api.put<T>(url, data);
  }

  async deleteApi<T>(url: string) {
    return this.api.delete<T>(url);
  }
}
