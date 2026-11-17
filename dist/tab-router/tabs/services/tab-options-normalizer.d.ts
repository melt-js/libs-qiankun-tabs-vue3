import type { IOpenTabOptions, IUpdateTabOptions } from "../../types";
import type { Tab } from "../tab";
export interface TabViewMetaDefaults {
    title?: string;
    icon?: string;
    props?: Record<string, unknown>;
}
export interface NormalizedOpenTabOptions {
    viewOutside?: IOpenTabOptions["_viewOutside"];
    viewName?: string;
    viewIcon?: string;
    viewNoCache?: boolean;
    viewSingle?: boolean;
    viewPinned?: boolean;
    viewNoClose?: boolean;
    viewNoDrag?: boolean;
    viewProps: Record<string, unknown>;
}
export declare function normalizeOpenTabOptions(viewUrl: string, viewMeta: TabViewMetaDefaults | undefined, tabOptions?: IOpenTabOptions): NormalizedOpenTabOptions;
export declare function normalizeUpdateTabOptions(tab: Tab, options: IUpdateTabOptions | string): {
    viewName: string | undefined;
    viewIcon: string | undefined;
    viewUrl: string;
    viewProps: {
        [x: string]: unknown;
    };
    _noCache: boolean | undefined;
    _single: boolean | undefined;
    _pinned: boolean | undefined;
    _noClose: boolean | undefined;
    _noDrag: boolean | undefined;
};
