import { useRoutes } from 'react-router-dom';

// routes
import config from 'config';
import MainRoutes from './MainRoutes';

export default function ThemeRoutes() {
  return useRoutes([MainRoutes], config.basename);
}
