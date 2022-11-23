import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <h1>Welcome to the app!</h1>
      <nav>
        <Link to="/service/smartphone">Smartphone</Link>
      </nav>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
