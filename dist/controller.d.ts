import { MicroAppRegistry, QueryStateStore } from '@melt-js/libs-qiankun-tabs-core';
import type { RouteQuery } from '@melt-js/libs-qiankun-tabs-core';
/**
 * Vue 3 适配层的页签打开逻辑。
 *
 * 关键点：内置页签管理器用
 * `viewUrl + stableStringify(viewProps)` 做页签去重，
 * 所以 viewProps 里不能放 query —— 否则 /x、/x?id=1、/x?id=2 会变成三个页签，
 * 而 qiankun 底层只有一个微应用实例，三者会互相抢路由状态。
 *
 * 这里的做法是：
 * - viewProps 只放「路径身份」等稳定字段
 * - query 存进 core 的 queryState（旁路）
 * - 同一个 identity 再次打开时，query 覆盖写入，并激活已有页签
 */
/** 所有微应用页签共用的 viewUrl */
export declare const MICRO_APP_VIEW = "/qiankun/micro-app";
/** 微应用页签的 props 形状 */
export interface MicroTabProps {
    /** 微应用名 */
    appName: string;
    /** 路径身份（不含 query） */
    path: string;
    /** 页签身份标识 */
    identity: string;
}
/** 标题生成器 */
export type TitleResolver = (args: {
    appName: string;
    path: string;
    query: RouteQuery;
    defaultTitle: string;
}) => string;
/** 打开微应用页签的入参 */
export interface OpenMicroTabOptions {
    appName: string;
    /** 路径，可含 query */
    path?: string;
    /** 完整路径，可含 query；优先级高于 path */
    fullPath?: string;
    /** query；优先级低于 fullPath 里的 query */
    query?: RouteQuery;
    /** 菜单 id */
    menuId?: string;
    /** 自定义标题（不传则由标题生成器推导） */
    title?: string;
}
/** 默认标题：应用名 / 应用名 · 子路径 */
export declare const defaultTitleResolver: TitleResolver;
/**
 * 页签管理器接口。
 * 这里只声明控制器用到的部分，兼容内置 TabsManager，也方便测试时 mock。
 */
export interface TabManagerLike {
    openTab: (viewUrl: string, options?: Record<string, unknown>) => Promise<string>;
    closeTab?: (tabId?: string) => unknown;
    updateTabOptions?: (options: Record<string, unknown>, tabId?: string) => unknown;
    getTabById?: (tabId: string | undefined) => unknown;
    tabs?: Array<{
        _id: string;
        viewUrl: string;
        viewProps?: Record<string, unknown>;
    }>;
}
export interface MicroTabControllerOptions {
    /** 页签管理器 */
    tabsManager: TabManagerLike;
    /** 微应用页签的 viewUrl，默认 '/qiankun/micro-app' */
    viewUrl?: string;
    /** 标题生成器 */
    titleResolver?: TitleResolver;
    /** 菜单查找：返回菜单的展示名和 id */
    resolveMenu?: (appName: string) => {
        id?: string;
        name?: string;
    } | undefined;
    /** 微应用注册表，默认用 core 的全局实例 */
    registry?: MicroAppRegistry;
    /** query 旁路状态，默认用 core 的全局实例 */
    queryStore?: QueryStateStore;
    /** 日志 */
    logger?: (event: string, payload?: unknown) => void;
}
/**
 * 微应用页签控制器。
 *
 * 把「打开微应用页签」这件事收敛到一个对象里，
 * 避免业务代码直接拼 viewProps 而把 query 混进去。
 */
export declare class MicroTabController {
    private options;
    private viewUrl;
    private titleResolver;
    private registry;
    private queryStore;
    private childNavigation;
    constructor(options: MicroTabControllerOptions);
    /**
     * 解析打开参数，得到路径身份、query 和标题。
     */
    resolve(input: OpenMicroTabOptions): {
        appName: string;
        path: string;
        query: RouteQuery;
        identity: string;
        title: string;
        menuId?: string;
    };
    /**
     * 打开（或激活）一个微应用页签。
     *
     * 返回 tabId。
     */
    open(input: OpenMicroTabOptions): Promise<string>;
    /**
     * 更新某个微应用页签的 query（不新建页签）。
     *
     * 适用于「同一个页面内改参数」的场景，比如列表页切换筛选条件。
     */
    updateQuery(appName: string, path: string, query: RouteQuery): boolean;
    /**
     * 读取某个微应用页签当前的 query。
     */
    getQuery(appName: string, path: string): RouteQuery;
    /**
     * 读取某个微应用页签当前的完整路径（含 query）。
     */
    getFullPath(appName: string, path: string): string;
    /** Mark before opening: a view can activate before openTab resolves. */
    markChildNavigation(identity: string): void;
    unmarkChildNavigation(identity: string): void;
    getTabFullPaths(appName: string, attachingIdentity?: string): string[];
    clearChildNavigation(): void;
    /**
     * 清理某个微应用页签的 query 状态（页签关闭时调用）。
     */
    dispose(appName: string, path: string): void;
}
/**
 * 创建一个微应用页签控制器。
 */
export declare function createMicroTabController(options: MicroTabControllerOptions): MicroTabController;
