import { type Ref } from "vue";
import type { Tab } from "../../tabs/tab";
interface TabVirtualMetrics {
    offsets: number[];
    widths: number[];
}
interface UseTabScrollOptions {
    tabs: Ref<Tab[]>;
    activeTabId: Ref<string | undefined>;
    tabsViewportRef: Ref<HTMLDivElement | undefined>;
    tabsNavRef: Ref<HTMLDivElement | undefined>;
    viewportWidth: Ref<number>;
    scrollLeft: Ref<number>;
    virtualMetrics: Ref<TabVirtualMetrics>;
    estimatedActiveWidth: Ref<number>;
}
export declare function useTabScroll(options: UseTabScrollOptions): {
    canScrollLeft: Ref<boolean, boolean>;
    canScrollRight: Ref<boolean, boolean>;
    handleWheel: (event: WheelEvent) => void;
    isOverflowing: Ref<boolean, boolean>;
    scrollTabs: (direction: "left" | "right") => void;
    scrollActiveTabIntoView: () => void;
    updateScrollState: () => void;
};
export {};
