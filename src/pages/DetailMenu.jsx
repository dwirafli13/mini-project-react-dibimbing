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
      <img src={menu.imageUrl} style={{ width: "500px" }} />
      <h1>{menu.name}</h1>
      <p>{menu.description}</p>
      <p>{menu.priceFormatted}</p>
      <p>{menu.type}</p>
    </>
  );
};

export default DetailMenu;
