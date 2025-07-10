'use client';

import {
  ChakraProvider,
  createSystem,
  defaultConfig,
  defineConfig,
} from '@chakra-ui/react';
import { ColorModeProvider, type ColorModeProviderProps } from './color-mode';

const customConfig = defineConfig({
  theme: {
    tokens: {
      colors: {
        brand: {
          50: { value: '#e6f2ff' },
          100: { value: '#e6f2ff' },
          200: { value: '#bfdeff' },
          300: { value: '#99caff' },
          // ...
          950: { value: '#001a33' },
        },

        cypressBlue: {
          50: { value: '#e8f3ff' },
          100: { value: '#cad8e9' },
          200: { value: '#abbed5' },
          300: { value: '#8ba4c0' },
          400: { value: '#6b8aad' },
          500: { value: '#527194' },
          600: { value: '#3f5874' },
          700: { value: '#2b3f54' },
          800: { value: '#162635' },
          900: { value: '#000f18' },
        },
      },
    },
  },
});

export const system = createSystem(defaultConfig, customConfig);

export function Provider(props: ColorModeProviderProps) {
  return (
    <ChakraProvider value={system}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  );
}
