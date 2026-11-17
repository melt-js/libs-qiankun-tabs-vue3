/**
 * @melt-js/libs-qiankun-tabs-vue3
 *
 * qiankun 2 多标签页的 Vue 3 适配层。
 * 内置页签 UI、管理器与缓存，微应用保活逻辑复用 core。
 */
export * from './tab-router';
export { MicroTabController, createMicroTabController, defaultTitleResolver, MICRO_APP_VIEW, } from './controller';
export type { MicroTabControllerOptions, MicroTabProps, OpenMicroTabOptions, TabManagerLike, TitleResolver, } from './controller';
export { useMicroApp, useIsMicroPath, useResolveMicroRoute } from './composables/use-micro-app';
export type { UseMicroAppOptions, UseMicroAppReturn } from './composables/use-micro-app';
export { useTabQuery, useMicroTabQuery, useWritableTabQuery } from './composables/use-tab-query';
export { UrlSyncController, fullPathOfIdentity, queryOf, queryOfIdentity, identityOf, } from './url-sync';
export type { UrlSyncOptions } from './url-sync';
export { createTabsUrlSync } from './tabs-url-sync';
export type { TabsUrlSyncOptions } from './tabs-url-sync';
export { installMicroTabsBridge } from './host';
export type { MicroTabsBridgeOptions, MicroChildMessage } from './host';
export { createMicroAppCache, useMicroAppCache, createMicroAppActions, createMicroAppLifecycles } from './child';
export type { MicroAppCache, MicroAppActions, MicroAppLifecyclesOptions, MicroChildProps, MicroChildRoute, MicroChildRouter } from './child';
export { default as MicroAppView } from './components/MicroAppView.vue';
export { microAppRegistry, registerMicroApp, registerMicroApps, matchMicroApp, findMicroApp, isMicroPath, microRuntime, queryState, routeDispatcher, splitRoute, buildFullPath, normalizePath, tabIdentityOf, parseTabIdentity, isSameTabIdentity, } from '@melt-js/libs-qiankun-tabs-core';
export type { MicroAppConfig, MicroAppState, MicroAppStatus, RouteQuery, RouterEvent, RouterEventType, } from '@melt-js/libs-qiankun-tabs-core';
