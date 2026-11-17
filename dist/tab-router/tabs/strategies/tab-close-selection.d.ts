import type { Tab } from "../tab";
export type CloseTabRange = "all" | "left" | "right" | "other";
export declare function getCloseTabIds(tabs: Tab[], targetTabId: string | undefined, activeTabId: string | undefined, range: CloseTabRange): string[];
