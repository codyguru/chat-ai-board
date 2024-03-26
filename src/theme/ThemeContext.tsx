import React, { createContext, useContext, useMemo, useCallback } from 'react';
import useLocalStorage from 'hooks/useLocalStorage';
import { ThemeContextProps, ThemeLayoutValue } from 'types/theme';
import { defaultSettings } from './config-settings';

const initialState: ThemeContextProps = {
  ...defaultSettings,
  setLayout: (layout: ThemeLayoutValue) => {},
  onToggleLayout: () => {},
};

export const ThemeContext = createContext(initialState);

export const useThemeContext = () => {
  const context = useContext(ThemeContext);

  if (!context) throw new Error('useThemeContext must be use inside ThemeProvider');

  return context;
};

type ThemeProviderProps = {
  children: React.ReactNode;
};

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [settings, setSettings] = useLocalStorage('chat-ai-board-config', defaultSettings);

  const onToggleLayout = useCallback(() => {
    const themeLayout = settings.themeLayout === 'vertical' ? 'mini' : 'vertical';
    setSettings({ ...settings, themeLayout });
  }, [setSettings, settings]);

  const setLayout = useCallback(
    (layout: ThemeLayoutValue) => {
      setSettings({ ...settings, themeLayout: layout });
    },
    [setSettings, settings]
  );

  const memoizedValue = useMemo(
    () => ({
      ...settings,
      setLayout,
      onToggleLayout,
    }),
    [settings, setLayout, onToggleLayout]
  );

  return <ThemeContext.Provider value={memoizedValue}>{children}</ThemeContext.Provider>;
}
