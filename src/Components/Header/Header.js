// import { GoSearch } from "react-icons/go";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg header">
          <div className="left-div"></div>
          <div className="container-fluid">
            <a className="navbar-brand text-white" href="#">
              Pro Shop
            </a>
            {/* <a className="navbar-brand text-white" href="#">
              <img
                src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png"
                width="75px"
                height="20px"
              />
            </a> */}

            <input
              className=" me-2 search-bar"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />

            {/* <button
              type="button"
              class="login-button"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Login
            </button> */}

            <button className="login-button">Search</button>

            <div
              class="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5
                      class="modal-title text-center mx-auto"
                      id="exampleModalLabel"
                    >
                      Login
                    </h5>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    <div className="">
                      <div className="card-body">
                        <form className="">
                          <div className="mb-3">
                            <label
                              for="exampleInputEmail1"
                              className="form-label"
                            >
                              Email address
                            </label>
                            <input
                              type="email"
                              className="form-control"
                              id="exampleInputEmail1"
                              aria-describedby="emailHelp"
                            />
                          </div>
                          <div className="mb-3">
                            <label
                              for="exampleInputPassword1"
                              className="form-label"
                            >
                              Password
                            </label>
                            <input
                              type="password"
                              className="form-control"
                              id="exampleInputPassword1"
                            />
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>

                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>

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
                    Sign In
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
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="data:image/jpeg;base64,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"
                  className="d-block mx-auto"
                  width="400px"
                  height="300px"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="data:image/jpeg;base64,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"
                  className="d-block mx-auto"
                  width="420px"
                  height="324px"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="data:image/jpeg;base64,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"
                  className="d-block mx-auto"
                  width="420px"
                  height="324px"
                  alt="..."
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        {/* <div className="flex-container">
          <div>
            <img
              src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/9bb3499c8248d2ba.png?q=100"
              height="64px"
              width="64px"
            />
            <p className="text-center">Mobiles</p>
          </div>
          <div>
            <img
              src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/a28598a782b6b4cf.png?q=100"
              height="64px"
              width="64px"
            />
            <p className="text-center">Fashion</p>
          </div>
          <div>
            <img
              src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/f8928124c04bc6e9.png?q=100"
              height="64px"
              width="64px"
            />
            <p className="text-center">Electronics</p>
          </div>
        </div> */}

        <h3 className="text-center mt-4">Latest Products</h3>
        <hr />

        <div className="flex-container">
          <div class="card mb-4 w-25" style={{ width: "18rem" }}>
            <img
              src="data:image/jpeg;base64,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"
              class="card-img-top mt-5 ms-2"
              alt="..."
              width="120px"
              height="100px"
            />
            <div class="card-body">
              <h5 class="card-title">I-phone 14 Pro Max</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>

          <div className="card mb-4 w-25">
            <img
              src="data:image/jpeg;base64,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"
              class="card-img-top mt-5 ms-0"
              alt="..."
              width="0px"
              height="100px"
            />
            <div class="card-body">
              <h5 class="card-title">PlayStation 4 Pro</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>

          <div className="card mb-4 w-25" style={{ width: "18rem" }}>
            <img
              src="data:image/jpeg;base64,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"
              class="card-img-top mt-5 ms-2"
              alt="..."
              width="150px"
              height="100px"
            />
            <div class="card-body">
              <h5 class="card-title">Airpods Wireless</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
