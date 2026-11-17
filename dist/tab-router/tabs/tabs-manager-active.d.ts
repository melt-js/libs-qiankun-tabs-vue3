import { Tab } from "./tab";
import type { TabActiveRuntime } from "./runtime/types";
export declare function runChangeActiveTabGuards(runtime: TabActiveRuntime, toTab: Partial<Tab>, fromTab?: Tab | undefined): Promise<void>;
export declare function changeActiveTab(runtime: TabActiveRuntime, tabId: string, triggerHook?: boolean): Promise<string>;
