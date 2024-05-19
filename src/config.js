
enum ThemeEnum {
    DARK,
    LIGTH
  }
const theme : ThemeEnum = ThemeEnum.LIGTH;
const primaryBackgroundDark = '#101010';
const primaryBackgroundLight = 'white';

export const backgroundColor = theme == ThemeEnum.LIGTH ? primaryBackgroundDark : primaryBackgroundLight;