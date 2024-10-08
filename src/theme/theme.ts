import {createTheme} from '@shopify/restyle';

const palette = {
  greenPrimary: '#074c4e',
  greenPrimaryLight: '#eaf6f6',
  carrotSecondary: '#f86f2d',
  carrotSecondaryLight: '#fae6dd',
  greenSuccess: '#4abc86',
  greenSuccessLight: '#d8ffec',
  redError: '#ea3838',
  redErrorLight: '#fbecec',

  grayBlack: '#000000',
  gray1: '#636363',
  gray2: '#8e8e8e',
  gray3: '#b3b3b3',
  gray4: '#e1e1e1',
  gray5: '#f5f5f5',
  grayWhite: '#ffff',
};

export const theme = createTheme({
  colors: {
    ...palette,
    primary: palette.greenPrimary,
    primaryContrast: palette.grayWhite,

    buttonPrimary: palette.greenPrimary,

    background: palette.grayWhite,
    backgroundContrast: palette.grayBlack,

    error: palette.redError,
    errorLight: palette.redErrorLight,

    success: palette.greenSuccess,
    successLight: palette.greenSuccessLight,
  },
  spacing: {
    s4: 4,
    s8: 8,
    s10: 10,
    s12: 12,
    s14: 14,
    s16: 16,
    s20: 20,
    s24: 24,
    s32: 32,
    s40: 40,
    s48: 48,
    s56: 56,
  },
  borderRadii: {
    s8: 8,
    s12: 12,
    s16: 16,
  },

  textVariants: {
    defaults: {
      // We can define a default text variant here.
    },
  },
});

export type Theme = typeof theme;
export type ThemeColors = keyof Theme['colors'];
