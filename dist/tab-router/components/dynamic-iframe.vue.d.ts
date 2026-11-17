import type { Component } from "vue";
import { type IframeMessageOriginValidator } from "../iframe/iframe-message";
import type { Tab } from "../tabs/tab";
type __VLS_Props = {
    link: string;
    linkProps?: Record<string, unknown>;
    title?: string;
    loadingComponent?: Component;
    allowedOrigins?: IframeMessageOriginValidator;
    messageTab?: Partial<Tab>;
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {
    iframe: Readonly<{
        value: HTMLIFrameElement | undefined;
    }>;
    postMessage(data: unknown, targetOrigin?: string, transfer?: Transferable[]): boolean;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    load: (e: Event, iframe: HTMLIFrameElement) => any;
    message: (e: MessageEvent<any>) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    onLoad?: ((e: Event, iframe: HTMLIFrameElement) => any) | undefined;
    onMessage?: ((e: MessageEvent<any>) => any) | undefined;
}>, {
    title: string;
    loadingComponent: Component;
    linkProps: Record<string, unknown>;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
