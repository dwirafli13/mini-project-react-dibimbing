import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import Header from "../components/Header/Header";
import Body from "../components/Body/Body";
import Footer from "../components/Footer/Footer";

const Menus = () => {
  const [menus, setMenus] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [nextPage, setNextPage] = useState(1);
  const [categ, setCateg] = useState("");
  const navigate = useNavigate();

  const getData = () => {
    axios
      .get(
        `https://api.mudoapi.tech/menus?perPage=6&page=${currentPage}&name=${search}&type=${categ}`
      )
      .then((res) => {
        setMenus(res?.data?.data?.Data);
        setCurrentPage(res?.data?.data?.currentPage);
        setNextPage(res?.data?.data?.nextPage);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDetail = (id) => {
    navigate(`/menu/${id}`);
  };

  const handleChanceSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleChangeBeverage = () => {
    setCateg("beverage");
  };

  const handleChangeMainDish = () => {
    setCateg("main-dish");
  };

  const handleChangeAllCateg = () => {
    setCateg("");
  };

  const handleDelete = (id) => {
    const token = localStorage.getItem("token");

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .delete(`https://api.mudoapi.tech/menu/${id}`, config)
      .then((res) => {
        console.log(res);
        getData();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, [search, currentPage, categ]);

  return (
    <>
      <Header getData={getData} handleChanceSearch={handleChanceSearch} />
      <Body
        menus={menus}
        handleDetail={handleDetail}
        handleDelete={handleDelete}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        nextPage={nextPage}
        handleChangeBeverage={handleChangeBeverage}
        handleChangeMainDish={handleChangeMainDish}
        handleChangeAllCateg={handleChangeAllCateg}
      />
      <Footer />
    </>
  );
};

export default Menus;
