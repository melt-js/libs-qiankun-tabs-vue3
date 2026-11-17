import type { IframePostMessageOptions } from "../iframe";
import { TabsManager } from "../tabs";
import { DefineEvents, IDefineTabOptions, IframeControllerOptions, TabsManagerOptions, TabCloseGuard, TabEnterGuard, TabLeaveGuard } from "../types";
/** 创建并初始化 TabsManager。 */
export declare function createTabsManager(options: TabsManagerOptions): TabsManager;
/** 获取响应式 TabsManager 实例。 */
export declare function useTabsManager(): TabsManager;
/** 获取当前页面所在 tabId。若不在容器上下文中则返回 `undefined`。 */
export declare function useTabId(): string | undefined;
/** 在当前页面组件内部获取 iframe 消息发送器。 */
export declare function useIframeMessenger(): {
    postMessage(data: unknown, options?: IframePostMessageOptions | null): boolean;
};
/**
 * 定义当前 tab 的展示与行为选项。
 * 仅在 tab 容器内生效。
 */
export declare function defineTabOptions(options: IDefineTabOptions): void;
/**
 * 定义当前 tab 可监听的事件。
 * 子 tab 可通过 `tabsManager.emit` 向其来源 tab 发送消息。
 */
export declare function defineTabEvents(events: DefineEvents): void;
/**
 * 定义 iframe controller tab 的局部 iframe 配置。
 * 仅在 TabViewUrl.createIframeController 打开的控制组件内生效。
 */
export declare function defineIframeOptions(options: IframeControllerOptions): void;
/**
 * 注册当前 tab 的离开守卫。
 * 返回 false、rejected Promise（或抛错）会阻止切换。
 */
export declare function onBeforeTabLeave(guard: TabLeaveGuard): void;
/**
 * 注册当前 tab 的关闭守卫。
 * 返回 false、rejected Promise（或抛错）会阻止关闭。
 */
export declare function onBeforeTabClose(guard: TabCloseGuard): void;
/**
 * 注册当前 tab 的进入守卫。
 * 当此 tab 被激活时触发（包括从 keep-alive 缓存中恢复）。
 * 返回 false、rejected Promise（或抛错）会阻止激活。
 */
export declare function onBeforeTabEnter(guard: TabEnterGuard): void;
