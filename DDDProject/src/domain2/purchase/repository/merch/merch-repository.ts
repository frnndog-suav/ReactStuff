import { HttpClient } from "../../infra/httpClient";
import { RepositoryInterface } from "../repository-interface";

export class MerchRepository implements RepositoryInterface {
  constructor(private readonly httpClient = new HttpClient()) {}

  async create<MerchObjectValueType>(merch: MerchObjectValueType) {
    try {
      await this.httpClient.post("", merch);
    } catch (error) {
      throw new Error("Error in creating new merch");
    }
  }

  async update<MerchEntityType>(merch: MerchEntityType) {
    try {
      await this.httpClient.put("", merch);
    } catch (error) {
      throw new Error("Error in updating a merch");
    }
  }

  async delete(id: string) {
    try {
      await this.httpClient.delete(`${id}`);
    } catch (error) {
      throw new Error("Error in deleting a merch");
    }
  }

  async list() {
    try {
      return await this.httpClient.get("");
    } catch (error) {
      throw new Error("Error in listing all merchs");
    }
  }
}
