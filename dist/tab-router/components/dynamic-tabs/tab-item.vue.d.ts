import { Tab } from "../../tabs/tab";
type __VLS_Props = {
    tab: Tab;
    isActive: boolean;
    showIcon: boolean;
    defaultIcon?: string;
    maxTitleLength?: number;
    draggable?: boolean;
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    close: (id: string) => any;
    select: (id: string) => any;
    contextmenu: (event: MouseEvent, tab: Tab) => any;
    dragend: () => any;
    dragleave: (event: DragEvent, tab: Tab) => any;
    dragover: (event: DragEvent, tab: Tab) => any;
    dragstart: (event: DragEvent, tab: Tab) => any;
    drop: (event: DragEvent, tab: Tab) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    onClose?: ((id: string) => any) | undefined;
    onSelect?: ((id: string) => any) | undefined;
    onContextmenu?: ((event: MouseEvent, tab: Tab) => any) | undefined;
    onDragend?: (() => any) | undefined;
    onDragleave?: ((event: DragEvent, tab: Tab) => any) | undefined;
    onDragover?: ((event: DragEvent, tab: Tab) => any) | undefined;
    onDragstart?: ((event: DragEvent, tab: Tab) => any) | undefined;
    onDrop?: ((event: DragEvent, tab: Tab) => any) | undefined;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
