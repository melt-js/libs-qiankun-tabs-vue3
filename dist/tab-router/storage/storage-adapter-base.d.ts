export declare abstract class AbstractStorageAdapter {
    abstract get<T = unknown>(key: string, def?: T): T;
    abstract set<T = unknown>(key: string, val: T): this;
    abstract del(key: string): this;
}
