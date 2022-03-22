import React, {
  ComponentType,
  lazy,
  LazyExoticComponent,
  ReactNode,
} from 'react';
import CenterLoader from '@/components/CenterLoader';

export interface IRoute {
  // Path, like in basic prop
  path: string;
  // Exact, like in basic prop
  exact: boolean;
  // Preloader for lazy loading
  fallback: NonNullable<ReactNode> | null;
  // Lazy Loaded component
  component?: LazyExoticComponent<ComponentType<any>>;
  // Sub routes
  routes?: IRoute[];
  // Redirect path
  redirect?: string;
  // If router is private, this is going to be true
  private?: boolean;
}

const defaultOptions = {
  exact: true,
  private: true,
  fallback: <CenterLoader />,
};

/**
 * Code copied from ⇊, please check the example to add new router
 * https://stackblitz.com/edit/react-ts-1ptyhb?file=router%2Fconfig.tsx
 */

export const routes: IRoute[] = [
  {
    path: '/',
    component: lazy(() => import('@/pages/Home')),
    exact: true,
  },
  {
    path: '/track/:id',
    component: lazy(() => import('@/pages/Tracks')),
    exact: true,
  },
  {
    path: '/album/:id',
    component: lazy(() => import('@/pages/AlbumDetail')),
    exact: true,
  },
  {
    path: '/artist/:id',
    component: lazy(() => import('@/pages/ArtistDetail')),
    exact: true,
  },
  // {
  //   path: '/login',
  //   component: lazy(() => import('../pages/Login')),
  //   private: false,
  // },
  // {
  //   path: '*',
  //   component: lazy(() => import('../pages/NoMatch')),
  //   exact: false,
  // },
].map((item) => ({ ...defaultOptions, ...item }));
