import { lazy } from 'react'

const mainRoutes = [
  {
    name: 'page A',
    path: '/',
    exact: true,
    component: lazy(() => import(/* webpackChunkName: 'page-a' */ '@/pages/a')),
  },
  {
    name: 'page B',
    path: '/b',
    exact: true,
    component: lazy(() => import(/* webpackChunkName: 'page-b' */ '@/pages/b')),
  },
  {
    name: 'page C',
    path: '/c',
    exact: true,
    component: lazy(() => import(/* webpackChunkName: 'page-c' */ '@/pages/c')),
  },
  {
    name: 'page D',
    path: '/d',
    exact: true,
    component: lazy(() => import(/* webpackChunkName: 'page-d' */ '@/pages/d')),
  },
  {
    name: 'page E',
    path: '/e',
    exact: true,
    component: lazy(() => import(/* webpackChunkName: 'page-e' */ '@/pages/e')),
  },
  {
    name: 'page F',
    path: '/f',
    exact: true,
    component: lazy(() => import(/* webpackChunkName: 'page-f' */ '@/pages/f')),
  },
]

export default mainRoutes
