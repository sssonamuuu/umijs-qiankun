import { OverrideToken } from 'antd/es/theme/interface';

export interface CustomThemeTypes {
  'blue': string;
  'purple': string;
  'cyan': string;
  'green': string;
  'magenta': string;
  'pink': string;
  'red': string;
  'orange': string;
  'yellow': string;
  'volcano': string;
  'geekblue': string;
  'gold': string;
  'lime': string;
  'colorPrimary': string;
  'colorSuccess': string;
  'colorWarning': string;
  'colorError': string;
  'colorInfo': string;
  'colorTextBase': string;
  'colorBgBase': string;
  'fontFamily': string;
  'fontSize': number;
  'lineWidth': number;
  'lineType': string;
  'motionUnit': number;
  'motionBase': number;
  'motionEaseOutCirc': string;
  'motionEaseInOutCirc': string;
  'motionEaseOut': string;
  'motionEaseInOut': string;
  'motionEaseOutBack': string;
  'motionEaseInBack': string;
  'motionEaseInQuint': string;
  'motionEaseOutQuint': string;
  'borderRadius': number;
  'sizeUnit': number;
  'sizeStep': number;
  'sizePopupArrow': number;
  'controlHeight': number;
  'zIndexBase': number;
  'zIndexPopupBase': number;
  'opacityImage': number;
  'wireframe': boolean;
  'blue-1': string;
  'blue-2': string;
  'blue-3': string;
  'blue-4': string;
  'blue-5': string;
  'blue-6': string;
  'blue-7': string;
  'blue-8': string;
  'blue-9': string;
  'blue-10': string;
  'purple-1': string;
  'purple-2': string;
  'purple-3': string;
  'purple-4': string;
  'purple-5': string;
  'purple-6': string;
  'purple-7': string;
  'purple-8': string;
  'purple-9': string;
  'purple-10': string;
  'cyan-1': string;
  'cyan-2': string;
  'cyan-3': string;
  'cyan-4': string;
  'cyan-5': string;
  'cyan-6': string;
  'cyan-7': string;
  'cyan-8': string;
  'cyan-9': string;
  'cyan-10': string;
  'green-1': string;
  'green-2': string;
  'green-3': string;
  'green-4': string;
  'green-5': string;
  'green-6': string;
  'green-7': string;
  'green-8': string;
  'green-9': string;
  'green-10': string;
  'magenta-1': string;
  'magenta-2': string;
  'magenta-3': string;
  'magenta-4': string;
  'magenta-5': string;
  'magenta-6': string;
  'magenta-7': string;
  'magenta-8': string;
  'magenta-9': string;
  'magenta-10': string;
  'pink-1': string;
  'pink-2': string;
  'pink-3': string;
  'pink-4': string;
  'pink-5': string;
  'pink-6': string;
  'pink-7': string;
  'pink-8': string;
  'pink-9': string;
  'pink-10': string;
  'red-1': string;
  'red-2': string;
  'red-3': string;
  'red-4': string;
  'red-5': string;
  'red-6': string;
  'red-7': string;
  'red-8': string;
  'red-9': string;
  'red-10': string;
  'orange-1': string;
  'orange-2': string;
  'orange-3': string;
  'orange-4': string;
  'orange-5': string;
  'orange-6': string;
  'orange-7': string;
  'orange-8': string;
  'orange-9': string;
  'orange-10': string;
  'yellow-1': string;
  'yellow-2': string;
  'yellow-3': string;
  'yellow-4': string;
  'yellow-5': string;
  'yellow-6': string;
  'yellow-7': string;
  'yellow-8': string;
  'yellow-9': string;
  'yellow-10': string;
  'volcano-1': string;
  'volcano-2': string;
  'volcano-3': string;
  'volcano-4': string;
  'volcano-5': string;
  'volcano-6': string;
  'volcano-7': string;
  'volcano-8': string;
  'volcano-9': string;
  'volcano-10': string;
  'geekblue-1': string;
  'geekblue-2': string;
  'geekblue-3': string;
  'geekblue-4': string;
  'geekblue-5': string;
  'geekblue-6': string;
  'geekblue-7': string;
  'geekblue-8': string;
  'geekblue-9': string;
  'geekblue-10': string;
  'gold-1': string;
  'gold-2': string;
  'gold-3': string;
  'gold-4': string;
  'gold-5': string;
  'gold-6': string;
  'gold-7': string;
  'gold-8': string;
  'gold-9': string;
  'gold-10': string;
  'lime-1': string;
  'lime-2': string;
  'lime-3': string;
  'lime-4': string;
  'lime-5': string;
  'lime-6': string;
  'lime-7': string;
  'lime-8': string;
  'lime-9': string;
  'lime-10': string;
  'colorText': string;
  'colorTextSecondary': string;
  'colorTextTertiary': string;
  'colorTextQuaternary': string;
  'colorFill': string;
  'colorFillSecondary': string;
  'colorFillTertiary': string;
  'colorFillQuaternary': string;
  'colorBgLayout': string;
  'colorBgContainer': string;
  colorBgContainerSecondary: string;
  /** 表头颜色，antd不生效 */
  colorBgTableHeader: string;
  'colorBgElevated': string;
  'colorBgSpotlight': string;
  'colorBorder': string;
  'colorBorderSecondary': string;
  'colorPrimaryBg': string;
  'colorPrimaryBgHover': string;
  'colorPrimaryBorder': string;
  'colorPrimaryBorderHover': string;
  'colorPrimaryHover': string;
  'colorPrimaryActive': string;
  'colorPrimaryTextHover': string;
  'colorPrimaryText': string;
  'colorPrimaryTextActive': string;
  'colorSuccessBg': string;
  'colorSuccessBgHover': string;
  'colorSuccessBorder': string;
  'colorSuccessBorderHover': string;
  'colorSuccessHover': string;
  'colorSuccessActive': string;
  'colorSuccessTextHover': string;
  'colorSuccessText': string;
  'colorSuccessTextActive': string;
  'colorErrorBg': string;
  'colorErrorBgHover': string;
  'colorErrorBorder': string;
  'colorErrorBorderHover': string;
  'colorErrorHover': string;
  'colorErrorActive': string;
  'colorErrorTextHover': string;
  'colorErrorText': string;
  'colorErrorTextActive': string;
  'colorWarningBg': string;
  'colorWarningBgHover': string;
  'colorWarningBorder': string;
  'colorWarningBorderHover': string;
  'colorWarningHover': string;
  'colorWarningActive': string;
  'colorWarningTextHover': string;
  'colorWarningText': string;

  'colorWarningTextActive': string;
  'colorInfoBg': string;
  'colorInfoBgHover': string;
  'colorInfoBorder': string;
  'colorInfoBorderHover': string;
  'colorInfoHover': string;
  'colorInfoActive': string;
  'colorInfoTextHover': string;
  'colorInfoText': string;
  'colorInfoTextActive': string;
  'colorBgMask': string;
  'colorWhite': string;
  'sizeXXL': number;
  'sizeXL': number;
  'sizeLG': number;
  'sizeMD': number;
  'sizeMS': number;
  'size': number;
  'sizeSM': number;
  'sizeXS': number;
  'sizeXXS': number;
  'controlHeightSM': number;
  'controlHeightXS': number;
  'controlHeightLG': number;
  'motionDurationFast': string;
  'motionDurationMid': string;
  'motionDurationSlow': string;
  'fontSizes': number[];
  'lineHeights': number[];
  'lineWidthBold': number;
  'borderRadiusXS': number;
  'borderRadiusSM': number;
  'borderRadiusLG': number;
  'borderRadiusOuter': number;
  homeContentWidth: number;
}

export type ThemeTypeKey = 'default' | 'dark';

export interface ThemeTypes {
  type: ThemeTypeKey;
  token: CustomThemeTypes;
  /** 仅针对 antd 的生效 */
  components?: Partial<Record<keyof OverrideToken, Partial<CustomThemeTypes>>>;
}