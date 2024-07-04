import Footer from "../components/Footer";
import Header from "../components/Header";
import MensajeFooter from "../components/MensajeFooter";
import { imagenes } from "../data/imagenes";
import Mis_proyectos from "./Mis-proyectos";

function HomePage() {
  return (
    <>
    <div>
      <Header />
      <div className="mt-16 mb-10">
        <div className="flex flex-row justify-between items-center mx-20">
          <img
            src={imagenes[0].imagen}
            alt={imagenes[0].nombre}
            className="w-96"
          />
          <div className="flex flex-col justify-center items-start w-[780px] text-justify">
            <p>
              {`Hola, soy Jorge Orozco, un diseñador UX con sede en España de
              momento y un apasionado por crear experiencias de usuario
              agradables y fluidas para crear puentes entre las empresas y sus
              usuarios. Desde siempre me ha gustado todo lo relacionado con la
              informatica y disfruto especialmente trabajando en diseño de
              usuario.`}
            </p>
            <br />
            <p>
              {`"Con orden y tiempo se encuentra el secreto de hacerlo todo, y de
              hacerlo bien" (Pitagoras)`}
            </p>
            <br />
            <p>
              {`Cuando no estoy diseñando, puedes encontrarme disfrutando de un
              buen paseo, cocinando algo bien rico o pasandolo bien con juegos
              de estrategia online...`}
            </p>
          </div>
        </div>
      </div>
    </div>
    <Mis_proyectos  />
    <Footer />
    <MensajeFooter />
    </>
  );
}

export default HomePage;
