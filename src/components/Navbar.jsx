import "./components.css";

const Navbar = () => {
  return (
    <div>
      <header className="header">
        <nav className="nav">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/my-skill">My Skill</a>
            </li>
            <li>
              <a href="/my-portofolio">Portofolio</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
