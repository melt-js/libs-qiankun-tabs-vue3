import type { TabsManagerPlugin } from "../../tabs";
import type { CreateTabUrlSyncPluginOptions, TabUrlSyncRouter } from "./types";
export type { CreateTabUrlSyncPluginOptions, TabUrlState, TabUrlSyncRoute, TabUrlSyncRouter } from "./types";
export declare function createTabUrlSyncPlugin(router: TabUrlSyncRouter, options?: CreateTabUrlSyncPluginOptions): TabsManagerPlugin;
