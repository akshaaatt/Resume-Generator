import { createContext, useContext } from 'react';
import { vars } from '../../themes/contract.css';
import { DesignProviderProps } from './DesignProvider';

interface DesignContext {
  colorScheme: DesignProviderProps['colorScheme'];
  theme: string | null;
}

export const DesignContext = createContext<DesignContext>(null);

export const useDesignTheme = () => {
  const { colorScheme, theme } = useContext(DesignContext);

  if (theme === null) {
    throw new Error('No Design theme available on context');
  }

  return { colorScheme, themeClass: theme, vars };
};
