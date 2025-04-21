import { useLocation } from 'react-router';

const ROUTES = [
  { name: 'home', path: '/' },
  { name: 'about', path: '/about' },
  { name: 'menu', path: '/menu' },
  { name: 'reservations', path: '/reservations' },
  { name: 'create order online', path: '/create-order-online' },
  { name: 'login', path: '/login' },
];

const Header = () => {
  const location = useLocation();

  return (
    <header className="w-full  bg-pink-300 flex items-center">
      <div className="max-w-[887px] flex flex-wrap align-center justify-center m-auto gap-4 sm:gap-6 md:gap-8">
        <img src="/path/to/logo.png" alt="Lemon Booking Logo" className="h-12 w-auto flex align-middle justify-center" />
        <nav className="h-[50px]">
          <ul className="h-full bg-yellow-700 flex gap-4 align-center justify-center">
            {ROUTES.map((route) => (
              <li key={route.name} className=" flex items-center">
                <a
                  href={route.path}
                  aria-label={`Navigate to ${route.name}`}
                  className={`h-full flex items-center px-4 ${location.pathname === route.path ? 'font-bold underline' : ''}`}
                >
                  {route.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
