import type { Tab } from "../tabs/tab";
type __VLS_Props = {
    visible: boolean;
    tab?: Partial<Tab> | null;
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    error: (error: unknown) => any;
    close: () => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    onError?: ((error: unknown) => any) | undefined;
    onClose?: (() => any) | undefined;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
