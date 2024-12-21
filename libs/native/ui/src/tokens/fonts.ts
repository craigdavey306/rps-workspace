import { Platform } from 'react-native';

type FontWeight =
  | 'normal'
  | 'bold'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900';

export type Font = {
  fontFamily: string;
  fontWeight: FontWeight;
  fontStyle?: 'normal' | 'italic';
};

export type FontTypes = {
  regular: Font;
  medium: Font;
  bold: Font;
  light: Font;
  thin: Font;
};

type PlatformFonts = {
  android?: FontTypes;
  default: FontTypes;
  ios: FontTypes;
};

const iosFontFamily = 'System';
const defaultFontFamily = 'sans-serif';

export const platformFonts: PlatformFonts = {
  ios: {
    regular: {
      fontFamily: iosFontFamily,
      fontWeight: '400',
    },
    medium: {
      fontFamily: iosFontFamily,
      fontWeight: '500',
    },
    bold: {
      fontFamily: iosFontFamily,
      fontWeight: 'bold',
    },
    light: {
      fontFamily: iosFontFamily,
      fontWeight: '300',
    },
    thin: {
      fontFamily: iosFontFamily,
      fontWeight: '100',
    },
  },
  default: {
    regular: {
      fontFamily: defaultFontFamily,
      fontWeight: '400',
    },
    medium: {
      fontFamily: defaultFontFamily,
      fontWeight: '500',
    },
    bold: {
      fontFamily: defaultFontFamily,
      fontWeight: 'bold',
    },
    light: {
      fontFamily: defaultFontFamily,
      fontWeight: '300',
    },
    thin: {
      fontFamily: defaultFontFamily,
      fontWeight: '100',
    },
  },
};

export const Fonts = Platform.select(platformFonts);
