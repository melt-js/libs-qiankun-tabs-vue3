import type { ComputedRef, Ref } from 'vue';
import type { MicroAppState } from '@melt-js/libs-qiankun-tabs-core';
/**
 * Vue 3 侧的微应用保活 composable。
 *
 * 生命周期对应关系：
 * - mounted / activated -> 把容器挂到当前页签插槽，并切到本页签的路由
 * - deactivated           -> 把容器停放到隐藏停车场，实例保持 MOUNTED（qiankun 保活）
 * - beforeUnmount         -> 同样停放；只有当该微应用没有任何页签时才真正 unmount
 */
/** 微应用保活 composable 的选项 */
export interface UseMicroAppOptions {
    /** 微应用名 */
    appName: string;
    /** 路径身份（不含 query） */
    path: string;
    /** 页签身份；不传则由 appName + path 计算 */
    identity?: string;
    /** 当前页签的插槽 DOM */
    slotRef: Ref<HTMLElement | null>;
    /** 是否在卸载时销毁微应用实例（默认 false：交给「最后一个页签关闭」的策略处理） */
    destroyOnUnmount?: boolean;
    /**
     * 返回当前拥有**独立页签**的 fullPath 集合。
     *
     * 微应用据此决定哪些 fullPath 要保活：
     * - 有独立页签的 fullPath -> 该页签要保住内容；
     * - 没有独立页签的 fullPath -> 子应用内部导航过去的
     *   -> 子页面永远刷新。
     *
     * 默认返回空集合（= 都不保活），由宿主按需覆盖。
     */
    getTabFullPaths?: () => string[];
}
/** 微应用保活 composable 的返回值 */
export interface UseMicroAppReturn {
    /** 微应用状态 */
    state: ComputedRef<MicroAppState>;
    /** 当前路由的完整路径（含 query） */
    fullPath: ComputedRef<string>;
    /** 是否处于加载中 */
    loading: ComputedRef<boolean>;
    /** 是否出错 */
    error: ComputedRef<string>;
    /** 手动重试 */
    retry: () => Promise<void>;
    /** 刷新当前页 */
    refresh: () => Promise<void>;
}
export declare function useMicroApp(options: UseMicroAppOptions): UseMicroAppReturn;
/**
 * 判断某个路径是否属于已注册的微应用。
 */
export declare function useIsMicroPath(path: string | Ref<string>): ComputedRef<boolean>;
/**
 * 解析一个 fullPath 为微应用路由信息。
 */
export declare function useResolveMicroRoute(fullPath: string | Ref<string>): ComputedRef<{
    appName: string | undefined;
    path: string;
    query: import("@melt-js/libs-qiankun-tabs-core").RouteQuery;
    identity: string;
}>;
