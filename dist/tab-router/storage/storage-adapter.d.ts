import { AbstractStorageAdapter } from "./storage-adapter-base";
type StorageLike = Pick<Storage, "getItem" | "setItem" | "removeItem">;
export declare class StorageAdapter extends AbstractStorageAdapter {
    private readonly storage;
    constructor(storage?: StorageLike);
    get<T = unknown>(key: string, def?: T): T;
    set<T = unknown>(key: string, val: T): this;
    del(key: string): this;
}
export {};
