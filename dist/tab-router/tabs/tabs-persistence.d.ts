import { AbstractStorageAdapter } from "../storage/storage-adapter-base";
import type { ITabsManagerOptions } from "../types";
export declare class TabsPersistence {
    private storageAdapter;
    private storageKey;
    private suspendCount;
    private pending;
    constructor(options: ITabsManagerOptions);
    get storage(): AbstractStorageAdapter | null;
    restore<T>(def: T): T;
    persist<T>(value: T): void;
    defer<T>(runner: () => Promise<T>, flush: () => void): Promise<T>;
    clear(): void;
}
