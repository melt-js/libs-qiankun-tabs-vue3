import type { TabsManager } from "../../tabs/tabs-manager";
import type { ITabsManagerOptions } from "../../types";
export declare function useIframeTabs(tabsManager: TabsManager, managerOptions: ITabsManagerOptions | null): {
    activeCachedIframeTabId: import("vue").ComputedRef<string | undefined>;
    cachedIframeRender: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>;
    getIframeRenderKey: (tabId: string) => string;
    hasActiveCachedIframe: import("vue").ComputedRef<boolean>;
    hasCachedIframeTabs: import("vue").ComputedRef<boolean>;
    renderIframe: (currentTab: import("../..").Tab) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>;
};
