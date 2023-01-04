import React from "react";
import Image1 from "../../assets/img/menu.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import img from "../../assets/img/croix.svg";
// import portfolio from "../../assets/img/portfolio.svg";
import sega from "../../assets/img/sega.png";
import ubisoft from "../../assets/img/ubisoft.png";
import contact from "../../assets/img/contact1.svg";
import microsoft from "../../assets/img/microsoft.svg";
import electronic from "../../assets/img/electronic.svg";
import capcom from "../../assets/img/capcom.png";
import bethesda from "../../assets/img/bethesda.png"

const Header = () => {
  return (
    <div className="ml-4">
      <div className="grid grid-cols-2 justify-items-stretch">
      <h4 className="text-2xl font-bold text-white pl-8 pt-8">OLIVIER.</h4>
      <img className="justify-self-end mt-4 mr-4" src={Image1} alt="" />
      </div>
      <div className="flex flex-row pt-6 text-white pl-8">
        <h6 className="underline decoration-orange-500 ">JE SUIS</h6>
        <h6>FULLSTACK DESIGNER</h6>
      </div>
      <p className="text-4xl text-white pl-8">Hola,mi nombre es</p>{" "}
      <p className="text-6xl font-bold text-orange-500 pl-8">Olivier.</p>
      <FontAwesomeIcon icon="fa-solid fa-plus" />
      <img className="pl-8 pt-3 " src={img} alt="" />
      <br />
      <p className="text-white px-8 ">
        Développement : Environnement LAMP, Zend Framework, ExtJS, Webservices,
        AMFPHP, API Google Maps, Facebook Open Graph, API Twitter
      </p>
      <br />
      <p className="text-white pl-8">Directeur technique Webedia Madrid</p><br/>
      <div className="grid-cols-2 ">
      <div className="flex flex-row ml-8 ">
        <button className="bg-custom-red font-roboto font-normal rounded-3xl text-sm w-32 h-12 mr-8 px-10 mt-22 mb-10 ">
          Portfolio
        </button>
        <img className="mb-8" src={contact} alt="" />
      </div>
      <p className="text-white pl-8">clients</p>
      </div>
      <div className="flex mt-12">
          <img className="ml-12" src={sega} alt="" width={110.78} height={36.96}/>
      <img className="bg-custom-red mx-20 " src={ubisoft} alt="" width={82} height={76}/>
        </div>
        <div className="flex">
        <img className="mr-8" src={microsoft} alt="" width={187} height={83} />
        <img className="mr-20" src={electronic} alt="" />
        </div>
        <div className="flex justify-center ml-6">
          <img className="mr-12" src={capcom} alt="" width={131} height={24}/>
          <img className="mr-8" src={bethesda} alt="" width={158} height={22} />
          </div>
          </div>
    
  );
};

export default Header;
