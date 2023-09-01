import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import Header from "../components/Header/Header";
import Body from "../components/Body/Body";

const Menus = () => {
  const [menus, setMenus] = useState([]);
  const navigate = useNavigate();

  const getData = () => {
    axios
      .get("https://api.mudoapi.tech/menus")
      .then((res) => {
        setMenus(res?.data?.data?.Data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDetail = (id) => {
    navigate(`/menu/${id}`)
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Header />
      <Body menus={menus} handleDetail={handleDetail} />
    </>
  );
};

export default Menus;
