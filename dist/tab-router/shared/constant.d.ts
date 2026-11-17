import { InjectionKey, ComputedRef } from "vue";
import { Tab } from "../tabs/tab";
export declare const STORAGE_TABS_KEY = "tabs";
export declare const INJECT_ACTIVE_TAB_KEY: InjectionKey<ComputedRef<Tab | undefined>>;
export declare const INJECT_CURRENT_TAB_KEY: InjectionKey<ComputedRef<Tab | undefined>>;
