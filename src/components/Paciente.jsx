const Paciente = ({paciente}) => {
    const { nombre, propietario, email, fecha, sintomas } = paciente
    return ( 
    <div className="m-3 mt-0 bg-white shadow-md rounded-lg py-10 px-5">
        <p className="text-gray-700 uppercase font-bold mb-3">
        Nombre mascota:{" "}
            <span className="font-normal normal-case">{nombre}</span>
        </p>

        <p className="text-gray-700 uppercase font-bold mb-3">
        Nombre propietario:{" "}
            <span className="font-normal normal-case">{propietario}</span>
        </p>

        <p className="text-gray-700 uppercase font-bold mb-3">
        Email:{" "}
            <span className="font-normal normal-case">{email}</span>
        </p>

        <p className="text-gray-700 uppercase font-bold mb-3">
        Fecha de alta:{" "}
            <span className="font-normal normal-case">{fecha}</span>
        </p>

        <p className="text-gray-700 uppercase font-bold mb-3">
        Descripción sintomas:{" "}
            <span className="font-normal normal-case">{sintomas}</span>
        </p>
    </div>
     );
}
 
export default Paciente;