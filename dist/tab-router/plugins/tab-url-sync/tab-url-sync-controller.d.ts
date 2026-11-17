import type { Tab } from "../../tabs";
import type { TabsManager } from "../../tabs/tabs-manager";
import type { CreateTabUrlSyncPluginOptions, TabUrlState, TabUrlSyncRoute, TabUrlSyncRouter } from "./types";
export interface TabUrlSyncControllerOptions {
    router: TabUrlSyncRouter;
    tabsManager: TabsManager;
    options: CreateTabUrlSyncPluginOptions;
    reportError(error: unknown): void;
    onRouteApplied(tab: Partial<Tab> | undefined): void;
}
export declare function createTabUrlSyncController({ router, tabsManager, options, reportError, onRouteApplied, }: TabUrlSyncControllerOptions): {
    readonly applyingRoute: boolean;
    applyRouteState: (route: TabUrlSyncRoute, replaceAfterOpen?: boolean) => Promise<void>;
    syncInitialActiveTabToRoute: () => Promise<void>;
    writeStateToRoute: (state: TabUrlState | undefined, mode?: "push" | "replace") => Promise<void>;
};
export type TabUrlSyncController = ReturnType<typeof createTabUrlSyncController>;
