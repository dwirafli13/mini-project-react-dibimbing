import React from "react";
import "./Body.css";

const Body = ({
  menus,
  handleDetail,
  handleDelete,
  currentPage,
  setCurrentPage,
  nextPage,
}) => {
  return (
    <>
      <div className="container mt-3">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {menus.map((item, key) => (
            <div className="col">
              <div
                key={key}
                className="card shadow-sm"
                style={{ width: "15rem" }}
              >
                <img
                  src={item.imageUrl}
                  alt="food"
                  className="card-img-top"
                  style={{ height: "15rem" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">Price : {item.priceFormatted}</p>
                  <button
                    onClick={() => handleDetail(item.id)}
                    className="btn btn-outline-primary"
                  >
                    See Details
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="btn btn-outline-danger"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="d-flex align-items-center justify-content-center">
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
      </div>
    </>
  );
};

export default Body;
