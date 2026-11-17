import type { TabContextAction } from "./use-tab-context-menu";
import type { Tab } from "../../tabs/tab";
type __VLS_Props = {
    visible: boolean;
    x: number;
    y: number;
    tab?: Tab | null;
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    close: () => any;
    action: (action: TabContextAction) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    onClose?: (() => any) | undefined;
    onAction?: ((action: TabContextAction) => any) | undefined;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
