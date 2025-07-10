import { Flex, HStack, IconButton, Image, Menu } from '@chakra-ui/react';
import type {
  FlexProps,
  IconButtonProps,
  MenuContentProps,
} from '@chakra-ui/react';
import { FiBell, FiMenu } from 'react-icons/fi';
import { useSidebarNav } from './use-sidebar';

export interface SidebarNavProps extends FlexProps {
  logo?: any; // eslint-disable-line @typescript-eslint/no-explicit-any
}

export function SidebarNav(props: SidebarNavProps) {
  const { logo, children, ...rest } = props;
  const { onOpen } = useSidebarNav();

  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={{ base: 'colorPallet.50', _dark: 'colorPallet.900' }}
      borderBottomWidth="1px"
      borderBottomColor={{ base: 'colorPallet.200', _dark: 'colorPallet.700' }}
      justifyContent={{ base: 'space-between', md: 'flex-end' }}
      {...rest}
    >
      <IconButton
        display={{ base: 'flex', md: 'none' }}
        colorScheme="gray"
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
      >
        <FiMenu />
      </IconButton>
      <Image
        w="150px"
        ml={8}
        display={{ base: 'flex', md: 'none' }}
        src={logo}
        alt="logo"
      />

      <HStack gap={{ base: '0', md: '6' }}>{children}</HStack>
    </Flex>
  );
}

export interface SidebarNavBellProps extends IconButtonProps {}

export function SidebarNavBell(props: SidebarNavBellProps) {
  const { ...rest } = props;
  return (
    <IconButton size="lg" colorScheme="colorPallet" variant="ghost" {...rest}>
      <FiBell />
    </IconButton>
  );
}

export interface SidebarNavMenuProps extends MenuContentProps {}
export function SidebarNavMenu(props: SidebarNavMenuProps) {
  const { children, ...rest } = props;
  return (
    <Flex alignItems="center">
      <Menu.Root>
        <Menu.Content {...rest}>{children}</Menu.Content>
      </Menu.Root>
    </Flex>
  );
}
