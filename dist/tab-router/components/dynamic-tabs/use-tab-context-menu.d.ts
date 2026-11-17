import type { Tab } from "../../tabs/tab";
import type { TabsManager } from "../../tabs/tabs-manager";
export type TabContextAction = "detach" | "refresh" | "toggle-pinned" | "close-left" | "close-right" | "close-other" | "close-all" | "refresh-all";
export declare function useTabContextMenu(tabsManager: TabsManager): {
    closeContextMenu: () => void;
    contextAction: (eventName: TabContextAction) => void;
    contextMenu: {
        visible: boolean;
        x: number;
        y: number;
        tab: {
            _id: string;
            _sourceId?: string | undefined;
            _isRefresh?: boolean | undefined;
            _isActive?: boolean | undefined;
            _noClose?: boolean | undefined;
            _noDrag?: boolean | undefined;
            _isFirst?: boolean | undefined;
            _pinned?: boolean | undefined;
            _single?: boolean | undefined;
            _noCache?: boolean | undefined;
            _loading?: boolean | undefined;
            _onBeforeTabEnter?: import("../..").TabEnterGuard | undefined;
            _onBeforeTabLeave?: import("../..").TabLeaveGuard | undefined;
            _onBeforeTabClose?: import("../..").TabCloseGuard | undefined;
            viewName?: string | undefined;
            viewIcon?: string | undefined;
            viewUrl: string;
            viewProps?: Record<string, unknown> | undefined;
            toJSON: () => import("../..").PersistedTab;
        } | null;
    };
    handleDetachedError: (error: unknown) => void;
    openContextMenu: (event: MouseEvent, tab: Tab) => void;
};
