import Header from "../components/Header";
import { BiSolidRightArrow, BiSolidLeftArrow } from "react-icons/bi";
import imagen_pro_1 from "../img/antonella/por-img-0.png";
import imagen_pro_3 from "../img/antonella/img-port-003.png";
import imagen_pro_4 from "../img/antonella/img-port-004.png";
import imagen_pro_5 from "../img/antonella/img-port-005.png";
import imagen_pro_6 from "../img/antonella/img-port-006.png";
import imagen_pro_7 from "../img/antonella/img-port-007.png";
import imagen_pro_8 from "../img/antonella/img-port-008.png";
import imagen_pro_9 from "../img/antonella/img-port-009.png";
import imagen_pro_10 from "../img/antonella/img-port-010.png";
import imagen_pro_11 from "../img/antonella/img-port-011.png";
import imagen_pro_12 from "../img/antonella/img-port-012.png";
import imagen_pro_13 from "../img/antonella/img-port-013.png";
import imagen_pro_14 from "../img/antonella/img-port-014.png";
import imagen_pro_15 from "../img/antonella/img-port-015.png";
import imagen_pro_16 from "../img/antonella/img-port-016.png";
import imagen_pro_17 from "../img/antonella/img-port-017.png";
import imagen_pro_19 from "../img/antonella/img-port-019.png";
import imagen_pro_20 from "../img/antonella/img-port-020.png";
import logo_figma from "../img/logo-figma.png";
import linkedin from "../img/linkedin.png";
import discord from "../img/discord.png";
import gmail from "../img/gmail.png";

const MisProyectosAntonella = () => {
  return (
    <div>
      <Header />

      <div className="flex flex-col justify-center items-center">
        <h2 className="uppercase font-semibold rozha-one-regular text-5xl mt-14 mb-14">
          proyecto para floristeria “ANTONELLA”
        </h2>

        <div className="w-full flex flex-row justify-between items-start">
          <div className="flex flex-col justify-center items-center">
            <div className="p-4 fondo-1 w-[450px] rounded-r-2xl rozha-one-regular text-xl pl-10">
              El problema:
            </div>
            <p className="w-[450px] rounded-r-2xl text-base pl-12 mt-20 text-justify">
              Caso practico de la creacion de una App para la floristeria
              “Antonella” donde Los Usuarios buscan un servicio de entrega de
              flores confiable y fácil de usar on-line que brinde flores,
              plantas y accesorios de calidad, para hacer regalos o para
              decoracion, que haga entregas a tiempo con precios asequibles y un
              trato familiar para asesorarles.
            </p>
          </div>
          <img src={imagen_pro_1} alt="" className="mr-20 w-[850px]" />
        </div>

        <div className="w-full">
          <div className="p-4 fondo-1 w-[450px] rounded-r-2xl rozha-one-regular text-xl pl-10">
            El objetivo:
          </div>
          <p className="w-full rounded-r-2xl text-base pl-12 my-5 text-justify pr-20">
            Diseñar una Aplicacion para que la Floristeria “Antonella” pueda
            ofrecer a sus clientes o a los Usuarios en general la opcion de
            pedir ramos de flores, plantas, accesorios y otros articulos
            facilmente y que les permita ahorrar su tiempo al hacerlo a traves
            de una aplicacion.
          </p>
        </div>

        <div className="w-full">
          <div className="p-4 fondo-1 w-[450px] rounded-r-2xl rozha-one-regular text-xl pl-10">
            El rol:
          </div>
          <p className="w-full rounded-r-2xl text-base pl-12 my-5 text-justify pr-20">
            Alumno del curso de Diseño UX de coursera. Diseñador de UX a cargo
            de la realizacion de una aplicación para un proyecto Sharpe dentro
            del curso para aprender y realizar mi primer proyecto de portfolio
            dentro del curso.
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
            través de la investigación fueron los adultos trabajadores que no
            tienen tiempo para visitar la floristeria y hacer alli un pedido.
          </p>
          <p className="w-full rounded-r-2xl text-base pl-12 my-5 text-justify pr-20">
            Este grupo de usuarios confirmó las suposiciones iniciales sobre los
            clientes de la Floristeria, pero la investigación también reveló que
            el tiempo no era el único factor que limitaba a los usuarios a la
            hora de elegir un ramo de flores o una planta, tambien tenian el
            problema de no conocer el tipo de flores o plantas adecuados o que
            se olvidaran de fechas señaladas para hacer estos regalos.
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
              Tiempo
            </div>
            <p className="text-center mt-5 px-2">
              Los usuarios en general estan muy ocupados en sus trabajos o
              tareas domesticas como para poder ir a una Floristeria a realizar
              una compra.
            </p>
          </div>

          <div className="flex flex-col justify-center items-center w-80 mx-5">
            <div className="text-7xl rozha-one-regular">2</div>
            <div className="rozha-one-regular text-2xl fondo-1 w-full text-center rounded-xl py-2 mt-5">
            Eventos
            </div>
            <p className="text-center mt-5 px-2">
            Muchos de los usuarios manifiestan que no se acuerdan muchas veces de cuando llega una fecha señalada para hacer un regalo floral.
            </p>
          </div>

          <div className="flex flex-col justify-center items-center w-80 mx-5">
            <div className="text-7xl rozha-one-regular">3</div>
            <div className="rozha-one-regular text-2xl fondo-1 w-full text-center rounded-xl py-2 mt-5">
            Desconocimiento
            </div>
            <p className="text-center mt-5 px-2">
            Mas de la mitad de los usuarios dicen que no conocen los diferentes tipos de flores o plantas y que no saben bien que elegir a la hora de la comprar o como cuidarlas.
            </p>
          </div>

          <div className="flex flex-col justify-center items-center w-80 mx-5 mr-12">
            <div className="text-7xl rozha-one-regular">4</div>
            <div className="rozha-one-regular text-2xl fondo-1 w-full text-center rounded-xl py-2 mt-5">
            Accesibilidad
            </div>
            <p className="text-center mt-5 px-2">
            La mayoria de las plataformas on-line de Floristerias no dan muchas opciones a la hora de poder elegir un ramo de flores adecuado para el evento o la persona indicada.
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
              Paula es una enfermera con un bebe que esta muy ocupada, que
              necesita asesoramiento y ayuda para elegir un cesto floral para su
              marido, porque ella no sabe elegir las flores de temporada o que
              combinaciones hacer.
            </p>
          </div>
          <img src={imagen_pro_3} alt="" className="mr-20 w-[850px]" />
        </div>

        <div className="w-full flex flex-row justify-between items-start mt-10">
          <div className="flex flex-col justify-center items-center">
            <div className="p-4 fondo-1 w-[450px] rounded-r-2xl rozha-one-regular text-xl pl-10">
              Planteamiento de Problema:
            </div>
            <p className="w-[450px] rounded-r-2xl text-base pl-12 mt-32 text-center">
              Andrea es una camarera que trabaja muchas horas, y necesita algun
              curso o explicaciones de como decorar su casa con plantas y como
              cuidarlas, porque ella no sabe y no tiene conocimientos generales
              sobre las plantas que puede tener o de como cuidarlas
            </p>
          </div>
          <img src={imagen_pro_4} alt="" className="mr-20 w-[850px]" />
        </div>

        <div className="bg-black w-full rozha-one-regular fondo-2 text-white text-center text-5xl py-20 mt-10">
          Mapa de Recorrido de Usuario : Paula
        </div>

        <div className="w-full flex flex-row justify-between items-start mt-10">
          <div className="flex flex-col justify-center items-center">
            <p className="w-[550px] rounded-r-2xl text-base pl-12 mt-60 text-center">
              Crear un mapa de recorrido del usuario de Paula reveló lo útil que
              sería para los usuarios tener acceso a una app dedicada a la
              compra y asesoramiento para la compra de flores y plantas
            </p>
          </div>
          <img src={imagen_pro_5} alt="" className="mr-20 w-[850px]" />
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
              Es bueno realizar bocetos de los prototipos en papel, ya que se
              puede ver de forma rapida y mas eficiente y en poco tiempo se
              pueden recoger muchas ideas. En la pagina de inicio priorice los
              productos mas regalados, asi como las ofertas o suscripciones para
              compras repetitivas y la informacion de eventos entre otras.
            </p>
          </div>
          <img
            src={imagen_pro_6}
            alt=""
            className="mr-20 w-[850px] mt-5 rounded-2xl"
          />
        </div>

        <div className="w-full flex flex-row justify-between items-start">
          <div className="flex flex-col justify-center items-center">
            <p className="w-[550px] rounded-r-2xl text-base pl-12 mt-60 text-center">
              Despues de realizar todos los esquemas en papel usando el sistema
              Crazy eigths y How Might We, seleccionamos las mejores partes de
              cada esquema para realizar un final de cada pagina y despues
              probarlo manualmente con un recorte de papel a modo de telefono
              movil para hacer el recorrido completo
            </p>
          </div>
          <img
            src={imagen_pro_7}
            alt=""
            className="mr-20 w-[850px] mt-5 rounded-2xl"
          />
        </div>

        <div>
          <div className="bg-black w-full rozha-one-regular fondo-1 text-center text-2xl px-40 py-2 rounded-2xl mt-5">
            Esquemas de pagina Digital:
          </div>
        </div>

        <div className="w-full flex flex-row justify-between items-start">
          <div className="flex flex-col justify-center items-center">
            <p className="w-[550px] rounded-r-2xl text-base pl-12 mt-60 text-center">
              Despues de realizar los esquemas en papel y hacer una primera
              investigacion sobre estos esquemas me aseguré de realizar los
              cambios de diseños de las pantallas según los comentarios y los
              resultados de la investigación que encontramos.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="w-[300px] rounded-r-2xl text-base pl-12 mt-56 text-center">
              Los Usuarios no les gusta mucho el elegir la cantidad de flores,
              prefieren un producto terminado.
            </p>
            {/* Flecha */}
            <div className="flex flex-row justify-end items-center mt-5 w-full">
              <div className="bg-[#fbc012] w-[150px] h-1 -mr-2"></div>
              <BiSolidRightArrow className="text-[#fbc012]" />
            </div>
          </div>
          <img
            src={imagen_pro_8}
            alt=""
            className="w-[300px] mt-5 rounded-2xl"
          />

          <div className="flex flex-col justify-center items-center mr-10">
            <p className="w-[300px] rounded-r-2xl text-base mt-[430px] text-center">
              Los Usuarios no les gusto mucho el arbol y con este la eleccion de
              diferentes productos, ya que quedaban botones muy pequeños y
              dificiles de leer e interactuar con ellos.
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
              La navegación es una necesidad clave de los usuarios que había que
              abordar en este diseño, debido a la gran variedad de productos y
              usos que se les puede dar, desde una decoracion de bodas, hasta un
              ramo de flores o una planta para alguien enfermo.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="w-[300px] rounded-r-2xl text-base pl-12 mt-36 text-center">
              En este diseño preliminar se realizo un apartado personal
            </p>
            {/* Flecha */}
            <div className="flex flex-row justify-end items-center mt-5 w-full">
              <div className="bg-[#fbc012] w-[150px] h-1 -mr-2"></div>
              <BiSolidRightArrow className="text-[#fbc012]" />
            </div>

            <div className="flex flex-row justify-end items-center mt-16 w-full">
              <div className="bg-[#fbc012] w-[150px] h-1 -mr-2"></div>
              <BiSolidRightArrow className="text-[#fbc012]" />
            </div>
            <p className="w-[300px] rounded-r-2xl text-base pl-12 mt-5 text-center">
              La combinacion de azul oscuro con letras en negro no es buena para
              personas con problemas visuales.
            </p>
          </div>
          <img
            src={imagen_pro_9}
            alt=""
            className="w-[300px] mt-5 rounded-2xl"
          />

          <div className="flex flex-col justify-center items-center mr-10">
            <p className="w-[300px] rounded-r-2xl text-base mt-[430px] text-center">
              En esta segunda parte se exponen algunos productos para una mas
              rapida localizacion dentro de la app
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
              Muchos Usuarios manifestaron el problema que tenian a la hora de
              que se acercaba un cumpleaños, o algun evento como San Valentin y
              no se acordaban, y de esta forma se hizo un Flow para que puedan
              programar y recibir esta alarma en sus telefonos o mails.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="w-[300px] rounded-r-2xl text-base pl-12 mt-56 text-center">
              Se realizo una alarma para que los Usuarios pueden saber con
              antelacion, la que ellos programen, de que viene un evento y asi
              poder realizar un pedido.
            </p>
            {/* Flecha */}
            <div className="flex flex-row justify-end items-center mt-5 w-full">
              <div className="bg-[#fbc012] w-[150px] h-1 -mr-2"></div>
              <BiSolidRightArrow className="text-[#fbc012]" />
            </div>
          </div>
          <img
            src={imagen_pro_10}
            alt=""
            className="w-[300px] mt-5 rounded-2xl"
          />

          <div className="flex flex-col justify-center items-center mr-10">
            <p className="w-[300px] rounded-r-2xl text-base mt-[300px] text-center">
              Debido a que muchos estan muy ocupados, re realizo 2 tipos de
              opciones para esta alarma, una es hacer el pedido en ese momento y
              otra seria ordenar otra alarma para otro momento.
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
              Muchos Usuarios manifestaron el problema que tenian a la hora de
              elegir una combinacion de flores o plantas ya sea para regalo o
              bien para decoracion por su falta de conocimiento sobre el tema,
              asi se hizo una pagina para contacto y asesoramiento por telefono
              personalizado y familiar.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="w-[300px] rounded-r-2xl text-base pl-12 mt-56 text-center">
              Asesoramiento personalizado y familiar
            </p>
            {/* Flecha */}
            <div className="flex flex-row justify-end items-center mt-5 w-full">
              <div className="bg-[#fbc012] w-[150px] h-1 -mr-2"></div>
              <BiSolidRightArrow className="text-[#fbc012]" />
            </div>
          </div>
          <img
            src={imagen_pro_11}
            alt=""
            className="w-[300px] mt-5 rounded-2xl"
          />

          <div className="flex flex-col justify-center items-center mr-10">
            <p className="w-[300px] rounded-r-2xl text-base mt-[400px] text-center">
              Telefono de la floristeria para contacto directo con los Usuarios
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
              Con el conjunto completo de esquemas y ya mejorados a media
              fidelidad, con algunas imagenes repetidas y otras mejoras, cree un
              prototipo, con 3 flujos de usuario para realizar un estudio de
              facilidad de uso y asi tener Feedback de los Usuarios.
            </p>
          </div>
          <img
            src={imagen_pro_12}
            alt=""
            className="mr-20 w-[850px] mt-5 rounded-2xl"
          />
        </div>

        <div className="bg-black w-full rozha-one-regular fondo-2 text-white text-center text-5xl py-20 mt-10">
          Estudio de Facilidad de Uso : Hallazgos
        </div>

        <p className="px-20 my-5 text-center">
          Realicé dos rondas de estudios de facilidad de uso. Los hallazgos del
          primer estudio ayudaron a guiar los diseños para convertirlos de
          esquemas de página en maquetas. El segundo estudio utilizó un
          prototipo de media fidelidad y reveló qué aspectos de las maquetas
          necesitaban refinarse.
        </p>

        <div className="w-full mt-5">
          <div className="p-4 fondo-1 w-[450px] rounded-r-2xl rozha-one-regular text-xl pl-10">
            Hallazgos de la Ronda 1 :
          </div>
          <div className="pl-10 pt-10">
            <div className="flex flex-row justify-center items-center">
              <div className="text-7xl rozha-one-regular">1</div>
              <p className="w-full rounded-r-2xl text-base pl-12 my-5 text-justify pr-20">
                Los diseños de algunos botones y sus colores no era la correcta
              </p>
            </div>

            <div className="flex flex-row justify-center items-center">
              <div className="text-7xl rozha-one-regular">2</div>
              <p className="w-full rounded-r-2xl text-base pl-12 my-5 text-justify pr-20">
                No querian elegir los ramos por cantidad de flores
              </p>
            </div>

            <div className="flex flex-row justify-center items-center">
              <div className="text-7xl rozha-one-regular">3</div>
              <p className="w-full rounded-r-2xl text-base pl-12 my-5 text-justify pr-20">
                Los Iconos no eran segun los estandares de la industria
              </p>
            </div>
          </div>
        </div>

        <div className="w-full mt-5">
          <div className="p-4 fondo-1 w-[450px] rounded-r-2xl rozha-one-regular text-xl pl-10">
            Hallazgos de la Ronda 2 :
          </div>
          <div className="pl-10 pt-10">
            <div className="flex flex-row justify-center items-center">
              <div className="text-7xl rozha-one-regular">1</div>
              <p className="w-full rounded-r-2xl text-base pl-12 my-5 text-justify pr-20">
                Algunas paginas estaban muy cargadas
              </p>
            </div>

            <div className="flex flex-row justify-center items-center">
              <div className="text-7xl rozha-one-regular">2</div>
              <p className="w-full rounded-r-2xl text-base pl-12 my-5 text-justify pr-20">
                No se respetaba los bordes o el espaciado adecuado
              </p>
            </div>

            <div className="flex flex-row justify-center items-center">
              <div className="text-7xl rozha-one-regular">3</div>
              <p className="w-full rounded-r-2xl text-base pl-12 my-5 text-justify pr-20">
                Mejor utilizar recursos de material desing para mas coherencia
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

        <div className="w-full flex flex-row justify-start items-start">
          <div className="flex flex-col justify-center items-center">
            <p className="w-[550px] rounded-r-2xl text-base pl-12 mt-80 text-center">
              Con el conjunto completo de esquemas y ya mejorados a media
              fidelidad, con algunas imagenes repetidas y otras mejoras, cree un
              prototipo, con 3 flujos de usuario para realizar un estudio de
              facilidad de uso y asi tener Feedback de los Usuarios.
            </p>
          </div>
          <div className="flex flex-row justify-center items-start mx-32">
            <div className="flex flex-col justify-center items-center mx-5">
              <div className="bg-black w-80 rozha-one-regular fondo-1 text-center text-2xl py-2 rounded-2xl mt-5">
                Antes
              </div>
              <img
                src={imagen_pro_13}
                alt=""
                className="mt-5 rounded-2xl w-80"
              />
            </div>

            <div className="flex flex-col justify-center items-center mx-10">
              <div className="bg-black w-80 rozha-one-regular fondo-1 text-center text-2xl py-2 rounded-2xl mt-5">
                Despues
              </div>
              <img
                src={imagen_pro_14}
                alt=""
                className="mt-5 rounded-2xl w-80"
              />
            </div>
          </div>
        </div>

        <div className="w-full flex flex-row justify-start items-start">
          <div className="flex flex-col justify-center items-center">
            <p className="w-[550px] rounded-r-2xl text-base pl-12 mt-80 text-center">
              Despues de hacer el estudio de uso de facilidad me di cuenta de
              que los Usuarios no tienen tiempo ni conocimientos , al menos la
              mayoria, como para elegir la cantidad o tipo de flores, asi que
              eligen productos ya terminados por falta muchos de conocimiento
              sobre estos temas.
            </p>
          </div>
          <div className="flex flex-row justify-center items-start mx-32">
            <div className="flex flex-col justify-center items-center">
              <img
                src={imagen_pro_15}
                alt=""
                className="mt-5 rounded-2xl w-80 mx-5 mr-2"
              />
            </div>

            <div className="flex flex-col justify-center items-center">
              <img
                src={imagen_pro_16}
                alt=""
                className="mt-5 rounded-2xl w-80 ml-12"
              />
            </div>
          </div>
        </div>

        <div className="mt-10">
          <img src={imagen_pro_17} alt="" />
        </div>

        <div className="w-full flex flex-row justify-between items-start mt-10">
          <div className="flex flex-col justify-center items-center">
            <div className="p-4 fondo-1 w-[450px] rounded-r-2xl rozha-one-regular text-xl pl-10">
              Prototipo de Alta Fidelidad :
            </div>
            <p className="w-[450px] rounded-r-2xl text-base pl-12 mt-40 text-center">
              El Flujo de Alta fidelidad, despues de todos los cambios
              realizados se presenta mas limpio, asi como la combinacion de
              colores, iconos y otros, asi tambien como la opcion de recoger el
              pedido en la tienda o el envio a casa, suya o de la persona
              deseada
            </p>
          </div>
          <img src={imagen_pro_19} alt="" className="mr-20 w-[850px]" />
        </div>

        <div className="w-full">
          <div className="p-4 fondo-1 w-[450px] rounded-r-2xl rozha-one-regular text-xl pl-10">
            Consideraciones de Accesibilidad :
          </div>
          <div className="w-full mt-10 flex flex-row justify-between items-center pr-10">
            <div className="flex flex-col justify-center items-center w-96 mx-5 ml-12">
              <div className="text-7xl rozha-one-regular">1</div>
              <p className="text-center mt-5 px-2">
                Los usuarios en general estan muy ocupados en sus trabajos o
                tareas domesticas como para poder ir a una Floristeria a
                realizar una compra.
              </p>
            </div>

            <div className="flex flex-col justify-center items-center w-96 mx-5">
              <div className="text-7xl rozha-one-regular">2</div>
              <p className="text-center mt-5 px-2">
                Los usuarios en general estan muy ocupados en sus trabajos o
                tareas domesticas como para poder ir a una Floristeria a
                realizar una compra.
              </p>
            </div>

            <div className="flex flex-col justify-center items-center w-96 mx-5">
              <div className="text-7xl rozha-one-regular">3</div>
              <p className="text-center mt-5 px-2">
                Los usuarios en general estan muy ocupados en sus trabajos o
                tareas domesticas como para poder ir a una Floristeria a
                realizar una compra.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-black w-full rozha-one-regular fondo-2 text-white text-center text-5xl py-20 mt-10">
          Hoja de Pegatinas :
        </div>

        <div className="mt-10">
          <img src={imagen_pro_20} alt="" />
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
                Esta aplicación hara que los usuarios puedan realizar comprar de
                flores, plantas o accesorios de una forma facil y rapida,
                pudiendo satisfacer sus necesidades. “Creo que con una app asi,
                si que podria comprar y regalar flores mas a menudo, y mas si me
                lo recuerda esa alarma...” (Participante A)
              </p>
            </div>

            <div className="flex flex-col justify-center items-center w-[700px] mx-5 px-10">
              <div className="rozha-one-regular text-2xl fondo-1 w-80 text-center rounded-xl py-2 mt-5">
                Que Aprendi
              </div>
              <p className="text-center mt-5 px-2">
                Desde que empece el curso de Diseñador UX no he parado de
                aprender, desde como hacer una investigacion, los tipos que hay,
                lo importante que es pensar en el usuario y sus necesidades, asi
                como la accesibilidad en los proyectos, y tambien sobre lo
                importante que es un feedback o un estudio de usabilidad por
                ejemplo... muy interesante e importante todo...
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
                Realizar otra ronda de estudios de facilidad de uso, despues de
                1 mes terminada la app, para validar si las dificultades
                experimentadas por los usuarios se abordaron de manera efectiva.
              </p>
            </div>

            <div className="flex flex-col justify-center items-center w-96 mx-5">
              <div className="text-7xl rozha-one-regular">2</div>
              <p className="text-center mt-5 px-2">
                Hacer un seguimiento de uso de la aplicación despues de su
                implementacion.
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
          este mi primer proyecto, solo espero que les haya gustado mi trabajo y
          tambien espero que me den su feedback, su opinion de que esta bien,
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

export default MisProyectosAntonella;
