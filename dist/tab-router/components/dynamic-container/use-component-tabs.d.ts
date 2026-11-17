import { Component } from "vue";
import type { TabsManager } from "../../tabs/tabs-manager";
import type { ITabsManagerOptions } from "../../types";
export declare function useComponentTabs(tabsManager: TabsManager, managerOptions: ITabsManagerOptions | null): {
    getTabWrapper: (tabId: string) => Component;
    pruneStaleWrappers: () => void;
};
