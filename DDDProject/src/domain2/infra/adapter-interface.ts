export interface AdapterInterface {
    getApi: (url: string) => Promise<unknown>
    postApi: (url: string, data: unknown) => Promise<unknown>
    putApi: (url: string, data: unknown) => Promise<unknown>
    deleteApi: (url: string) => Promise<unknown>
}