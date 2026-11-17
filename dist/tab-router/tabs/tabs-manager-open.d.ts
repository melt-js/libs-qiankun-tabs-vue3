import { Tab } from "./tab";
import type { IOpenTabOptions } from "../types";
import type { TabOpenRuntime } from "./runtime/types";
export declare function openTab<Url extends string>(runtime: TabOpenRuntime & {
    readonly tabs: Tab[];
}, viewUrl: Url, tabOptions?: IOpenTabOptions): Promise<string | Window | null>;
