import type { Tab } from "../tabs/tab";
import { type IframeTabClientAction, type IframeTabClientPayload } from "./iframe-tab-client-protocol";
export type IframeTabClientMessageHandler<Data = unknown> = (data: Data, event: MessageEvent) => void;
export interface CreateIframeTabClientOptions {
    /** 宿主窗口 origin。默认当前页面 origin。跨域宿主需要显式传入。 */
    targetOrigin?: string;
    /** 请求超时时间。默认 10000ms。 */
    timeout?: number;
    /** 当前窗口，主要用于测试或特殊运行环境。 */
    currentWindow?: Window;
    /** 宿主窗口，默认 currentWindow.parent。 */
    parentWindow?: Window;
}
export interface IframeTabClient {
    /** 原始请求方法。 */
    request<Data = unknown>(action: IframeTabClientAction, payload?: IframeTabClientPayload): Promise<Data>;
    /** 获取当前 iframe 所属页签信息。 */
    getTab(): Promise<Partial<Tab>>;
    /** 让宿主打开一个新页签。 */
    openTab(viewUrl: string, options?: Record<string, unknown>): Promise<string | null>;
    /** 刷新当前 iframe 页签。 */
    refreshTab(): Promise<boolean>;
    /** 关闭当前 iframe 页签。 */
    closeTab(): Promise<boolean>;
    /** 更新当前 iframe 页签信息。 */
    updateTabOptions(options: Record<string, unknown>): Promise<boolean>;
    /** 向来源页签发送事件，等价于宿主侧 tabsManager.emit。 */
    emit(eventName: string, data?: unknown): Promise<boolean>;
    /** 监听宿主通过 postIframeMessage(data, options?, tabId?) 发来的消息。传入 `*` 可监听全部非协议消息。 */
    on<Data = unknown>(eventName: string, handler: IframeTabClientMessageHandler<Data>): () => void;
    /** 移除宿主消息监听。 */
    off<Data = unknown>(eventName: string, handler?: IframeTabClientMessageHandler<Data>): void;
    /** 清理请求与消息监听。 */
    dispose(): void;
}
/**
 * 创建 iframe 内使用的页签 client。
 *
 * iframe 页面可通过它直接请求宿主操作当前页签，宿主会按消息来源自动定位 tabId。
 */
export declare function createIframeTabClient(options?: CreateIframeTabClientOptions): IframeTabClient;
