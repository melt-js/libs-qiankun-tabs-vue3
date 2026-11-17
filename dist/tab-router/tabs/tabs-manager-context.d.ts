import { App, Component, InjectionKey } from "vue";
import type { ITabsManagerOptions, TabViewMeta } from "../types";
import type { TabsManager } from "./tabs-manager";
export declare const TABS_MANAGER_KEY: InjectionKey<TabsManager>;
export declare function setCurrentTabsManager(tabsManager: TabsManager | undefined): void;
export declare function clearCurrentTabsManager(tabsManager: TabsManager | undefined): void;
export declare function getCurrentTabsManager(): TabsManager | undefined;
export declare class TabsSharedContext {
    private readonly options;
    private app;
    private registered;
    private componentMap;
    private viewMetaPathMap;
    constructor(options: ITabsManagerOptions);
    get modules(): Record<string, () => Promise<Component>> | Record<string, Component>;
    get source(): Partial<import("vue").AsyncComponentOptions<any>> | undefined;
    get registerTabPaths(): string[];
    get viewMeta(): TabViewMeta[];
    bindApp(app: App): this;
    registerModules(): void;
    resolveComponent(viewId: string): import("vue").ComponentOptions<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions, any, any, any, string, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions> | import("vue").FunctionalComponent<any, {}, any, {}> | {
        new (...args: any[]): any;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } | undefined;
    getViewMeta(viewUrl: string | undefined): TabViewMeta | undefined;
    getViewMetaPath(viewUrl: string | undefined): TabViewMeta[];
    private indexViewMeta;
    private transformModules;
    private createComponent;
    private appComponentExists;
}
export declare function provideTabsManager(app: App, tabsManager: TabsManager): TabsManager;
