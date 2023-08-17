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

  async getApi(url: string) {
    return this.api.get(url);
  }

  async postApi(url: string, data: unknown) {
    return this.api.post(url, data);
  }

  async putApi(url: string, data: unknown) {
    return this.api.put(url, data);
  }

  async deleteApi(url: string) {
    return this.api.delete(url);
  }
}
