import type { Tab } from "../../tabs";
import type { IOpenTabOptions } from "../../types";
import type { CreateTabUrlSyncPluginOptions, RouteQuery, TabUrlState, TabUrlSyncRoute, TabUrlSyncRouter } from "./types";
declare const DEFAULT_QUERY_KEY = "tab";
export declare function getCurrentRoute(router: TabUrlSyncRouter): TabUrlSyncRoute;
export declare function getQueryValue(query: RouteQuery | undefined, key: string): string | undefined;
export declare function defaultSerialize(state: TabUrlState): string;
export declare function defaultDeserialize(value: string): TabUrlState | undefined;
export declare function shouldSyncRoute(route: TabUrlSyncRoute, routePath: CreateTabUrlSyncPluginOptions["routePath"]): boolean;
export declare function hasRecordValue(record: Record<string, unknown> | undefined): boolean;
export declare function normalizeState(tab: Partial<Tab> | undefined): TabUrlState | undefined;
export declare function isSameState(left: TabUrlState | undefined, right: TabUrlState | undefined): boolean;
export declare function createOpenOptions(state: TabUrlState): IOpenTabOptions;
export declare function isAllowedState(state: TabUrlState, route: TabUrlSyncRoute, options: CreateTabUrlSyncPluginOptions): boolean;
export declare function clearQueryValue(query: RouteQuery, key: string): {
    [x: string]: import("./types").RouteQueryValue | import("./types").RouteQueryValue[];
};
export { DEFAULT_QUERY_KEY };
