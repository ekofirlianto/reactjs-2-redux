import { Link, Outlet } from 'react-router-dom';

const Service = () => {
  return (
    <div>
      <h2>Service Page</h2>
      <div>
        <Link to="/service/computer">Layout</Link>
        <Link to="/service/smartphone">Dashboard</Link>
      </div>

      <Outlet />
    </div>
  );
};

export default Service;
