export interface TabRouterLogger {
    debug?(message: string, context?: unknown): void;
    warn?(message: string, context?: unknown): void;
    error?(message: string, context?: unknown): void;
}
export declare function resolveTabRouterLogger(logger: TabRouterLogger | false | undefined): TabRouterLogger;
