const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {
  const { nombre, propietario, email, fecha, sintomas, id } = paciente;

  const handleEliminar = () => {
    const respuesta = confirm("¿Desea eliminar este paciente?");
    if (respuesta) {
      eliminarPaciente(id);
    }
  };

  return (
    <div className="m-3 mt-0 bg-white shadow-md rounded-lg py-10 px-5">
      <p className="text-sky-900 uppercase font-bold mb-3">
        Nombre mascota:{" "}
        <span className="font-normal normal-case text-neutral-950">
          {nombre}
        </span>
      </p>

      <p className="text-sky-900 uppercase font-bold mb-3">
        Nombre propietario:{" "}
        <span className="font-normal normal-case text-neutral-950">
          {propietario}
        </span>
      </p>

      <p className="text-sky-900 uppercase font-bold mb-3">
        Email:{" "}
        <span className="font-normal normal-case text-neutral-950">
          {email}
        </span>
      </p>

      <p className="text-sky-900 uppercase font-bold mb-3">
        Fecha de alta:{" "}
        <span className="font-normal normal-case text-neutral-950">
          {fecha}
        </span>
      </p>

      <p className="text-sky-900 uppercase font-bold mb-3">
        Descripción sintomas:{" "}
        <span className="font-normal normal-case text-neutral-950">
          {sintomas}
        </span>
      </p>
      <div className="space-x-6 flex justify-center">
        <button
          type="button"
          className="bg-sky-800 text-white uppercase font-bold hover:bg-sky-950 rounded-md px-10 py-2"
          onClick={() => setPaciente(paciente)}
        >
          Editar
        </button>
        <button
          type="button"
          className="bg-red-700 text-white uppercase font-bold hover:bg-red-800 rounded-md px-10 py-2"
          onClick={handleEliminar}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Paciente;
