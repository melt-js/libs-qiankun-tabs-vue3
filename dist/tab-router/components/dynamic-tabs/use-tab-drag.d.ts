import type { Tab } from "../../tabs/tab";
import type { TabsManager } from "../../tabs/tabs-manager";
type DropPosition = "before" | "after";
interface UseTabDragOptions {
    tabsManager: TabsManager;
    isTabDraggable: (tab: Tab) => boolean;
}
export declare function useTabDrag(options: UseTabDragOptions): {
    draggingTabId: import("vue").Ref<string | undefined, string | undefined>;
    dropPosition: import("vue").Ref<DropPosition, DropPosition>;
    dropTargetTabId: import("vue").Ref<string | undefined, string | undefined>;
    handleDragEnd: () => void;
    handleDragLeave: (event: DragEvent, targetTab: Tab) => void;
    handleDragOver: (event: DragEvent, targetTab: Tab) => void;
    handleDragStart: (event: DragEvent, tab: Tab) => void;
    handleDrop: (event: DragEvent, targetTab: Tab) => Promise<void>;
};
export {};
