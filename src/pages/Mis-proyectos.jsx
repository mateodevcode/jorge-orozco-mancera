import Proyecto from "../components/Proyecto";
import por_img_0 from "../img/antonella/por-img-0.png";
import por_img_3 from "../img/por-img-3.png";
import por_img_4 from "../img/por-img-4.png";


const Mis_proyectos = () => {
  return (
    <div>
      <Proyecto
        fondo="fondo-1"
        boton="boton-0"
        nombre={`floristeria “antonella”`}
        imagen={por_img_0}
        nombreImagen={por_img_0}
        texto="Caso practico de la creacion de una App para la floristeria “Antonella” donde Los Usuarios buscan un servicio de entrega de flores confiable y fácil de usar on-line que brinde flores, plantas y accesorios de calidad, para hacer regalos o para decoracion,  y que haga entregas a tiempo y al mismo tiempo ofrezca precios asequibles, y tengan un trato familiar para asesorarles, ya que estan muy ocupados."
      />
      <Proyecto
        fondo="fondo-0"
        boton="boton-1"
        nombre={`“ayuca”`}
        imagen={por_img_3}
        nombreImagen={por_img_0}
        texto="Caso practico de la creacion de una app y sitio web para Ayuca, Asociacion de ayuda a enfermos con cancer y sus familiares.
        Y buscan una forma de informarse y formarse online, para tener mas informacion y ayuda en su lucha contra el cancer. Y que al mismo tiempo puedan estar conectados unos con otros."
      />
      <Proyecto
        fondo="fondo-1"
        boton="boton-0"
        nombre={`“roca vertical”`}
        imagen={por_img_4}
        nombreImagen={por_img_0}
        texto="Caso practico para “Roca vertical” que es una empresa que se dedica a hacer trabajos de altura como reparacion de fachadas y tambin reparaciones de hogar a particulares o empresas para aseguradoras.
        Tanto los usuarios de esta empresa como particulares, necesitan agilizar toda la informacion y desarrollar la  comunicación entre unos y otros para asi mejorar el funcionamiento."
      />
    </div>
  );
};

export default Mis_proyectos;
