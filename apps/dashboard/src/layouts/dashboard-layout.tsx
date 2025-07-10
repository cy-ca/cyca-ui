import { Outlet, useLoaderData } from 'react-router';
import type { BoxProps } from '@chakra-ui/react';
import { FiHome, FiSettings, FiDatabase } from 'react-icons/fi';
import { GrDocumentConfig } from 'react-icons/gr';
import {
  IoGitNetwork,
  IoPeopleOutline,
  IoRocketOutline,
} from 'react-icons/io5';
import {
  Sidebar,
  SidebarContent,
  SidebarItems,
  SidebarNav,
  SidebarNavBell,
} from '@cyca-ui/chakra';

//import logo from 'logo.svg';

// Dashboard configuration
export const sidebarItems = [
  {
    name: 'Home',
    icon: FiHome,
    path: 'home',
    scopes: [],
  },
  {
    name: 'Training Data',
    icon: FiDatabase,
    path: 'data',
    scopes: ['view-artifacts'],
  },
  {
    name: 'Models',
    icon: IoGitNetwork,
    path: 'models',
    scopes: ['view-artifacts'],
  },
  {
    name: 'Deployments',
    icon: IoRocketOutline,
    path: 'deploy',
    scopes: ['view-jobs'],
  },
  {
    name: 'Jobs',
    icon: GrDocumentConfig,
    path: 'jobs',
    scopes: ['view-jobs'],
  },
  {
    name: 'Members',
    icon: IoPeopleOutline,
    path: 'members',
    scopes: ['view-members'],
  },
  {
    name: 'Settings',
    icon: FiSettings,
    path: 'settings',
    scopes: ['view-settings'],
  },
];

export interface DashboardProps extends BoxProps {
  parentPath: string;
}

export function Dashboard({ parentPath, children, ...rest }: DashboardProps) {
  // Create linkItems
  const linkItems = sidebarItems.map((item) => ({
    name: item.name,
    icon: item.icon,
    path: `${parentPath}/${item.path}`,
  }));

  return (
    <Sidebar {...rest}>
      <SidebarItems linkItems={linkItems} />
      <SidebarNav>
        <SidebarNavBell aria-label="open-notification" />
      </SidebarNav>
      <SidebarContent>{children}</SidebarContent>
    </Sidebar>
  );
}

export interface DashboardLayoutProps {
  parentPath?: string;
}

export function DashboardLayout({
  parentPath = undefined,
}: DashboardLayoutProps) {
  const group: string = (useLoaderData() as string) ?? '';
  return (
    <Dashboard parentPath={`${parentPath ?? ''}/${group}`}>
      <Outlet />
    </Dashboard>
  );
}
