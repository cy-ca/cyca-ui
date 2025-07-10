import { useMemo } from 'react';
import { Box } from '@chakra-ui/react';
import type { BoxProps } from '@chakra-ui/react';
import { SidebarContext, useSidebar } from './use-sidebar';

export interface SidebarProps extends BoxProps {}

export function Sidebar({ children, ...rest }: SidebarProps) {
  const { ...context } = useSidebar();
  const ctx = useMemo(() => context, [context]);
  return (
    <Box minH="100vh" bg={{ base: 'gray.50', _dark: 'gray.900' }} {...rest}>
      <SidebarContext.Provider value={ctx}>{children}</SidebarContext.Provider>
    </Box>
  );
}

export function SidebarContent({ children, ...rest }: BoxProps) {
  return (
    <Box ml={{ base: 0, md: 60 }} p="8" {...rest}>
      {/* content */}
      {children}
    </Box>
  );
}
