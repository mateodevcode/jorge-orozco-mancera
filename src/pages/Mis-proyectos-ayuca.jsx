import Header from "../components/Header";
import imagen_pro_1 from "../img/ayuca/img-port-001.png";
import imagen_pro_2 from "../img/ayuca/img-port-002.png";
import imagen_pro_3 from "../img/ayuca/img-port-003.png";
import imagen_pro_4 from "../img/ayuca/img-port-004.png";
import imagen_pro_5 from "../img/ayuca/img-port-005.png";
import imagen_pro_6 from "../img/ayuca/img-port-006.png";
import imagen_pro_7 from "../img/ayuca/img-port-007.png";
import imagen_pro_8 from "../img/ayuca/img-port-008.png";
import imagen_pro_9 from "../img/ayuca/img-port-009.png";
import imagen_pro_10 from "../img/ayuca/img-port-010.png";
import imagen_pro_11 from "../img/ayuca/img-port-011.png";
import imagen_pro_12 from "../img/ayuca/img-port-012.png";
import imagen_pro_13 from "../img/ayuca/img-port-013.png";
import imagen_pro_14 from "../img/ayuca/img-port-014.png";
import imagen_pro_15 from "../img/ayuca/img-port-015.png";
import imagen_pro_16 from "../img/ayuca/img-port-016.png";

import logo_figma from "../img/logo-figma.png";
import linkedin from "../img/linkedin.png";
import discord from "../img/discord.png";
import gmail from "../img/gmail.png";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";

const MisProyectosAyuca = () => {
  return (
    <div>
      <Header />

      <div className="flex flex-col justify-center items-center">
        <h2 className="uppercase font-semibold rozha-one-regular text-5xl mt-14 mb-14">
          proyecto “AYUCA”
        </h2>

        <div className="w-full flex flex-row justify-between items-start">
          <div className="flex flex-col justify-center items-center">
            <div className="p-4 fondo-1 w-[450px] rounded-r-2xl rozha-one-regular text-xl pl-10">
              El Problema:
            </div>
            <p className="w-[450px] rounded-r-2xl text-base pl-12 mt-20 text-justify">
              Caso practico de la creacion de una app y sitio web para Ayuca,
              Asociacion de ayuda a enfermos con cancer y sus familiares. Y
              buscan una forma de informarse y formarse online, para tener mas
              informacion y ayuda en su lucha contra el cancer, y que al mismo
              tiempo puedan estar conectados unos con otros
            </p>
          </div>
          <img src={imagen_pro_1} alt="" className="mr-20 w-[850px]" />
        </div>

        <div className="w-full">
          <div className="p-4 fondo-1 w-[450px] rounded-r-2xl rozha-one-regular text-xl pl-10">
            El objetivo:
          </div>
          <p className="w-full rounded-r-2xl text-base pl-12 my-5 text-justify pr-20">
            Diseñar una Aplicacion y pagina web para que las personas con Cancer
            y sus familiares puedan obtener informacion de forma rapida, asi
            como asistencia, ayuda y apoyo online, de una forma mas comoda y
            desde sus hogares
          </p>
        </div>

        <div className="w-full">
          <div className="p-4 fondo-1 w-[450px] rounded-r-2xl rozha-one-regular text-xl pl-10">
            El rol:
          </div>
          <p className="w-full rounded-r-2xl text-base pl-12 my-5 text-justify pr-20">
            Alumno del curso de Diseño UX de coursera. Diseñador de UX a cargo
            de la realizacion de una aplicación y un sitio web para un proyecto
            Sharpe dentro del curso para aprender y realizarlas de una forma
            responsive
          </p>
        </div>

        <div className="w-full">
          <div className="p-4 fondo-1 w-[450px] rounded-r-2xl rozha-one-regular text-xl pl-10">
            Responsabilidades:
          </div>
          <p className="w-full rounded-r-2xl text-base pl-12 my-5 text-justify pr-20">
            Realización de entrevistas, esquemas en papel y digitales, creación
            de prototipos de baja y alta fidelidad, realización de estudios de
            facilidad de uso, accesibilidad e iteración de diseños.
            investigación de usuarios, y otros.
          </p>
        </div>

        <div className="bg-black w-full rozha-one-regular fondo-2 text-white text-center text-5xl py-20">
          Empatizar - Descubrir
        </div>

        <div className="w-full mt-10">
          <div className="p-4 fondo-1 w-[450px] rounded-r-2xl rozha-one-regular text-xl pl-10">
            Investigacion Primaria :
          </div>
          <p className="w-full rounded-r-2xl text-base pl-12 my-5 text-justify pr-20">
            Realicé entrevistas cualitativas a 7 usuarios y creé mapas de
            empatía para entender para quienes diseño, así como sus necesidades,
            deseos y frustraciones. Un grupo de usuarios primario identificado a
            través de la investigación fueron personas con Cancer y sus
            familiares que deseaban tener informacion de forma rapida sobre esta
            enfermedad, de como combatirla o que ayudas podrian tener en su
            lucha personal.
          </p>
          <p className="w-full rounded-r-2xl text-base pl-12 my-5 text-justify pr-20">
            Este grupo de usuarios confirmó que necesitaban una forma de
            interconectarse. La investigación también reveló que habia una falta
            de informacion de como conocer y combatir esta enfermedad, de las
            ayudas a nivel personal y profesional que podian tener y otras.
          </p>
        </div>

        <div className="w-full">
          <div className="p-4 fondo-1 w-[450px] rounded-r-2xl rozha-one-regular text-xl pl-10">
            Investigacion Secundaria :
          </div>
          <p className="w-full rounded-r-2xl text-base pl-12 my-5 text-justify pr-20">
            Tome datos e informacion de “Plan de marketing para una PIME,
            Floristeria Mora”, de la Universidad de Cantabria entre otras Tesis
            universitarias de un total de 4. Aportando datos cuantificables como
            la cantidad de flores que compran los usuarios al año, si son para
            regalo o para ellos entre otras.
          </p>
        </div>

        <div>
          <div className="bg-black w-full rozha-one-regular fondo-2 text-white text-center text-2xl px-40 py-2 rounded-2xl mt-5">
            Puntos Debiles:
          </div>
        </div>

        <div className="w-full mt-10 flex flex-row justify-between items-start">
          <div className="flex flex-col justify-center items-center w-80 mx-5 ml-12">
            <div className="text-7xl rozha-one-regular">1</div>
            <div className="rozha-one-regular text-2xl fondo-1 w-full text-center rounded-xl py-2 mt-5">
              Informacion
            </div>
            <p className="text-center mt-5 px-2">
              La mayoria no sabe bien donde acudir o como informarse
              adecuadamente cuando le diagnostican un cancer y desearian a
              alguien que les informe y les diga que y como hacer.
            </p>
          </div>

          <div className="flex flex-col justify-center items-center w-80 mx-5">
            <div className="text-7xl rozha-one-regular">2</div>
            <div className="rozha-one-regular text-2xl fondo-1 w-full text-center rounded-xl py-2 mt-5">
              Desconocimiento
            </div>
            <p className="text-center mt-5 px-2">
              Muchos usuarios no saben bien que es el cancer a nivel personal,
              aunque si a nivel general, y no saben como prevenir, o actuar
              cuando son diagnosticados.
            </p>
          </div>

          <div className="flex flex-col justify-center items-center w-80 mx-5">
            <div className="text-7xl rozha-one-regular">3</div>
            <div className="rozha-one-regular text-2xl fondo-1 w-full text-center rounded-xl py-2 mt-5">
              Pedir Ayuda
            </div>
            <p className="text-center mt-5 px-2">
              La mayoria encuentra apoyo en su Familia, pero muchas veces desean
              a otros que padezcan lo que ellos tienen para compartir y tambien
              un apoyo tanto sanitario, como de acompañamiento y otros.
            </p>
          </div>

          <div className="flex flex-col justify-center items-center w-80 mx-5 mr-12">
            <div className="text-7xl rozha-one-regular">4</div>
            <div className="rozha-one-regular text-2xl fondo-1 w-full text-center rounded-xl py-2 mt-5">
              Eventos
            </div>
            <p className="text-center mt-5 px-2">
              Muchos usuarios no saben del todo bien que eventos realiza la
              asociacion, para recaudar fondos, o tambien para concienciacion
              contra el cancer u otros.
            </p>
          </div>
        </div>

        <div className="bg-black w-full rozha-one-regular fondo-2 text-white text-center text-5xl py-20 mt-10">
          Personas
        </div>

        <div className="w-full flex flex-row justify-between items-start mt-10">
          <div className="flex flex-col justify-center items-center">
            <div className="p-4 fondo-1 w-[450px] rounded-r-2xl rozha-one-regular text-xl pl-10">
              Planteamiento de Problema:
            </div>
            <p className="w-[450px] rounded-r-2xl text-base pl-12 mt-32 text-center">
              Marina es una enferma con cancer de mama que necesita informacion,
              apoyo y acompañamiento porque ella sola no puede luchar contra el
              cancer.
            </p>
          </div>
          <img src={imagen_pro_2} alt="" className="mr-20 w-[850px]" />
        </div>

        <div className="bg-black w-full rozha-one-regular fondo-2 text-white text-center text-5xl py-20 mt-10">
          Mapa de Recorrido de Usuario : Marina
        </div>

        <div className="w-full flex flex-row justify-between items-start mt-10">
          <div className="flex flex-col justify-center items-center">
            <p className="w-[550px] rounded-r-2xl text-base pl-12 mt-60 text-center">
              Crear un mapa de recorrido del usuario de Paula reveló lo útil que
              sería para los usuarios tener acceso a una app dedicada a la
              compra y asesoramiento para la compra de flores y plantas
            </p>
          </div>
          <img src={imagen_pro_3} alt="" className="mr-20 w-[850px]" />
        </div>

        <div className="bg-black w-full rozha-one-regular fondo-2 text-white text-center text-5xl py-20 mt-10">
          Y Comenzamos el Diseño:
        </div>
        <div>
          <div className="bg-black w-full rozha-one-regular fondo-1 text-center text-2xl px-40 py-2 rounded-2xl mt-5">
            Esquemas de pagina en papel:
          </div>
        </div>

        <div className="w-full flex flex-row justify-between items-start">
          <div className="flex flex-col justify-center items-center">
            <p className="w-[550px] rounded-r-2xl text-base pl-12 mt-60 text-center">
              La realizacion de bocetos en papel me ayudo a hacer de forma
              rapida y facil, todo lo que seria el diseño de una forma mas
              eficiente y en poco tiempo... En la pagina de inicio priorice el
              incluir las 8 actuaciones basicas que tiene Ayuca, asi como las
              donaciones, eventos, voluntariado y otros.
            </p>
          </div>
          <img
            src={imagen_pro_4}
            alt=""
            className="mr-20 w-[850px] mt-5 rounded-2xl"
          />
        </div>

        <div>
          <div className="bg-black w-full rozha-one-regular fondo-1 text-center text-2xl px-40 py-2 rounded-2xl mt-5">
            Esquemas de pagina en papel:
          </div>
        </div>

        <div className="w-full flex flex-row justify-between items-start">
          <div className="flex flex-col justify-center items-center">
            <p className="w-[550px] rounded-r-2xl text-base pl-12 mt-60 text-center">
              Despues de realizar los esquemas digitales he hecho una
              investigacion sobre estos me asegure de realizar los cambios de
              diseño en las pantallas según los comentarios y resultados de la
              investigacion de usuario
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="w-[300px] rounded-r-2xl text-base pl-12 mt-[330px] text-center">
              No les parecia bien tener 4 botones en forma de arco
            </p>
            {/* Flecha */}
            <div className="flex flex-row justify-end items-center mt-5 w-full">
              <div className="bg-[#fbc012] w-[150px] h-1 -mr-2"></div>
              <BiSolidRightArrow className="text-[#fbc012]" />
            </div>
          </div>
          <img
            src={imagen_pro_5}
            alt=""
            className="w-[300px] mt-5 rounded-2xl"
          />

          <div className="flex flex-col justify-center items-center mr-10">
            <p className="w-[300px] rounded-r-2xl text-base mt-56 text-center">
              No tiene mucho sentido 3 botones para donaciones
            </p>
            {/* Flecha */}
            <div className="flex flex-row justify-start items-center mt-5 w-full">
              <BiSolidLeftArrow className="text-[#fbc012]" />
              <div className="bg-[#fbc012] w-[150px] h-1 -ml-2"></div>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-row justify-between items-start">
          <div className="flex flex-col justify-center items-center">
            <p className="w-[550px] rounded-r-2xl text-base pl-12 mt-60 text-center">
              Despues de probar la aplicacion se pudo encontrar algunas mejoras
              para que los usuarios puedan experimentar una mejor navegacion y
              encontrar las cosas de una forma mas facil e intuitiva.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="w-[300px] rounded-r-2xl text-base pl-12 mt-[230px] text-center">
              Las 6 cards las prefieren juntas y al mismo nivel
            </p>
            {/* Flecha */}
            <div className="flex flex-row justify-end items-center mt-5 w-full">
              <div className="bg-[#fbc012] w-[150px] h-1 -mr-2"></div>
              <BiSolidRightArrow className="text-[#fbc012]" />
            </div>
          </div>
          <img
            src={imagen_pro_6}
            alt=""
            className="w-[300px] mt-5 rounded-2xl"
          />

          <div className="flex flex-col justify-center items-center mr-10">
            <p className="w-[300px] rounded-r-2xl text-base mt-72 text-center">
              La separacion entre las 3 fotos de Heroe no quedaban bien en la
              aplicacion, asi que se juntaron
            </p>
            {/* Flecha */}
            <div className="flex flex-row justify-start items-center mt-5 w-full">
              <BiSolidLeftArrow className="text-[#fbc012]" />
              <div className="bg-[#fbc012] w-[150px] h-1 -ml-2"></div>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-row justify-between items-start">
          <div className="flex flex-col justify-center items-center">
            <p className="w-[550px] rounded-r-2xl text-base pl-12 mt-60 text-center">
              Aqui se puede apreciar algunas de las paginas de la aplicacion en
              digital y antes de la investigacion y las mejoras que se
              realizaron...
            </p>
          </div>
          <img
            src={imagen_pro_7}
            alt=""
            className="mr-20 w-[850px] mt-5 rounded-2xl"
          />
        </div>

        <div className="w-full flex flex-row justify-between items-start">
          <div className="flex flex-col justify-center items-center">
            <p className="w-[550px] rounded-r-2xl text-base pl-12 mt-60 text-center">
              Y aqui se puede apreciar el prototipo de baja fidelidad realizado
              para hacer el estudio de usabilidad y antes de realizar los
              cambios que se obtubieron de la investigacion. Se realizaron 2
              flujos, una para el sitio web y otro para la app.
            </p>
          </div>
          <img
            src={imagen_pro_8}
            alt=""
            className="mr-20 w-[850px] mt-5 rounded-2xl"
          />
        </div>

        <div className="bg-black w-full rozha-one-regular fondo-2 text-white text-center text-5xl py-20 mt-10">
          Estudio de Facilidad de Uso : Hallazgos
        </div>

        <p className="px-20 my-5 text-center">
          Se realizo 1 ronda para este estudio de facilidad de uso moderado,
          realizado en la localidad de Ronda, Malaga (España), en la que tubimos
          7 participantes, 4 mujeres y 3 hombres, y 2 de ellos eran familiares
          y/o cuidadores y no enfermos. La duracion aproximada de cada estudio
          fue de 45 minutos. Esto ayudo a guiar los diseños para convertirlos de
          esquemas de paginas a maquetas, revelando este estudio las primeras
          mejoras de usuario que se podian realizar al diseño.
        </p>

        <div className="w-full mt-5">
          <div className="p-4 fondo-1 w-[450px] rounded-r-2xl rozha-one-regular text-xl pl-10">
            Hallazgos de la Ronda 1 :
          </div>
          <div className="pl-10 pt-10">
            <div className="flex flex-row justify-center items-center">
              <div className="text-7xl rozha-one-regular">1</div>
              <p className="w-full rounded-r-2xl text-base pl-12 my-5 text-justify pr-20">
                Los botones de donaciones estaban repetidos en la pagina de
                inicio.
              </p>
            </div>

            <div className="flex flex-row justify-center items-center">
              <div className="text-7xl rozha-one-regular">2</div>
              <p className="w-full rounded-r-2xl text-base pl-12 my-5 text-justify pr-20">
                Las 8 cards de la pagina de inicio del sitio web eran muy
                pequeñas.
              </p>
            </div>

            <div className="flex flex-row justify-center items-center">
              <div className="text-7xl rozha-one-regular">3</div>
              <p className="w-full rounded-r-2xl text-base pl-12 my-5 text-justify pr-20">
                Las 4 Actividades en forma de arco no gusto mucho a los
                usuarios.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-black w-full rozha-one-regular fondo-2 text-white text-center text-5xl py-20 mt-10">
          Perfeccionamiento del Diseño :
        </div>

        <div>
          <div className="bg-black w-full rozha-one-regular fondo-1 text-center text-2xl px-40 py-2 rounded-2xl mt-5">
            Maquetas
          </div>
        </div>

        <div className="w-full">
          <div className="flex flex-row justify-center items-start w-full">
            <div className="flex flex-col justify-center items-center w-[700px] mx-5 px-10">
              <div className="rozha-one-regular text-2xl fondo-1 w-80 text-center rounded-xl py-2 mt-5">
                Antes
              </div>
            </div>

            <div className="flex flex-col justify-center items-center w-[700px] mx-5 px-10">
              <div className="rozha-one-regular text-2xl fondo-1 w-80 text-center rounded-xl py-2 mt-5">
                Despues
              </div>
            </div>
          </div>
        </div>

        <p className="px-20 my-5 text-center">
          Se cambiaron las 4 tarjetas de “Actividades” en forma de arco por una
          sola integrada en las 8 actuaciones generales de Ayuca para limpiar un
          poco la pantalla.
        </p>

        <div className="w-full flex flex-row justify-between items-center px-16">
          <div>
            <img src={imagen_pro_9} alt="" />
          </div>
          {/* Flecha */}
          <div className="flex flex-row justify-end items-center mx-4">
            <div className="bg-[#fbc012] w-[150px] h-1 -mr-2"></div>
            <BiSolidRightArrow className="text-[#fbc012]" />
          </div>
          <div>
            <img src={imagen_pro_10} alt="" />
          </div>
        </div>

        <p className="px-20 my-5 text-center">
          Se cambiaron las 4 tarjetas de “Actividades” en forma de arco por una
          sola integrada en las 8 actuaciones generales de Ayuca para limpiar un
          poco la pantalla.
        </p>

        <div className="w-full flex flex-row justify-between items-center px-16 mb-5">
          <div>
            <img src={imagen_pro_11} alt="" />
          </div>
          {/* Flecha */}
          <div className="flex flex-row justify-end items-center mx-4">
            <div className="bg-[#fbc012] w-[150px] h-1 -mr-2"></div>
            <BiSolidRightArrow className="text-[#fbc012]" />
          </div>
          <div>
            <img src={imagen_pro_12} alt="" />
          </div>
        </div>

        <div className="w-full flex flex-row justify-between items-center px-16">
          <div>
            <img src={imagen_pro_13} alt="" />
          </div>
          {/* Flecha */}
          <div className="flex flex-col justify-center items-center">
            <p className="w-[600px] rounded-r-2xl text-base text-center mb-5">
              Se pusieron las 6 cards de cada pagina de la aplicacion juntas y
              al mismo nivel para ahorrar espacio y una mejor comprension y
              navegacion de los usuarios. Estas son algunas de las mejoras
              realizadas despues del estudio de facilidad de uso...
            </p>
            {/* Flecha */}
            <div className="flex flex-row justify-center items-center">
              <div className="bg-[#fbc012] w-[150px] h-1 -mr-2"></div>
              <BiSolidRightArrow className="text-[#fbc012]" />
            </div>
          </div>
          <div>
            <img src={imagen_pro_14} alt="" />
          </div>
        </div>

        <div className="my-5">
          <img src={imagen_pro_15} alt="" />
        </div>

        <div className="w-full flex flex-row justify-between items-start mt-10">
          <div className="flex flex-col justify-center items-center">
            <div className="p-4 fondo-1 w-[450px] rounded-r-2xl rozha-one-regular text-xl pl-10">
              Prototipo de Alta Fidelidad :
            </div>
            <p className="w-[450px] rounded-r-2xl text-base pl-12 mt-32 text-center">
              El flujo de Alta Fidelidad se encuentra mas limpio y accesible
              despues de los cambios realizados, asi como la combinacion de
              colores según el Logo original, para una mejor presentacion de
              pantallas, mas limpia y funcional
            </p>
          </div>
          <img src={imagen_pro_16} alt="" className="mr-20 w-[850px]" />
        </div>

        <div className="w-full">
          <div className="p-4 fondo-1 w-[450px] rounded-r-2xl rozha-one-regular text-xl pl-10">
            Consideraciones de Accesibilidad :
          </div>
          <div className="w-full mt-10 flex flex-row justify-between items-center pr-10">
            <div className="flex flex-col justify-center items-center w-96 mx-5 ml-12">
              <div className="text-7xl rozha-one-regular">1</div>
              <p className="text-center mt-5 px-2">
                Se usaron iconos, botones e inputs fields según los estandares
                de la industria, casi todos extraidos de Material Design y de la
                comunidad de Figma.
              </p>
            </div>

            <div className="flex flex-col justify-center items-center w-96 mx-5">
              <div className="text-7xl rozha-one-regular">2</div>
              <p className="text-center mt-5 px-2">
                Se uso una gama de colores acorde con el Logo de Ayuca, y del
                Cancer en general, buscando una combinacion que pudiera hacer
                contraste y no tener dificultades visuales.
              </p>
            </div>

            <div className="flex flex-col justify-center items-center w-96 mx-5">
              <div className="text-7xl rozha-one-regular">3</div>
              <p className="text-center mt-5 px-2">
                En la maqueta de alta fidelidad se usaron fotos descargadas de
                internet, a la espera de el catalogo que tiene la propia
                asociacion.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-black w-full rozha-one-regular fondo-2 text-white text-center text-5xl py-20 mt-10">
          El Futuro
        </div>

        <div className="w-full mt-10">
          <div className="p-4 fondo-1 w-[450px] rounded-r-2xl rozha-one-regular text-xl pl-10">
            Conclusiones :
          </div>
          <div className="flex flex-row justify-center items-start w-full">
            <div className="flex flex-col justify-center items-center w-[700px] mx-5 px-10">
              <div className="rozha-one-regular text-2xl fondo-1 w-80 text-center rounded-xl py-2 mt-5">
                Impacto
              </div>
              <p className="text-center mt-5 px-2">
                Esta web y aplicación hara que las personas con cancer y sus
                familiares, de Ronda y la serrania tengan un mejor acceso a
                informacion, para tembien recibir un apoyo, tanto economico,
                como psicologico, social y animico para superar su emfermedad.
              </p>
            </div>

            <div className="flex flex-col justify-center items-center w-[700px] mx-5 px-10">
              <div className="rozha-one-regular text-2xl fondo-1 w-80 text-center rounded-xl py-2 mt-5">
                Que Aprendi
              </div>
              <p className="text-center mt-5 px-2">
                En el proceso de diseño he podido aprender mucho mas de lo que
                sabia de como hacer y preparar investigaciones, asi como la
                importancia de los feedback, y siendo una asociacion de ayuda
                para enfermos de cancer me he sentido muy cercano a los enfermos
                y sus familiares.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full mt-5">
          <div className="p-4 fondo-1 w-[450px] rounded-r-2xl rozha-one-regular text-xl pl-10">
            Proximos Pasos :
          </div>
          <div className="w-full mt-10 flex flex-row justify-between items-center pr-10">
            <div className="flex flex-col justify-center items-center w-96 mx-5 ml-12">
              <div className="text-7xl rozha-one-regular">1</div>
              <p className="text-center mt-5 px-2">
                Una vez este la web y app totalmente desarrollada y online,
                esperaremos unos 3 meses para hacer una ronda de
                investigaciones, asi como recoger feedbacks de los usuarios y
                asi poder solventar algunos problemas de usabilidad si los
                hubiere.
              </p>
            </div>

            <div className="flex flex-col justify-center items-center w-96 mx-5">
              <div className="text-7xl rozha-one-regular">2</div>
              <p className="text-center mt-5 px-2">
                Realizar tambien en el futuro una ronda de investigaciones para
                ampliar la web y aplicación en funcion de las necesidades de los
                usuarios de la asociacion Ayuca.
              </p>
            </div>

            <div className="flex flex-col justify-center items-center w-96 mx-5">
              <div className="text-7xl rozha-one-regular">3</div>
              <p className="text-center mt-5 px-2">
                Realizar alguna investigacion de usuario para ver las posibles
                necesidades de estos para hacer alguna mejora en el futuro no
                muy lejano.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-black w-full rozha-one-regular fondo-2 text-white text-center text-5xl py-20 mt-10">
          ! Gracias !
        </div>

        <p className="px-20 my-10 text-center">
          Muchisimas gracias por dedicar su tiempo a leer mi presentacion sobre
          este mi segundo proyecto, solo espero que les haya gustado mi trabajo
          y tambien espero que me den su feedback, su opinion de que esta bien,
          que esta regular y que se podria mejorar en este proyecto, para poder
          tenerlo en cuenta para los proximos...
        </p>

        <div className="flex flex-row justify-center items-center">
          <img src={logo_figma} alt="" />
          <div className="bg-black w-full rozha-one-regular fondo-1 text-center text-2xl px-40 py-2 rounded-2xl underline">
            ¿Desea probar el prototipo?
          </div>
          <img src={logo_figma} alt="" />
        </div>

        <p className="px-20 my-10 text-center">
          Y ya con poco o nada mas que decir les dejo mis datos para que puedan
          contactar, hasta la proxima interaccion...
        </p>

        <div className="flex flex-row justify-center items-center my-10">
          <div className="flex flex-col justify-center items-center px-40">
            <a href="">
              <img
                src={gmail}
                alt="Icono de Gmail"
                className="w-12 cursor-pointer mb-5"
              />
            </a>
            <p className="text-[#3950C5] mb-5">jorgejuan.orozco@gmail.com</p>
          </div>

          <div className="flex flex-col justify-center items-center px-20">
            <a href="">
              <img
                src={discord}
                alt="Icono de Discord"
                className="w-12 cursor-pointer mb-5"
              />
            </a>
            <p className="text-[#3950C5] mb-5">jorestep#9594</p>
          </div>

          <div className="flex flex-col justify-center items-center px-20">
            <a href="https://www.linkedin.com/in/jorge-orozco">
              <img
                src={linkedin}
                alt="Icono de linkedin"
                className="w-12 cursor-pointer mb-5"
              />
            </a>
            <p className="text-[#3950C5] mb-5 underline">
              https://www.linkedin.com/in/jorge-orozco
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MisProyectosAyuca;
