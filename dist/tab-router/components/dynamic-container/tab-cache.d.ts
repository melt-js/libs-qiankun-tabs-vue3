import type { Tab } from "../../tabs/tab";
export declare const getTabCacheName: (tabId: string) => string;
export declare const isIframeTab: (tab: Partial<Tab>) => boolean;
export declare const isIframeControllerTab: (tab: Partial<Tab>) => boolean;
export declare const shouldCacheTab: (tab: Tab) => boolean;
export declare const shouldCacheComponentTab: (tab: Tab) => boolean;
export declare const shouldCacheIframeTab: (tab: Tab) => boolean;
