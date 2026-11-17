import type { CloseTabOptions, CloseTabsOptions } from "../types";
import type { TabCloseRuntime } from "./runtime/types";
export declare function closeTabsInBatch(runtime: TabCloseRuntime, tabIds: string[], options?: CloseTabsOptions): Promise<undefined>;
export declare function closeSingleTab(runtime: TabCloseRuntime, tabId: string | undefined, options?: CloseTabOptions): Promise<undefined>;
