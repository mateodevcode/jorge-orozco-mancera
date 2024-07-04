import Enlace from "./Enlace";
import { enlaces_espanol } from "../data/enalces.navbar";
import { flags } from "../data/flags";

const Header = () => {
  return (
    <navbar className=" flex flex-row justify-between items-center">
      <div className="flex flex-row justify-center items-center mx-20 rozha-one-regular first-color">
        <h1 className="text-5xl">J.O.</h1> <p className="mx-2 text-4xl uppercase">ux</p>
      </div>
      <div className="flex flex-row justify-center items-center ml-60">
        <img src={flags[0].imagen} alt="" className="w-12 mx-2" />
        <img src={flags[1].imagen} alt="" className="w-12 mx-2" />
      </div>
      <div className="flex flex-row justify-center items-center rozha-one-regular mx-20">
        <ul className="flex flex-row justify-center items-center">
          {enlaces_espanol.map((enlace, index) => (
            <li key={index} className="mx-6 text-xl hover:text-[#3950C5]">
              <Enlace nombre={enlace.nombre} URL={enlace.URL} />
            </li>
          ))}
        </ul>
      </div>
    </navbar>
  );
};

export default Header;
