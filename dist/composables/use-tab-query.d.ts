import type { ComputedRef, Ref } from 'vue';
import type { RouteQuery } from '@melt-js/libs-qiankun-tabs-core';
/**
 * 把 core 的 query 旁路状态桥接成 Vue 3 响应式数据。
 *
 * 页签组件通过 identity 订阅自己的 query：
 * 同一路径的 query 变化（比如 /x?id=1 -> /x?id=2），
 * 组件会收到通知并把新路由推给微应用，而不是新建页签。
 */
/** 订阅某个页签身份的 query */
export declare function useTabQuery(identity: string | Ref<string>): {
    query: ComputedRef<RouteQuery>;
    fullPath: ComputedRef<string>;
};
/**
 * 订阅某个微应用页签的 query。
 */
export declare function useMicroTabQuery(appName: string | Ref<string>, path: string | Ref<string>): {
    query: ComputedRef<RouteQuery>;
    fullPath: ComputedRef<string>;
};
/**
 * 创建一个可写的 query 引用，写入时同步回 core 的 queryState。
 */
export declare function useWritableTabQuery(identity: string): {
    query: Ref<RouteQuery>;
    fullPath: ComputedRef<string>;
    setQuery: (next: RouteQuery) => void;
};
