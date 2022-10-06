import { GoSearch } from "react-icons/go";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg header">
          <div className="left-div"></div>
          <div className="container-fluid">
            <a className="navbar-brand text-white" href="#">
              <img
                src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png"
                width="75px"
                height="20px"
              />
            </a>

            <input
              className=" me-2 search-bar"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />

            <button className="login-button">Login</button>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    className="nav-link active ms-5  list-name text-white"
                    aria-current="page"
                    href="#"
                  >
                    Become a seller
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link list-name ms-5 text-white" href="#">
                    cart
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div>
            <div>
                <img src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/9bb3499c8248d2ba.png?q=100" />
            </div>
        </div>
      </div>
    </>
  );
};

export default Header;
