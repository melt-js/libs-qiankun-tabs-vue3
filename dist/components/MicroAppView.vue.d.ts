/**
 * 微应用页签的默认视图组件。
 *
 * 它只是一个「插槽」：真正的微应用 DOM 容器由 core 的运行时创建，
 * 组件负责在激活时把容器挂进来、失活时把容器停放到隐藏停车场。
 *
 * 用法：
 * ```ts
 * const props = defineProps<{
 *   appName: string
 *   path: string
 *   identity: string
 * }>()
 * ```
 */
type __VLS_Props = {
    /** 微应用名 */
    appName: string;
    /** 路径身份（不含 query） */
    path: string;
    /** 页签身份 */
    identity?: string;
    getTabFullPaths?: () => string[];
};
declare var __VLS_1: {}, __VLS_3: {
    error: string;
    retry: () => Promise<void>;
};
type __VLS_Slots = {} & {
    loading?: (props: typeof __VLS_1) => any;
} & {
    error?: (props: typeof __VLS_3) => any;
};
declare const __VLS_component: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
