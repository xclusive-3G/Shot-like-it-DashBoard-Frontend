import { Outlet } from 'react-router-dom';
import Navigation from '../component/navigation/Navigation';

const DashboardLayout = () => {
  return (
    <div style={{ display: 'flex' }}>
      {/* Navigation sidebar or topbar */}
      <Navigation />

      {/* Main content area */}
      <div style={{ flex: 1, padding: '20px' }}>
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
