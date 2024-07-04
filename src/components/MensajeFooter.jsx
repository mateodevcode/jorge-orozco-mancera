import carita_feliz from "../img/carita-feliz.png";

const MensajeFooter = () => {
  return (
    <div className="fondo-1 flex flex-row justify-center items-center px-40 rozha-one-regular">
      <div className="flex flex-row justify-center items-center my-10">
        <img src={carita_feliz} alt="Icono de carita feliz" className="w-40" />
        <p className="text-2xl text-center px-20">
          Gracias por ver mi Portfolio, espero les haya gustado y si ven algo
          bien, regular o mal, no duden en comentarmelo, asi podre mejorar...
          Que tengan un buen dia
        </p>
        <img src={carita_feliz} alt="Icono de carita feliz" className="w-40" />
      </div>
    </div>
  );
};

export default MensajeFooter;
