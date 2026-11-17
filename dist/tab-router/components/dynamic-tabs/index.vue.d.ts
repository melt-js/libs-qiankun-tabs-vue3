import type { TabsVirtualOptions } from "../../types";
type TabsType = "text" | "line" | "card" | "rounded" | "capsule";
type __VLS_Props = {
    type?: TabsType;
    showIcon?: boolean;
    defaultIcon?: string;
    /** 标签标题最大显示长度。优先级高于全局 render.tabs.titleMaxLength。 */
    titleMaxLength?: number;
    /** 是否启用拖拽排序。优先级高于全局 render.tabs.draggable。 */
    draggable?: boolean;
    /** 内置标签栏虚拟滚动配置。优先级高于全局 render.tabs.virtual，默认启用。 */
    virtual?: TabsVirtualOptions;
    /** 隐藏 _isFirst 标记的首页标签（预览模式下使用）。 */
    hideFirst?: boolean;
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {
    type: TabsType;
    draggable: boolean;
    showIcon: boolean;
    virtual: TabsVirtualOptions;
    hideFirst: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
