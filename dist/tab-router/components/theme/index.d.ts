/**
 * 主题配置类型定义
 */
/**
 * 颜色系统配置
 */
export interface ThemeColors {
    /** 主色调 */
    primary: string;
    /** 主色调-hover */
    primaryHover?: string;
    /** 主色调-active */
    primaryActive?: string;
    /** 文本颜色-主要 */
    textPrimary: string;
    /** 文本颜色-次要 */
    textSecondary: string;
    /** 文本颜色-禁用 */
    textDisabled: string;
    /** 背景色-基础 */
    bgBase: string;
    /** 背景色-浮层 */
    bgElevated: string;
    /** 背景色-hover */
    bgHover: string;
    /** 背景色-active */
    bgActive: string;
    /** 背景色-active 主色叠加（激活页签底色，缺省用主色 15% 计算） */
    bgActiveSoft?: string;
    /** 边框颜色 */
    border: string;
    /** 边框颜色-深色 */
    borderDark?: string;
}
/**
 * 尺寸配置
 */
export interface ThemeSizes {
    /** 字体大小 */
    fontSize?: string;
    /** 字体大小-小 */
    fontSizeSmall?: string;
    /** 字体大小-大 */
    fontSizeLarge?: string;
    /** 间距-超小 */
    spacingXs?: string;
    /** 间距-小 */
    spacingSm?: string;
    /** 间距-中 */
    spacingMd?: string;
    /** 间距-大 */
    spacingLg?: string;
    /** 图标尺寸 */
    iconSize?: string;
}
/**
 * 圆角配置
 */
export interface ThemeRadius {
    /** 圆角-小 */
    radiusSm?: string;
    /** 圆角-中 */
    radiusMd?: string;
    /** 圆角-大 */
    radiusLg?: string;
    /** 圆角-胶囊 */
    radiusCapsule?: string;
}
/**
 * 阴影配置
 */
export interface ThemeShadows {
    /** 阴影-轻 */
    shadowLight?: string;
    /** 阴影-中 */
    shadowMedium?: string;
    /** 阴影-重 */
    shadowHeavy?: string;
}
/**
 * 过渡动画配置
 */
export interface ThemeTransitions {
    /** 过渡时长 */
    duration?: string;
    /** 过渡函数 */
    timingFunction?: string;
}
/**
 * 完整主题配置
 */
export interface TabTheme {
    /** 主题名称 */
    name?: string;
    /** 颜色配置 */
    colors: ThemeColors;
    /** 尺寸配置 */
    sizes?: ThemeSizes;
    /** 圆角配置 */
    radius?: ThemeRadius;
    /** 阴影配置 */
    shadows?: ThemeShadows;
    /** 过渡配置 */
    transitions?: ThemeTransitions;
}
/**
 * 默认主题配置（Arco Design 风格）
 */
export declare const defaultTheme: TabTheme;
/**
 * 浅色主题
 */
export declare const lightTheme: TabTheme;
/**
 * 深色主题
 */
export declare const darkTheme: TabTheme;
/**
 * 将主题配置转换为 CSS 变量对象
 */
export declare function themeToCssVariables(theme: TabTheme): Record<string, string>;
/**
 * 应用主题到指定元素（默认为 document.documentElement）
 */
export declare function applyTheme(theme: TabTheme, element?: HTMLElement | null): void;
