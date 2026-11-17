import type { Tab } from "../../../tabs/tab";
import type { TabsManager } from "../../../tabs/tabs-manager";
import type { ITabsManagerOptions } from "../../../types";
export declare function createIframeMessageDispatcher(tabsManager: TabsManager, managerOptions: ITabsManagerOptions | null): {
    emitIframeMessage: (event: MessageEvent, tab: Tab) => Promise<void>;
};
export type IframeMessageDispatcher = ReturnType<typeof createIframeMessageDispatcher>;
