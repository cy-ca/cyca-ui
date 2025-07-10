import { Box, Drawer, Flex, Icon, Image, CloseButton } from '@chakra-ui/react';
import type { BoxProps, FlexProps } from '@chakra-ui/react';
import { useLocation, useNavigate } from 'react-router';
import type { IconType } from 'react-icons';
import { useSidebarItems, useSidebarItemsMobile } from './use-sidebar';

interface NavItemProps extends FlexProps {
  icon: IconType;
  path: string;
  current?: boolean;
  children: string;
  onClose: () => void;
}

function NavItem({
  icon,
  path,
  current = false,
  children,
  onClose,
  ...rest
}: NavItemProps) {
  const navigate = useNavigate();
  const onClick = () => {
    onClose();
    navigate(path);
  };
  return (
    <Box
      w="full"
      onClick={onClick}
      style={{ textDecoration: 'none' }}
      _focus={{ boxShadow: 'none' }}
      css={{
        disabled: current,
      }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={
          current
            ? undefined
            : {
                bg: { base: 'brand.400', _dark: 'brand.500' },
                color: 'white',
              }
        }
        bg={current ? { base: 'brand.100', _dark: 'brand.700' } : 'inherit'}
        fontWeight={current ? 'medium' : 'normal'}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={
              current
                ? undefined
                : {
                    color: 'white',
                  }
            }
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Box>
  );
}

interface LinkItemProps {
  name: string;
  icon: IconType;
  path: string;
}

export interface SidebarItemsProps extends BoxProps {
  linkItems: LinkItemProps[];
  logo?: any; // eslint-disable-line @typescript-eslint/no-explicit-any
}

export function SidebarItems(props: SidebarItemsProps) {
  const { linkItems, logo, ...rest } = props;
  const { onClose } = useSidebarItems();
  const location = useLocation();

  return (
    <Box
      bg={{ base: 'gray.50', _dark: 'gray.900' }}
      borderRightWidth="1px"
      borderRightColor={{ base: 'brand.200', _dark: 'brand.700' }}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="10" justifyContent="space-between">
        {logo && <Image w="150px" src={logo} alt="brand logo" />}
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {linkItems.map((link) => (
        <NavItem
          key={link.name}
          icon={link.icon}
          path={link.path}
          current={location.pathname.includes(link.path)}
          onClose={onClose}
        >
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
}

export function SidebarItemsMobile(props: SidebarItemsProps) {
  const { linkItems, logo, ...rest } = props;
  const { isOpen, setOpen } = useSidebarItemsMobile();

  return (
    <Drawer.Root
      open={isOpen}
      placement="start"
      onOpenChange={(e) => setOpen(e.open)}
      restoreFocus={false}
      size="full"
    >
      <Drawer.Content>
        <SidebarItems linkItems={linkItems} logo={logo} {...rest} />
      </Drawer.Content>
    </Drawer.Root>
  );
}
