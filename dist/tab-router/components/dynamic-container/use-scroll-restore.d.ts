import { type ComputedRef, type Ref } from "vue";
import type { TabsManager } from "../../tabs/tabs-manager";
/**
 * 仅为开启缓存的组件标签页保存滚动位置。
 * 共享视图层和当前页面内部已滚动的子元素会一起恢复。
 */
export declare function useScrollRestore(tabsManager: TabsManager, activeTabId: ComputedRef<string | undefined>, viewLayerRef: Ref<HTMLElement | undefined>): void;
