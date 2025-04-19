const Header = () => {
  return (
    <header className="w-100% bg-[pink]">
      <div className="max-w-[887px] flex align-center justify-center m-auto gap-[45px]">
        <img src="src" alt="Logo" />
        <nav>
          <ul className="bg-amber-300 flex gap-4 align-center justify-center">
            <li>
              <a href="#">home</a>
            </li>
            <li>
              <a href="#">about</a>
            </li>
            <li>
              <a href="#">menu</a>
            </li>
            <li>
              <a href="#">reservations</a>
            </li>
            <li>
              <a href="#">create order online</a>
            </li>
            <li>
              <a href="#">login</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
