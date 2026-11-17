import type { Tab } from "../tab";
export declare function resolveRemainingSourceId(sourceId: string | undefined, closingSourceIds: Map<string, string | undefined>): string | undefined;
export declare function getFallbackTabAfterBatchClose(tabs: Tab[], getTabById: (tabId: string | undefined) => Tab | undefined, closingTab: Tab, closingIds: Set<string>, closingSourceIds: Map<string, string | undefined>): Tab | undefined;
export declare function getFallbackTabAfterSingleClose(tabs: Tab[], getTabById: (tabId: string | undefined) => Tab | undefined, closingTab: Tab, closingIndex: number): Tab;
