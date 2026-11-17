export type TabRouterErrorCode = "TAB_NOT_FOUND" | "VIEW_NOT_REGISTERED" | "GUARD_REJECTED" | "URL_SYNC_FAILED" | "IFRAME_MESSAGE_FAILED";
export declare class TabRouterError extends Error {
    readonly code: TabRouterErrorCode;
    readonly cause?: unknown | undefined;
    constructor(code: TabRouterErrorCode, message: string, cause?: unknown | undefined);
}
export declare function createTabRouterError(code: TabRouterErrorCode, message: string, cause?: unknown): TabRouterError;
export declare function createTabNotFoundError(tabId: string | undefined): TabRouterError;
export declare function createViewNotRegisteredError(viewUrl: string): TabRouterError;
