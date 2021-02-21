import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ThemeSwitcher from "../ThemeSwitcher";

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link href="/">
            <a className="navbar-brand">WHOIS (BETA)</a>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://github.com/benfiratkaya/nextjs-whois"
                  target="_blank"
                >
                  <div className="nav-icon">
                    <div className="d-flex align-items-center">
                      <div className="icon">
                        <FontAwesomeIcon icon={["fab", "github"]} />
                      </div>
                      <span className="d-lg-none ml-2">Github</span>
                    </div>
                  </div>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                  onClick={(e) => e.preventDefault()}
                >
                  <div className="nav-icon">
                    <ThemeSwitcher />
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
