import type { Tab } from "../../tabs/tab";
import type { TabsManager } from "../../tabs/tabs-manager";
import type { TabsVirtualOptions } from "../../types";
type TabsType = "text" | "line" | "card" | "rounded" | "capsule";
type __VLS_Props = {
    tabs: Tab[];
    activeTabId?: string;
    tabsManager: TabsManager;
    type: TabsType;
    showIcon: boolean;
    defaultIcon?: string;
    titleMaxLength?: number;
    draggable: boolean;
    virtualOptions: Array<TabsVirtualOptions | undefined>;
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    close: (id: string) => any;
    select: (id: string) => any;
    contextmenu: (event: MouseEvent, tab: Tab) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    onClose?: ((id: string) => any) | undefined;
    onSelect?: ((id: string) => any) | undefined;
    onContextmenu?: ((event: MouseEvent, tab: Tab) => any) | undefined;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
