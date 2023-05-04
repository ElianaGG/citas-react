import Paciente from "./Paciente";

const ListadoPacientes = ({ pacientes }) => {
  return (
    <div className="md:w-1/2 lg:w-3/5">
      {pacientes && pacientes.length ? (
        <>
          <div>
            <h2 className="font-black text-3xl text-center">
              Listado de pacientes
            </h2>
            <p className="text-lg mt-5 text-center mb-10">
              Administrar {""}
              <span className="text-sky-800 font-bold">pacientes y citas</span>
            </p>
          </div>

          <div className="md:h-screen overflow-y-auto">
            {pacientes.map((paciente) => (
              <Paciente key={paciente.id} paciente={paciente} />
            ))}
          </div>
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
          <p className="text-lg mt-5 text-center mb-10">
            {" "}
            Agregar nuevos {""}
            <span className="text-sky-800 font-bold">pacientes y citas</span>
          </p>
        </>
      )}
    </div>
  );
};

export default ListadoPacientes;
