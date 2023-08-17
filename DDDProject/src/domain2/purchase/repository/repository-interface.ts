export interface RepositoryInterface {
  create: <T>(objValue: T) => Promise<void>;
  update: <T>(entity: T) => Promise<void>;
  delete: (id: string) => Promise<void>;
  list: () => Promise<unknown>;
}
