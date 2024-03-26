export type ThemeLayoutValue = 'vertical' | 'mini';

export type ThemeContextProps = ThemeValueProps & {
  setLayout: (layout: ThemeLayoutValue) => void;
  onToggleLayout: VoidFunction;
};

export type ThemeValueProps = {
  themeLayout: ThemeLayoutValue;
};
