import {useState, useEffect} from 'react';
import Error from './Error';

const Formulario = ({ pacientes, setPacientes }) => {
    const [nombre, setNombre] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [fecha, setFecha] = useState('');
    const [sintomas, setSintomas] = useState('');

    const [error, setError] = useState(false)

    const generarId = () => {
        const random = Math.random().toString(36).substr(2);
        const fecha = Date.now().toString(36)

        return random + fecha
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();

        //Validación del formulario
        if([ nombre, propietario, email, fecha, sintomas ].includes('')) {
            console.log("Hay al menos un campo vacío")
            setError(true)
            return;
        } setError(false)

        //Objeto de paciente
        const objetoPaciente = { 
            nombre,
            propietario, 
            email, 
            fecha, 
            sintomas,
            id: generarId()
         }
        setPacientes([... pacientes, objetoPaciente]);

        //Reiniciar el formulario
        setNombre("")
        setPropietario("")
        setEmail("")
        setFecha("")
        setSintomas("")
    }

    return ( 
        <div className="md:w-1/2 lg:w-2/5">
           <h2 className="font-black text-3xl text-center">Seguimiento de pacientes</h2>
           <p className="text-lg mt-5 text-center mb-10">
            Añadir pacientes y{" "}
                <span className="text-sky-800 font-bold">administrarlos</span>
           </p>

           <form onSubmit={handleSubmit} className= "m-3 mt-0 bg-white shadow-md rounded-lg py-10 px-5">
                
                {error && 
                    <Error>
                        <p>Todos los campos son obligatorios</p>
                    </Error> }

                <div className="mb-5">
                    <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">Nombre mascota</label>
                    <input
                        id="mascota"
                        type="text"
                        placeholder="Nombre de la mascota"
                        className="border-2 w-full p-2 mt-2 rounded-md"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">Nombre propietario</label>
                    <input
                        id="propietario"
                        type="text"
                        placeholder="Nombre del propietario"
                        className="border-2 w-full p-2 mt-2 rounded-md"
                        value={propietario}
                        onChange={(e) => setPropietario(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="email" className="block text-gray-700 uppercase font-bold">Email</label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Contacto del propietario"
                        className="border-2 w-full p-2 mt-2 rounded-md"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">Fecha de alta</label>
                    <input
                        id="alta"
                        type="date"
                        className="border-2 w-full p-2 mt-2 rounded-md"
                        value={fecha}
                        onChange={(e) => setFecha(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">Descripción sintomas</label>
                    <textarea 
                        id="sintomas"
                        placeholder="Sintomas de la mascota"
                        className="border-2 w-full p-2 mt-2 rounded-md"
                        value={sintomas}
                        onChange={(e) => setSintomas(e.target.value)}
                    />
                </div>
                <input 
                type="submit"
                className="bg-sky-800 w-full p-3 text-white uppercase font-bold hover:bg-sky-950 rounded-md"
                value="Agregar paciente"
                />
           </form>
        </div>
     );
}
 
export default Formulario;
