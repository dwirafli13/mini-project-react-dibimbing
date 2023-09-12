import React from "react";
import Header from "../components/Header/Header";
import { useParams } from "react-router";
import axios from "axios";
import { useState, useEffect } from "react";
import Footer from "../components/Footer/Footer";

const DetailMenu = () => {
  const param = useParams();
  const [menu, setMenu] = useState({});

  const getDetailUser = () => {
    axios
      .get(`https://api.mudoapi.tech/menu/${param.Id}`)
      .then((res) => {
        setMenu(res?.data?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getDetailUser();
  }, []);

  console.log(menu);

  return (
    <>
      <Header />
      <div className="container mt-4">
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={menu.imageUrl}
                className="img-fluid rounded-start"
                width={"100%"}
                height={"225"}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{menu.name}</h5>
                <p className="card-text">{menu.description}</p>
                <p className="card-text">Price : {menu.priceFormatted}</p>
                <p className="card-text">
                  <small className="text-body-secondary">{menu.type}</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DetailMenu;
