import React, { PropsWithChildren, useEffect } from 'react';
import { timbre } from '../../themes';
import {
  darkScheme,
  lightScheme,
  systemScheme,
} from '../../themes/colorScheme.css';
import { DesignContext } from './DesignContext';

export interface DesignProviderProps {
  colorScheme?: 'dark' | 'light' | 'system';
  theme?: string | null;
}

const DesignProvider: React.FC<PropsWithChildren<DesignProviderProps>> = (
  props,
) => {
  const { children, colorScheme = 'system', theme = timbre } = props;

  useEffect(() => {
    let colorSchemeStyle;
    switch (colorScheme) {
      case 'dark':
        colorSchemeStyle = darkScheme;
        break;
      case 'light':
        colorSchemeStyle = lightScheme;
        break;
      default:
        colorSchemeStyle = systemScheme;
        break;
    }
    document.documentElement.className = colorSchemeStyle;
  }, [colorScheme, theme]);

  return (
    <>
      <DesignContext.Provider value={{ colorScheme, theme }}>
        <div className={theme}>{children}</div>
      </DesignContext.Provider>
    </>
  );
};

export default DesignProvider;
