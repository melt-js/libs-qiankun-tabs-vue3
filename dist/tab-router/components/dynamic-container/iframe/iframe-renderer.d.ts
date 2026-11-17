import type { Tab } from "../../../tabs/tab";
import type { TabsManager } from "../../../tabs/tabs-manager";
import type { ITabsManagerOptions } from "../../../types";
import type { IframeMessageDispatcher } from "./iframe-message-dispatcher";
import type { IframeTabRegistry } from "./iframe-tab-registry";
import type { IframeControllerStyleManager } from "./iframe-controller-style";
export declare function createIframeRenderer(tabsManager: TabsManager, managerOptions: ITabsManagerOptions | null, iframeRegistry: IframeTabRegistry, iframeDispatcher: IframeMessageDispatcher, styleManager: IframeControllerStyleManager): {
    renderCachedIframeLayer: (cachedIframeTabs: Tab[], activeCachedIframeTabId: string | undefined) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>;
    renderIframe: (currentTab: Tab) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>;
};
