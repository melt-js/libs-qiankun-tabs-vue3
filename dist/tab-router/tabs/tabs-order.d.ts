import { Tab } from "./tab";
export type MoveTabPosition = "before" | "after";
export declare function insertTab(tabs: Tab[], tab: Tab): void;
export declare function sortPinnedTabs(tabs: Tab[]): Tab[];
export declare function getMoveTabState(tabs: Tab[], tabId: string | undefined, targetTabId: string | undefined, position: MoveTabPosition): {
    movingIndex: number;
    insertIndex: number;
    movingTab: Tab;
} | undefined;
export declare function moveTab(tabs: Tab[], tabId: string, targetTabId: string, position: MoveTabPosition): boolean;
export declare function swapTabByIndex(tabs: Tab[], tabIndex1: number, tabIndex2: number): boolean;
