import linkedin from "../img/linkedin.png";
import discord from "../img/discord.png";
import gmail from "../img/gmail.png";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center mb-10">
      <h2 className="rozha-one-regular text-4xl my-10">
        Para contactar conmigo
      </h2>
      <div className="flex flex-row justify-center items-center">
        <div className="flex flex-col justify-center items-center px-20">
          <h3 className="rozha-one-regular text-4xl my-10">Email:</h3>
          <p className="text-center mb-5">
            Si desea mas informacion o contactar conmigo puede hacerlo en el
            siguiente email, lo consulto casi a diario y siempre contesto:
          </p>
          <p className="text-[#3950C5] mb-5">jorgejuan.orozco@gmail.com</p>
          <a href="">
            <img
              src={gmail}
              alt="Icono de Gmail"
              className="w-12 cursor-pointer"
            />
          </a>
        </div>

        <div className="flex flex-col justify-center items-center px-20">
          <h3 className="rozha-one-regular text-4xl my-10">Discord:</h3>
          <p className="text-center mb-5">
            Otra forma de contactar seria a traves de Discord, donde podriamos
            hablar, compartir o hacer video conferencias si se desea:
          </p>
          <p className="text-[#3950C5] mb-5">jorestep#9594</p>
          <a href="">
            <img
              src={discord}
              alt="Icono de Discord"
              className="w-12 cursor-pointer"
            />
          </a>
        </div>

        <div className="flex flex-col justify-center items-center px-20">
          <h3 className="rozha-one-regular text-4xl my-10">Linkedin:</h3>
          <p className="text-center mb-5">
            Y si desea ver o contactar conmigo a traves de Linkedin aqui les
            dejo mi link para poder comunicarnos... :
          </p>
          <p className="text-[#3950C5] mb-5 underline">
            https://www.linkedin.com/in/jorge-orozco
          </p>
          <a href="https://www.linkedin.com/in/jorge-orozco">
            <img
              src={linkedin}
              alt="Icono de linkedin"
              className="w-12 cursor-pointer"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
