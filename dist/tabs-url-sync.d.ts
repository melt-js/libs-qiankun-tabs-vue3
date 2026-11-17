import { UrlSyncController } from './url-sync';
import type { TabsManager } from './tab-router';
export interface TabsUrlSyncOptions {
    tabsManager: TabsManager;
    openPath: (path: string) => Promise<unknown> | unknown;
    mode?: 'hash' | 'history';
    base?: string;
    home?: {
        viewUrl: string;
        options?: Record<string, unknown>;
    };
    logger?: (event: string, payload?: unknown) => void;
}
/** Restore the first tab/deep link after mounting, then keep browser history in sync. */
export declare function createTabsUrlSync(options: TabsUrlSyncOptions): {
    controller: UrlSyncController;
    readLocation: () => string;
    /** Call after app.mount(): registered tab views must already be available. */
    setup(): Promise<void>;
    destroy(): void;
};
