import type { Tab } from "../tab";
import type { TabsManagerRuntimeHost } from "./types";
export declare function createTabsManagerRuntime(manager: TabsManagerRuntimeHost): {
    readonly tabs: Tab[];
    readonly activeTab: Tab | undefined;
    readonly detachedTab: Partial<Tab> | null;
    readonly options: import("../..").ITabsManagerOptions;
    readonly hooks: import("..").TabsManagerHooks;
    readonly events: import("../../shared").EventManager;
    getViewMeta(viewUrl: string | undefined): {
        title?: string;
        icon?: string;
        props?: Record<string, unknown>;
    } | undefined;
    getTabById(tabId: string | undefined): Tab | undefined;
    getTabByViewUrl(viewUrl: string): Tab | undefined;
    getNoCloseTabCloseHandler(): ((tab: Partial<Tab>) => boolean | Promise<boolean>) | undefined;
    resolveComponent(name: string): unknown;
    insertTab(tab: Tab): void;
    setTabs(tabs: Tab[]): void;
    setActiveTabId(tabId: string | undefined): void;
    syncTabs(): void;
    persistTabs(): void;
    runChangeActiveTabGuards(toTab: Partial<Tab>, fromTab?: Tab): Promise<void>;
    changeActiveTab(tabId: string, triggerHook?: boolean): Promise<string>;
    refreshTab(tabId?: string): Promise<unknown>;
    closeDetachedTab(): Promise<unknown>;
};
export type TabsManagerRuntime = ReturnType<typeof createTabsManagerRuntime>;
