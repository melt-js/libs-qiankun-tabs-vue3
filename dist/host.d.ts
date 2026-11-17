import type { MicroAppRegistry, MicroAppRuntime, RouteQuery } from '@melt-js/libs-qiankun-tabs-core';
import type { MicroTabController } from './controller';
import type { TabsManager } from './tab-router';
export interface MicroTabsBridgeOptions {
    tabsManager: TabsManager;
    controller: MicroTabController;
    runtime?: MicroAppRuntime;
    registry?: MicroAppRegistry;
    onRoutes?: (appName: string, routes: unknown) => void;
    logger?: (event: string, payload?: unknown) => void;
}
export interface MicroChildMessage {
    type: string;
    appName: string;
    title?: string;
    path?: string;
    routes?: unknown;
    to?: {
        path?: string;
        fullPath?: string;
        query?: RouteQuery;
        meta?: {
            title?: string;
        };
    };
}
/** Connect tab lifecycle and child messages without choosing a transport. */
export declare function installMicroTabsBridge(options: MicroTabsBridgeOptions): {
    handleMessage: (payload: MicroChildMessage) => Promise<void>;
    handleState(state: Record<string, unknown>): void;
    dispose(): void;
};
