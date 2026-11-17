import type { IframeRefValue } from "../types";
export declare function createIframeTabRegistry(): {
    cleanupIframeTab: (tabId: string | undefined) => void;
    clear: () => void;
    getIframeRenderKey: (tabId: string) => string;
    getLoadedIframe: (tabId: string) => HTMLIFrameElement | undefined;
    postMessage: (tabId: string, data: unknown, targetOrigin?: string, transfer?: Transferable[]) => boolean;
    refreshIframeTab: (tabId: string) => void;
    setIframeRef: (tabId: string, exposed: IframeRefValue) => void;
    setLoadedIframe: (tabId: string, iframe: HTMLIFrameElement) => void;
};
export type IframeTabRegistry = ReturnType<typeof createIframeTabRegistry>;
