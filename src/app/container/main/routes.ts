export const CHILD_ROUTES = [
  { path: '', loadChildren: () => import('@app/modules/home/home.module').then(m => m.HomeModule), icon: 'home', data: {animation: 'Home'} },
  { path: 'history', loadChildren: () => import('@app/modules/history/history.module').then(m => m.HistoryModule), icon: 'graph', data: {animation: 'History'} },
  { path: 'search', loadChildren: () => import('@app/modules/home/home.module').then(m => m.HomeModule), icon: 'search', data: {animation: 'Search'} },
  { path: 'profile', loadChildren: () => import('@app/modules/history/history.module').then(m => m.HistoryModule), icon: 'user', data: {animation: 'Profile'} },
];
