import React from "react";
import "./Body.css";
import logo from "/reshot-icon-burger.svg";

const Body = ({
  menus,
  handleDetail,
  handleDelete,
  currentPage,
  setCurrentPage,
  nextPage,
  handleChangeBeverage,
  handleChangeMainDish,
  handleChangeAllCateg,
}) => {
  return (
    <>
      <div className="mt-2 mb-4 rounded-5 text-body-emphasis text-center background-header mx-2">
        <div className="container px-0 text-position bg-body-tertiary p-2 bg-opacity-75 rounded-5 px-3 py-3 header-container">
          <img src={logo} height={"100"} width={"100"} />
          <h1 className="display-4">Hungry already?</h1>
          <p className="lead my-3 fw-bold">Order your favorite meals here</p>
          <p className="lead mb-0">
            <button className="btn btn-primary">
              <a
                href="#goToMenu"
                className="text-body-emphasis text-decoration-none text-white"
              >
                Let's make an order...
              </a>
            </button>
          </p>
        </div>
      </div>
      <div className="text-center mb-3">
        <h1>Order Here</h1>
        <p>Chose your favorite food</p>
      </div>
      <div className="container d-flex justify-content-xl-evenly justify-content-lg-evenly justify-content-sm-between justify-content-between">
        <div>
          <button
            onClick={handleChangeAllCateg}
            className="btn d-flex flex-column align-items-center button-category-style"
          >
            <img
              src="reshot-icon-food.svg"
              width={"100"}
              height={"100"}
              className="img-fluid"
            />
            All Category
          </button>
        </div>
        <div>
          <button
            onClick={handleChangeMainDish}
            className="btn d-flex flex-column align-items-center button-category-style"
          >
            <img
              src="reshot-icon-meat-dish.svg"
              width={"100"}
              height={"100"}
              className="img-fluid"
            />
            Main Dish
          </button>
        </div>
        <div>
          <button
            onClick={handleChangeBeverage}
            className="btn d-flex flex-column align-items-center button-category-style"
          >
            <img
              src="reshot-icon-drink-with-ice.svg"
              width={"100"}
              height={"100"}
              className="img-fluid"
            />
            Beverage
          </button>
        </div>
      </div>
      <div className="album py-5 bg-body-tertiary" id="goToMenu">
        <div className="container">
          <div className="text-center mb-3">
            <h1>Order Here</h1>
            <p>Chose your favorite food</p>
          </div>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {menus.map((item, key) => (
              <div className="col">
                <div key={key} className="card shadow-sm rounded-4">
                  <img
                    src={item.imageUrl}
                    alt="food"
                    className="bd-placeholder-img card-img-top rounded-top-4"
                    width={"100%"}
                    height={"225"}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">Price : {item.priceFormatted}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          onClick={() => handleDetail(item.id)}
                          type="button"
                          className="btn btn-sm btn-outline-primary"
                        >
                          View
                        </button>
                        <button
                          onClick={() => handleDelete(item.id)}
                          type="button"
                          className="btn btn-sm btn-outline-danger"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="d-flex align-items-center justify-content-center mt-4">
            {currentPage > 1 ? (
              <button
                onClick={() => setCurrentPage(currentPage - 1)}
                className="btn btn-primary"
              >
                Prev Page
              </button>
            ) : (
              <button className="btn btn-primary" disabled>
                Prev Page
              </button>
            )}
            {nextPage !== 0 ? (
              <button
                onClick={() => setCurrentPage(currentPage + 1)}
                className="btn btn-primary"
              >
                Next Page
              </button>
            ) : (
              <button className="btn btn-primary" disabled>
                Next Page
              </button>
            )}
          </div>
          <div className="text-center mt-5">
            <h1 className="mb-3">Why Food Fever?</h1>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              <div className="col">
                <div className="card shadow-sm rounded-4 pt-2">
                  <img
                    src="reshot-illustration-scooter-package-delivery.png"
                    alt="food"
                    className="bd-placeholder-img card-img-top rounded-top-4"
                    width={"100%"}
                    height={"225"}
                  />
                  <div className="card-body">
                    <h5 className="card-title">Safe and fast delivery</h5>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm rounded-4 pt-2">
                  <img
                    src="foods.jpg"
                    alt="food"
                    className="bd-placeholder-img card-img-top"
                    width={"100%"}
                    height={"225"}
                  />
                  <div className="card-body">
                    <h5 className="card-title">Lots of interesting menus</h5>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm rounded-4 pt-2">
                  <img
                    src="reshot-icon-price-tag.svg"
                    alt="food"
                    className="bd-placeholder-img card-img-top rounded-top-4"
                    width={"100%"}
                    height={"225"}
                  />
                  <div className="card-body">
                    <h5 className="card-title">Affordable price</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default Body;
