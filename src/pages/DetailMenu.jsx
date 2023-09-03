import React from "react";
import Header from "../components/Header/Header";
import { useParams } from "react-router";
import axios from "axios";
import { useState, useEffect } from "react";

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
      <div className="container">
        <div className="card mb-3">
          <img src={menu.imageUrl} className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">{menu.name}</h5>
            <p className="card-title">{menu.description}</p>
            <p className="card-title">{menu.priceFormatted}</p>
            <p className="card-title">{menu.type}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailMenu;
