import type { Tab } from "../tabs/tab";
/** 当前页面同源消息来源标记。 */
export declare const IFRAME_MESSAGE_ORIGIN_SELF = "self";
/** 任意消息来源标记。生产环境不建议使用。 */
export declare const IFRAME_MESSAGE_ORIGIN_ANY = "*";
/** iframe 消息来源配置项。 */
export type IframeMessageOrigin = typeof IFRAME_MESSAGE_ORIGIN_SELF | typeof IFRAME_MESSAGE_ORIGIN_ANY | string;
/** 向 iframe 发送消息时的配置。 */
export interface IframePostMessageOptions {
    /** 目标窗口 origin。未传时会根据 iframe URL 自动推导。 */
    targetOrigin?: string;
    /** 需要转移所有权的对象，例如 MessagePort、ArrayBuffer。 */
    transfer?: Transferable[];
}
/** iframe 发送给宿主的消息上下文。 */
export interface IframeMessageEvent<Data = unknown> {
    /** iframe 发送的原始数据。 */
    data: Data;
    /** 消息来源 origin。 */
    origin: string;
    /** 消息来源窗口。 */
    source: MessageEventSource | null;
    /** 浏览器原始 MessageEvent。 */
    rawEvent: MessageEvent<Data>;
    /** 当前 iframe 所属标签页信息。 */
    tab: Partial<Tab>;
    /** 当前 iframe 所属标签页 id。 */
    tabId?: string;
    /** 回复当前 iframe。默认回复到本次消息来源 origin。 */
    reply(data: unknown, options?: IframePostMessageOptions): boolean;
}
/** iframe 消息来源校验器。默认只允许同源。 */
export type IframeMessageOriginValidator = IframeMessageOrigin[] | ((origin: string, tab: Partial<Tab>, event: MessageEvent) => boolean);
/** 判断 iframe 消息来源是否允许进入宿主。 */
export declare function isIframeMessageOriginAllowed(validator: IframeMessageOriginValidator | undefined, origin: string, tab: Partial<Tab>, event: MessageEvent): boolean;
/** 根据 iframe URL 推导 postMessage 的 targetOrigin。 */
export declare function resolveIframeMessageTargetOrigin(url: string | undefined): string;
/** DynamicIframe 暴露给容器的实例方法。 */
export interface DynamicIframeExpose {
    /** 原始 iframe 元素引用。 */
    iframe: Readonly<{
        value: HTMLIFrameElement | undefined;
    }>;
    /** 向当前 iframe contentWindow 发送消息。 */
    postMessage(data: unknown, targetOrigin?: string, transfer?: Transferable[]): boolean;
}
/** iframe 加载完成上下文。 */
export interface IframeLoadEvent {
    /** iframe 原始 load 事件。 */
    event: Event;
    /** 当前 iframe 元素。 */
    iframe: HTMLIFrameElement;
    /** 当前 iframe 所属标签页信息。 */
    tab: Partial<Tab>;
}
