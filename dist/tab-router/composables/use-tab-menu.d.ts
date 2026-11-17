import { MaybeRefOrGetter, type ComputedRef } from "vue";
import type { Tab } from "../tabs/tab";
import { useTabsManager } from "./use-tabs-manager";
export type TabMenuProps = Record<string, unknown> | string | null | undefined;
/** 可被 useTabMenu 默认识别的菜单项结构。 */
export interface TabMenuItemLike {
    /** 菜单唯一标识。没有页面地址时作为兜底 key。 */
    id?: string | number;
    /** 菜单名称，同时会作为打开 tab 的默认标题。 */
    name?: string;
    /** 菜单标题，同时会作为打开 tab 的默认标题。 */
    title?: string;
    /** 页面地址。 */
    url?: string;
    /** 页面地址，兼容 uri 命名。 */
    uri?: string;
    /** 页面地址，兼容 viewUrl 命名。 */
    viewUrl?: string;
    /** 菜单图标，同时会作为打开 tab 的默认图标。 */
    icon?: string;
    /** 打开 tab 时传入的参数。 */
    props?: TabMenuProps;
    /** 打开 tab 时传入的参数，兼容 viewProps 命名。 */
    viewProps?: TabMenuProps;
    /** 子菜单。 */
    children?: TabMenuItemLike[];
}
/** 菜单 key 生成选项。 */
export interface TabMenuKeyOptions {
    /** 是否把不会写入 tab.viewProps 的打开参数计入菜单选中 key。 */
    includeTabOptionsInKey?: boolean;
}
/** useTabMenu 配置项。 */
export interface UseTabMenuOptions<Menu extends object = TabMenuItemLike> extends TabMenuKeyOptions {
    /** 菜单树，可传响应式 getter。 */
    menus?: MaybeRefOrGetter<Menu[] | undefined>;
    /** 自定义读取子菜单。 */
    getChildren?: (menu: Menu) => Menu[] | undefined;
    /** 自定义读取页面地址。 */
    getViewUrl?: (menu: Menu) => string | undefined;
    /** 自定义读取 tab 标题。 */
    getViewName?: (menu: Menu) => string | undefined;
    /** 自定义读取 tab 图标。 */
    getViewIcon?: (menu: Menu) => string | undefined;
    /** 自定义读取打开 tab 时的参数。 */
    getViewProps?: (menu: Menu) => TabMenuProps;
    /** 自定义菜单 key。需要与 getTabKey 保持一致才能正确选中。 */
    getMenuKey?: (menu: Menu) => string;
    /** 自定义 tab key。需要与 getMenuKey 保持一致才能正确选中。 */
    getTabKey?: (tab: Partial<Tab>) => string;
}
/** useTabMenu 返回值。 */
export interface UseTabMenuReturn<Menu extends object = TabMenuItemLike> {
    /** 当前响应式 TabsManager 实例。 */
    tabsManager: ReturnType<typeof useTabsManager>;
    /** 当前菜单选中 key，可直接绑定菜单组件。 */
    selectedKeys: ComputedRef<string[]>;
    /** 当前激活 tab 对应的菜单路径。 */
    activeMenuPath: ComputedRef<Menu[]>;
    /** 当前激活 tab 对应的面包屑数据。 */
    breadcrumbs: ComputedRef<TabBreadcrumbItem<Menu>[]>;
    /** 获取菜单项 key。 */
    getMenuKey: (menu: Menu) => string;
    /** 获取 tab 对应的菜单 key。 */
    getTabKey: (tab: Partial<Tab>) => string;
    /** 按 key 从菜单树中查找菜单项。 */
    findMenu: (key: string, menus?: Menu[]) => Menu | undefined;
    /** 按 key 从菜单树中查找菜单路径。 */
    findMenuPath: (key: string, menus?: Menu[]) => Menu[];
    /** 打开指定菜单项对应的 tab。 */
    openMenu: (menu: Menu) => Promise<unknown>;
    /** 菜单点击处理函数，可直接绑定 menu-item-click。 */
    handleMenuItemClick: (key: string) => Promise<unknown>;
}
/** 面包屑数据项。 */
export interface TabBreadcrumbItem<Menu extends object = TabMenuItemLike> {
    /** 面包屑唯一 key。 */
    key: string;
    /** 面包屑显示标题。 */
    title: string;
    /** 面包屑图标。 */
    icon?: string;
    /** 对应菜单项；fallback 项可能不存在。 */
    menu?: Menu;
    /** 对应页面地址。 */
    viewUrl?: string;
    /** 是否可点击打开对应 tab。 */
    clickable: boolean;
}
export declare function normalizeTabMenuProps(props: TabMenuProps, options?: TabMenuKeyOptions): Record<string, unknown>;
/** 根据页面地址和参数创建稳定菜单 key。 */
export declare function createTabMenuKey(viewUrl: string | undefined, props?: TabMenuProps, options?: TabMenuKeyOptions): string;
/** 根据菜单项创建稳定菜单 key。 */
export declare function getTabMenuKey(menu: Partial<TabMenuItemLike>, options?: TabMenuKeyOptions): string;
export declare function findMenuPathByKey<Menu extends object>(menus: Menu[], key: string, getKey: (menu: Menu) => string, getChildren: (menu: Menu) => Menu[] | undefined): Menu[];
export declare function useTabMenu<Menu extends object = TabMenuItemLike>(options?: UseTabMenuOptions<Menu>): UseTabMenuReturn<Menu>;
