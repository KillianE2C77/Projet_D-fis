import React from "react";
import Image1 from "../../assets/img/menu.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import img from "../../assets/img/croix.svg";
import portfolio from "../../assets/img/portfolio.svg";
import sega from "../../assets/img/sega.svg";

const Header = () => {
  return (
    <div className="ml-8 mt-6 ">
      <h4 className="text-2xl font-bold">OLIVIER.</h4>
      <img className="pl-80 -mt-8" src={Image1} alt="" />
      <div className="flex flex-row pt-6 ">
        <h6 className="underline decoration-orange-500">JE SUIS</h6>
        <h6>FULLSTACK DESIGNER</h6>
      </div>
      <p className="text-4xl">Hola,mi nombre es</p>{" "}
      <p className="text-6xl font-bold text-orange-500">Olivier.</p>
      <FontAwesomeIcon icon="fa-solid fa-plus" />
      <img className="pl-8 pt-3 " src={img} alt="" />
      <br />
      <p>
        Développement : Environnement LAMP, Zend Framework, ExtJS, Webservices,
        AMFPHP, API Google Maps, Facebook Open Graph, API Twitter
      </p>
      <br />
      <p>Directeur technique Webedia Madrid</p>
      <div className="flex justify-center">
        <button className="bg-custom-red font-roboto font-normal rounded-3xl text-sm w-32 h-12 mr-8 px-10 mt-8 ">
          Portfolio
        </button>
        <img className="" src={portfolio} alt="" />
      </div>
      <img src={sega} alt="" />
    </div>
  );
};

export default Header;
