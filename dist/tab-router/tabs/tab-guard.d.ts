import { Tab } from "./tab";
import { MaybeGuardReturn } from "../types";
import { TabRouterError } from "../shared";
export declare class TabGuardRejectError extends TabRouterError {
    constructor(message?: string);
}
export declare function runTabGuard(guard: ((tab: Partial<Tab>, relatedTab?: Partial<Tab>) => MaybeGuardReturn) | undefined, tab: Partial<Tab>, relatedTab?: Partial<Tab>): Promise<void>;
