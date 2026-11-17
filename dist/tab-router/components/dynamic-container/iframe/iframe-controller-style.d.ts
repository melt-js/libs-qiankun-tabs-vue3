import type { Tab } from "../../../tabs/tab";
import type { TabsManager } from "../../../tabs/tabs-manager";
import type { IframeTabRegistry } from "./iframe-tab-registry";
export declare function createIframeControllerStyleManager(tabsManager: TabsManager, iframeRegistry: IframeTabRegistry): {
    applyLoadedIframeControllerStyles: (tab: Pick<Tab, "_id">, iframe: HTMLIFrameElement) => void;
    syncLoadedIframeControllerStyles: (tab: Pick<Tab, "_id">) => void;
};
export type IframeControllerStyleManager = ReturnType<typeof createIframeControllerStyleManager>;
