import type { RouteQuery } from '@melt-js/libs-qiankun-tabs-core';
/**
 * 地址栏 <-> 激活页签 双向同步。
 *
 * 关键点：页签的 viewProps 里没有 query，query 在旁路状态里。
 * 所以从页签算地址栏时，要用「路径身份 + queryState 里的 query」拼回 fullPath，
 * 不能直接读 viewProps.fullPath。
 */
/** 地址栏同步选项 */
export interface UrlSyncOptions {
    /** 读取当前激活页签：返回 identity、path、title，或 undefined */
    getActiveTab: () => {
        identity?: string;
        path?: string;
        title?: string;
        fullPath?: string;
    } | undefined;
    /** 打开某个路径对应的页签 */
    openPath: (fullPath: string) => Promise<unknown> | unknown;
    /** 写地址栏 */
    writeLocation: (fullPath: string, replace: boolean) => void;
    /** 读地址栏 */
    readLocation: () => string;
    /** 是否处于启动阶段（启动期间不写地址栏） */
    isBooting?: () => boolean;
    /** 日志 */
    logger?: (event: string, payload?: unknown) => void;
    /** Path to open when the location is empty or unknown. */
    fallbackPath?: string;
}
/**
 * 计算某个页签身份对应的完整路径（含 query）。
 */
export declare function fullPathOfIdentity(identity: string | undefined, path: string | undefined): string;
/**
 * 地址栏同步控制器。
 */
export declare class UrlSyncController {
    private options;
    private writing;
    private stopWatch;
    private stopQuerySubscription;
    constructor(options: UrlSyncOptions);
    /** 写地址栏 */
    private write;
    /** 激活页签变化时同步地址栏 */
    syncActiveTab(): void;
    /** 地址栏变化时打开对应页签 */
    handleLocationChange(): Promise<void>;
    /** 启动监听 */
    setup(): void;
    /** 停止监听 */
    destroy(): void;
    /** QueryStateStore is framework-agnostic, so subscribe explicitly to query updates. */
    private bindActiveQuery;
    /**
     * 地址栏变化的回调（绑定 this，供事件监听使用）。
     */
    onLocationChange: () => void;
}
/**
 * 从 fullPath 里取出 query。
 */
export declare function queryOf(fullPath: string): RouteQuery;
/**
 * 读取某个身份的当前 query。
 */
export declare function queryOfIdentity(identity: string): RouteQuery;
/**
 * 由 appName + path 计算身份。
 */
export declare function identityOf(appName: string, path: string): string;
