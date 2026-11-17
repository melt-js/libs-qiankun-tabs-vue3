import { PersistedTab, TabCloseGuard, TabEnterGuard, TabLeaveGuard } from "../types";
export declare class Tab {
    _id: string;
    _sourceId?: string;
    _isRefresh?: boolean;
    _isActive?: boolean;
    _noClose?: boolean;
    _noDrag?: boolean;
    _isFirst?: boolean;
    _pinned?: boolean;
    _single?: boolean;
    _noCache?: boolean;
    _loading?: boolean;
    _onBeforeTabEnter?: TabEnterGuard;
    _onBeforeTabLeave?: TabLeaveGuard;
    _onBeforeTabClose?: TabCloseGuard;
    viewName?: string;
    viewIcon?: string;
    viewUrl: string;
    viewProps?: Record<string, unknown>;
    constructor(options?: Partial<PersistedTab>);
    toJSON(): PersistedTab;
}
