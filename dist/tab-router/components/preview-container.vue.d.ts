type __VLS_Props = {
    viewUrl: string;
    viewProps?: Record<string, unknown> | string;
    viewName?: string;
    sourceTabId?: string;
    closeSourceTabOnRootClose?: boolean;
    tabsVisibleThreshold?: number;
    hideFirstTab?: boolean;
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {
    refresh: () => Promise<void>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    error: (error: unknown) => any;
    close: (tabId?: string | undefined) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    onError?: ((error: unknown) => any) | undefined;
    onClose?: ((tabId?: string | undefined) => any) | undefined;
}>, {
    viewName: string;
    viewProps: Record<string, unknown> | string;
    tabsVisibleThreshold: number;
    hideFirstTab: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
