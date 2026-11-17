import { type TabMenuItemLike, type UseTabMenuOptions } from "../composables/use-tab-menu";
declare const _default: <BreadcrumbMenu extends object = TabMenuItemLike>(__VLS_props: NonNullable<Awaited<typeof __VLS_setup>>["props"], __VLS_ctx?: __VLS_PrettifyLocal<Pick<NonNullable<Awaited<typeof __VLS_setup>>, "attrs" | "emit" | "slots">>, __VLS_expose?: NonNullable<Awaited<typeof __VLS_setup>>["expose"], __VLS_setup?: Promise<{
    props: __VLS_PrettifyLocal<Pick<Partial<{}> & Omit<{} & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, never>, never> & {
        menus?: BreadcrumbMenu[];
        getChildren?: UseTabMenuOptions<BreadcrumbMenu>["getChildren"];
        getViewUrl?: UseTabMenuOptions<BreadcrumbMenu>["getViewUrl"];
        getViewName?: UseTabMenuOptions<BreadcrumbMenu>["getViewName"];
        getViewIcon?: UseTabMenuOptions<BreadcrumbMenu>["getViewIcon"];
        getViewProps?: UseTabMenuOptions<BreadcrumbMenu>["getViewProps"];
        getMenuKey?: UseTabMenuOptions<BreadcrumbMenu>["getMenuKey"];
        getTabKey?: UseTabMenuOptions<BreadcrumbMenu>["getTabKey"];
        separator?: string;
        showIcon?: boolean;
    } & Partial<{}>> & import("vue").PublicProps;
    expose(exposed: import("vue").ShallowUnwrapRef<{}>): void;
    attrs: any;
    slots: {};
    emit: {};
}>) => import("vue").VNode & {
    __ctx?: Awaited<typeof __VLS_setup>;
};
export default _default;
type __VLS_PrettifyLocal<T> = {
    [K in keyof T]: T[K];
} & {};
