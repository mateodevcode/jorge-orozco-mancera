const Proyecto = ({
  nombre,
  imagen,
  nombreImagen,
  texto,
  fondo,
  boton,
  URL,
}) => {
  return (
    <div className={`flex flex-col justify-start items-center ${fondo}`}>
      <h2 className="uppercase font-bold rozha-one-regular text-5xl mt-10 mb-10">
        {nombre}
      </h2>
      <div className="flex flex-row justify-center items-center">
        <p className="ml-20 text-justify">{texto}</p>
        <img src={imagen} alt={nombreImagen} className="w-[800px] mx-10" />
      </div>
      <a
        href={`/jorge-orozco-mancera/${URL}`}
        className={`cursor-pointer rozha-one-regular px-4 py-2 rounded-3xl m-3 mb-6 text-xl shadow-lg shadow-black/50 ${boton} hover:scale-105`}
      >
        ¿Desea ver el proyecto?
      </a>
    </div>
  );
};

export default Proyecto;
