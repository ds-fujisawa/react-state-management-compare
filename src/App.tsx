import { Outlet, Router } from '@tanstack/react-location';
import Header from './Header';
import { routes, location } from './routes';

const App = () => (
  <Router routes={routes} location={location}>
    <Header />
    <Outlet />
  </Router>
);

export default App;
