import { type ComponentPublicInstance, type Ref } from "vue";
import type { Tab } from "../../tabs/tab";
import type { TabsVirtualOptions } from "../../types";
export interface VirtualTab {
    tab: Tab;
    offset: number;
}
export interface ResolvedTabsVirtualOptions {
    enabled: boolean;
    threshold: number;
    overscan: number;
    estimatedWidth: number;
    minWidth: number;
    maxWidth: number;
}
interface UseTabVirtualListOptions {
    tabs: Ref<Tab[]>;
    scrollLeft: Ref<number>;
    viewportWidth: Ref<number>;
    virtualOptions: Ref<Array<TabsVirtualOptions | undefined>>;
    maxTitleLength: Ref<number | undefined>;
    showIcon: Ref<boolean>;
    defaultIcon: Ref<string | undefined>;
    onMeasure?: () => void;
}
export declare function resolveTabsVirtualOptions(...optionsList: Array<TabsVirtualOptions | undefined>): ResolvedTabsVirtualOptions;
export declare function useTabVirtualList(options: UseTabVirtualListOptions): {
    isVirtualEnabled: import("vue").ComputedRef<boolean>;
    resolvedVirtualOptions: import("vue").ComputedRef<{
        maxWidth: number;
        enabled: boolean;
        threshold: number;
        overscan: number;
        estimatedWidth: number;
        minWidth: number;
    }>;
    setTabItemRef: (tabId: string, el: Element | ComponentPublicInstance | null) => void;
    virtualMetrics: import("vue").ComputedRef<{
        offsets: number[];
        widths: number[];
        totalWidth: number;
    }>;
    virtualTabs: import("vue").ComputedRef<VirtualTab[]>;
    virtualTotalWidth: import("vue").ComputedRef<number>;
};
export {};
