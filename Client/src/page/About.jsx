import React, { useContext } from "react";
import logo from "../assets/Home/navlogo.png";
import Navbar from "../components/Home/Navbar/Navbar";
import Footer from "../components/Home/Footer";
import Content from "../components/About/Content";
import { Mycontext } from "../context/Mycontext";
import Mobilenav from "../components/Home/Navbar/Mobilenav";

export default function About() {
  const { isnavbar } = useContext(Mycontext);
  return (
    <>
      <Navbar />
      {isnavbar && <Mobilenav />}
      <Content />
      <Footer />
    </>
  );
}
