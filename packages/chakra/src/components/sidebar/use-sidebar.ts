import { createContext, useContext } from 'react';
import { useDisclosure } from '@chakra-ui/react';

export function useSidebar() {
  const { open: isOpen, onOpen, onClose, setOpen } = useDisclosure();
  return {
    isOpen,
    onOpen,
    onClose,
    setOpen,
  };
}

export type UseSidebarReturn = ReturnType<typeof useSidebar>;

export const SidebarContext = createContext<UseSidebarReturn | undefined>(
  undefined,
);

export const useSidebarContext = () => {
  const sidebarContext = useContext(SidebarContext);
  if (sidebarContext === undefined) {
    throw new Error(
      'useSidebarContext must be inside a SidebarContext.Provider',
    );
  }
  return sidebarContext;
};

export function useSidebarItems() {
  const { onClose } = useSidebarContext();
  return {
    onClose,
  };
}

export function useSidebarItemsMobile() {
  const { isOpen, setOpen } = useSidebarContext();
  return {
    isOpen,
    setOpen,
  };
}

export function useSidebarNav() {
  const { onOpen } = useSidebarContext();
  return {
    onOpen,
  };
}
