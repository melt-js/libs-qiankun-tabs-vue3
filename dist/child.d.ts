import type { App } from 'vue';
import { MicroPageCache } from '@melt-js/libs-qiankun-tabs-core/page-cache';
import type { MicroPageRoute } from '@melt-js/libs-qiankun-tabs-core/page-cache';
import type { RouterEvent } from '@melt-js/libs-qiankun-tabs-core';
export type MicroAppCache = MicroPageCache & {
    install: (app: App) => void;
};
export declare function createMicroAppCache(routes: readonly MicroPageRoute[]): MicroAppCache;
export declare function useMicroAppCache(): MicroAppCache;
export interface MicroAppActions {
    setGlobalState: (state: Record<string, unknown>) => unknown;
    onGlobalStateChange?: (...args: unknown[]) => unknown;
}
/** One action bridge per child; standalone mode has no host to notify. */
export declare function createMicroAppActions(): {
    setActions(actions?: MicroAppActions): void;
    setGlobalState(state: Record<string, unknown>): unknown;
    onGlobalStateChange(...args: unknown[]): unknown;
};
export interface MicroChildRoute extends MicroPageRoute {
    fullPath: string;
    query: Record<string, unknown>;
}
/** Structural router interface: the host need not install vue-router. */
export interface MicroChildRouter {
    options?: {
        history: {
            readonly location: string;
        };
    };
    currentRoute: {
        readonly value: MicroChildRoute;
    };
    beforeEach: (guard: (to: MicroChildRoute) => void) => () => void;
    afterEach: (guard: (to: MicroChildRoute) => void) => () => void;
    push: (path: string) => Promise<unknown>;
    replace: (path: string) => Promise<unknown>;
    isReady: () => Promise<void>;
}
export interface MicroChildProps {
    container?: Element;
    $parentRouter?: {
        push: (path: string) => unknown;
    };
    routerEvent?: RouterEvent;
    actions?: MicroAppActions;
    setGlobalState?: MicroAppActions['setGlobalState'];
    [key: string]: unknown;
}
export interface MicroAppLifecyclesOptions {
    appName: string;
    routes: readonly MicroPageRoute[];
    root?: string;
    createRouter: () => MicroChildRouter;
    /** Return a configured Vue app; router/cache are installed by this adapter. */
    createApp: (props: MicroChildProps) => App;
    cache?: MicroAppCache;
    actions?: ReturnType<typeof createMicroAppActions>;
    menu?: readonly {
        path: string;
        title?: string;
        menu?: boolean;
    }[];
    emptyPath?: string;
}
/** Child mount/update/unmount, route reporting and fullPath cache ownership. */
export declare function createMicroAppLifecycles(options: MicroAppLifecyclesOptions): {
    bootstrap: () => Promise<void>;
    mount: (props?: MicroChildProps) => Promise<void>;
    update: (props: MicroChildProps) => Promise<void>;
    unmount: () => Promise<void>;
    cache: MicroAppCache;
    actions: {
        setActions(actions?: MicroAppActions): void;
        setGlobalState(state: Record<string, unknown>): unknown;
        onGlobalStateChange(...args: unknown[]): unknown;
    };
};
