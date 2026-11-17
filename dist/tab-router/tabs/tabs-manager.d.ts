import { App } from "vue";
import type { IframePostMessageOptions } from "../iframe";
import { Tab } from "./tab";
import { CloseTabOptions, CloseTabsOptions, IOpenTabOptions, IframeControllerOptions, ITabsManagerOptions, IUpdateTabOptions, TabCloseGuard, TabEnterGuard, TabLeaveGuard, ViewOutsideOptions } from "../types";
import { TabsManagerHooks } from "./tabs-manager-plugin";
import { EventManager } from "../shared";
import { TabsSharedContext } from "./tabs-manager-context";
export interface RegisteredIframeControllerOptions {
    src?: string;
    styles?: string;
    messageOrigins?: IframeControllerOptions["messageOrigins"];
    onLoad?: IframeControllerOptions["onLoad"];
    onMessage?: IframeControllerOptions["onMessage"];
}
export declare class TabsManager {
    private _options;
    private _app;
    private _tabs;
    private _tabById;
    private _firstTabByViewUrl;
    private _activeTabId?;
    private _activeTab?;
    private _detachedTab;
    private _refreshAllTabFlag;
    private _persistence;
    private _hooks;
    private _pluginCleanups;
    private _pluginsLoaded;
    private _reactiveManager;
    private _noCloseTabCloseHandler?;
    private _iframeMessenger?;
    private _iframeControllerOptions;
    readonly events: EventManager;
    constructor(options: ITabsManagerOptions, sharedContext?: TabsSharedContext);
    private readonly sharedContext;
    get app(): App<any> | null;
    get options(): ITabsManagerOptions;
    get storage(): import("..").AbstractStorageAdapter | null;
    get hooks(): TabsManagerHooks;
    get refreshAllTabFlag(): boolean;
    /**
     * 当前打开的标签页数组
     */
    get tabs(): Tab[];
    /**
     * 当前激活的标签页
     */
    get activeTab(): Tab | undefined;
    get detachedTab(): Partial<Tab> | null;
    get detachedZIndex(): number;
    get detachedFullscreen(): boolean;
    /**
     * 获取全部注册的标签页路径
     */
    get registerTabPaths(): string[];
    /**
     * 获取当前激活的标签页的父路径
     */
    get activeTabParentPaths(): string[];
    getViewMeta(viewUrl: string | undefined): import("..").TabViewMeta | undefined;
    getViewMetaPath(viewUrl: string | undefined): import("..").TabViewMeta[];
    createScopedManager(options?: Partial<ITabsManagerOptions>): TabsManager;
    private restoreTabs;
    persistTabs(): void;
    private deferPersist;
    private clearPersistedTabs;
    private setupPlugins;
    private disposePlugins;
    getReactiveManager(): TabsManager;
    private getStateManager;
    private getRuntime;
    private getCloseRuntime;
    private getActiveRuntime;
    private getOpenRuntime;
    /**
     * 按 tabId 获取标签页实例。
     */
    getTabById(tabId: string | undefined): Tab | undefined;
    _setIframeControllerOptions(tabId: string, options: RegisteredIframeControllerOptions): void;
    _getIframeControllerOptions(tabId: string | undefined): RegisteredIframeControllerOptions | undefined;
    _clearIframeControllerOptions(tabId: string | undefined): void;
    getTabByViewUrl(viewUrl: string): Tab | undefined;
    resolveComponent(name: string): import("vue").ComponentOptions<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions, any, any, any, string, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions> | import("vue").FunctionalComponent<any, {}, any, {}> | {
        new (...args: any[]): any;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } | undefined;
    insertTab(tab: Tab): void;
    private sortPinnedTabs;
    setTabs(tabs: Tab[]): void;
    syncTabs(): void;
    private rebuildTabIndexes;
    private syncActiveTabId;
    setActiveTabId(tabId: string | undefined): void;
    getNoCloseTabCloseHandler(): ((tab: Partial<Tab>) => boolean | Promise<boolean>) | undefined;
    private setTabNoAllowClose;
    private setFirstTab;
    /** 激活首页标签（`_isFirst` 为 true 的 tab）。 */
    activeFirstTab(): Promise<void>;
    /**
     * 打开首页标签。
     *
     * - `clear`: 清空后再打开
     * - `replace`: 替换已有首页
     * - `move`: 打开后移动到首位
     */
    openFirstTab<Url extends string>(viewUrl: Url, tabOptions?: Omit<IOpenTabOptions, "_viewOutside">, mode?: "clear" | "replace" | "move"): Promise<string>;
    _registerTabGuard(tabId: string, guardName: "_onBeforeTabEnter", guard: TabEnterGuard): void;
    _registerTabGuard(tabId: string, guardName: "_onBeforeTabLeave", guard: TabLeaveGuard): void;
    _registerTabGuard(tabId: string, guardName: "_onBeforeTabClose", guard: TabCloseGuard): void;
    _setIframeMessenger(messenger?: (tabId: string, data: unknown, targetOrigin?: string, transfer?: Transferable[]) => boolean): void;
    _setNoCloseTabCloseHandler(handler?: (tab: Partial<Tab>) => boolean | Promise<boolean>): void;
    openDetachedTab(tabId?: string): Promise<Partial<Tab>>;
    closeDetachedTab(): Promise<void>;
    /**
     * 向 iframe 标签页发送消息。不传 tabId 时发送给当前激活 iframe。
     */
    postIframeMessage(data: unknown, options?: IframePostMessageOptions | null, tabId?: string | undefined): boolean;
    runChangeActiveTabGuards(toTab: Partial<Tab>, fromTab?: Tab | undefined): Promise<void>;
    /**
     * 切换当前激活标签页。
     * @param triggerHook 是否触发全局进入守卫。
     */
    changeActiveTab(tabId: string, triggerHook?: boolean): Promise<string>;
    /**
     * 更新 tab 配置。支持传对象或 JSON 字符串。
     */
    updateTabOptions(options: IUpdateTabOptions | string, tabId?: string): Promise<void>;
    /**
     * 打开新标签页或复用已存在标签页。
     * 若 `options._viewOutside` 为 true 或新窗口配置对象，则在新窗口打开链接并返回 `Window`。
     */
    openTab<Url extends string>(viewUrl: Url, tabOptions?: IOpenTabOptions & {
        _viewOutside: true | ViewOutsideOptions;
    }): Promise<Window | null>;
    openTab<Url extends string>(viewUrl: Url, tabOptions?: IOpenTabOptions & {
        _viewOutside?: false | undefined;
    }): Promise<string>;
    openTab<Url extends string>(viewUrl: Url, tabOptions?: IOpenTabOptions): Promise<string | Window | null>;
    /**
     * 关闭标签页。
     * @param options 关闭选项。
     */
    closeTab(tabId?: string, options?: CloseTabOptions): Promise<void>;
    /**
     * 关闭全部标签页（不可关闭标签页除外）
     */
    closeTabByAll(options?: CloseTabsOptions): Promise<void>;
    /**
     * 刷新指定标签页（通过切换 `_isRefresh` 触发重建）。
     */
    refreshTab(tabId?: string): Promise<void>;
    /**
     * 刷新所有标签页
     */
    refreshTabAll(): Promise<void>;
    /**
     * 向来源（父）标签页发送事件。
     */
    emit(eventName: string, data?: unknown, tabId?: string): void;
    /**
     * 交换标签页位置
     * @param tabIndex1 标签页索引
     * @param tabIndex2 标签页索引
     */
    swapTabByIndex(tabIndex1: number, tabIndex2: number): Promise<void>;
    /**
     * 移动标签页位置。首页和禁止拖拽标签不可移动；置顶标签只能在首页之后、普通标签之前排序。
     */
    canMoveTab(tabId: string | undefined, targetTabId: string | undefined, position?: "before" | "after"): boolean;
    moveTab(tabId: string, targetTabId: string, position?: "before" | "after"): Promise<boolean>;
    /**
     * 交换标签页位置
     * @param tabId1 标签页ID
     * @param tabId2 标签页ID
     */
    swapTabById(tabId1: string, tabId2: string): Promise<void>;
    /**
     * 关闭左侧所有标签页（不可关闭标签页除外）
     * @param tabId 标签页ID，不填时默认为当前激活的标签页
     */
    closeTabsByLeft(tabId?: string, options?: CloseTabsOptions): Promise<void>;
    /**
     * 关闭右侧所有标签页（不可关闭标签页除外）
     * @param tabId 标签页ID，不填时默认为当前激活的标签页
     */
    closeTabsByRight(tabId?: string, options?: CloseTabsOptions): Promise<void>;
    /**
     * 关闭除开所有标签页（不可关闭标签页除外）
     * @param tabId 标签页ID，不填时默认为当前激活的标签页
     */
    closeTabsByOther(tabId?: string, options?: CloseTabsOptions): Promise<void>;
    /**
     * 清空标签（退出系统时调用）
     */
    clear(): Promise<void>;
    private destroy;
    install(app: App): void;
}
