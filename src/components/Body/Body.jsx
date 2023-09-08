import React from "react";

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
      <div className="album py-5 bg-body-tertiary">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {menus.map((item, key) => (
              <div className="col">
                <div
                  key={key}
                  className="card shadow-sm"
                >
                  <img
                    src={item.imageUrl}
                    alt="food"
                    className="bd-placeholder-img card-img-top"
                    width={"100%"}
                    height={"225"}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
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
                      <p className="card-text">Price : {item.priceFormatted}</p>
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
        </div>
      </div>
    </>
  );
};

export default Body;
