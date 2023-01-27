import { Route, ReactLocation } from '@tanstack/react-location';
import Home from './Home';
import Context from './context/Main';
import Jotai from './jotai/Main';
import Recoil from './recoil/Main';
import Redux from './redux/Main';
import Swr from './swr/Main';
import Zustand from './zustand/Main';

export const location = new ReactLocation();

export const routes: Route[] = [
  { path: '/', element: <Home /> },
  { path: '/Redux', element: <Redux /> },
  { path: '/Context', element: <Context /> },
  { path: '/Recoil', element: <Recoil /> },
  { path: '/Jotai', element: <Jotai /> },
  { path: '/Zustand', element: <Zustand /> },
  { path: '/swr', element: <Swr /> },
];
