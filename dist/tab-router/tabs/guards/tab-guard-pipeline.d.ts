import type { ITabsManagerOptions } from "../../types";
import type { Tab } from "../tab";
import type { TabsManagerHooks } from "../tabs-manager-plugin";
export interface TabGuardPipelineRuntime {
    readonly options: ITabsManagerOptions;
    readonly hooks: TabsManagerHooks;
}
export declare function runBeforeOpenGuards(runtime: TabGuardPipelineRuntime, openingTab: Partial<Tab>, sourceTab?: Partial<Tab>): Promise<void>;
export declare function runBeforeActiveChangeGuards(runtime: TabGuardPipelineRuntime, toTab: Partial<Tab>, fromTab?: Partial<Tab>): Promise<void>;
export declare function runBeforeCloseGuards(runtime: TabGuardPipelineRuntime, closingTab: Partial<Tab>, sourceTab?: Partial<Tab>): Promise<void>;
