import {NavLink, Outlet} from 'react-router-dom';

const AppLayout = () => {
  return (
    <div>
      <nav className="">
        <NavLink to="/" className={({isActive}) => isActive && 'bg-red-500'}>
          {({isActive}) => (
            <>
              Home
              {isActive && '(Aktif)'}
            </>
          )}
        </NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/nonPage">Non Page </NavLink>
      </nav>
      <Outlet/>
    </div>
  );
};

export default AppLayout;
