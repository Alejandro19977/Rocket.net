import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { Typography} from '@mui/material';
import trash from '/img/trash.png'
import editar from '/img/editar.png'
import '../estilos/Mui.css';
import Modal from "./Modal";
import perfil from '/img/perfil.png';
import perfil1 from '/img/perfil-default.png'
import { useModal } from "./useModal";
import mas from './img/mas.png';
import Swal from 'sweetalert2';


const mostrarAlertaEliminar = () =>{
  Swal.fire({
    title: 'Estás seguro de eliminar este usuario?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sí, deseo eliminarlo!',
    cancelButtonText:'Cancelar'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Borrado!',
        'El usuario a sido borrado.',
        'success'
      )
    }
  })
}
  
  export default function TablaUsuario() {
    const [isOpenCrear,openCrear,closeCrear] = useModal(false);
    const [isOpenEditar,openEditar,closeEditar] = useModal(false);

    

    const columns = [
 
    
      {
        field: 'nombre',
        headerName: 'Nombre',
        width: 250,
        
      },
  
      {
          field: 'nombre_sede',
          headerName: 'Sede',
          width: 250,
       
      },
  
      {
        field: 'departamento',
        headerName: 'Departamento',
        width: 250,
      
      },
  
      {
        field: 'tipo',
        headerName: 'Tipo de usuario',
        width: 250,
        
      },
  
      {
      field: 'buttons',
      headerName: 'Acción',
      width: 130,
      renderCell: () => (
        <div className='contenedor-iconos'>
          <button className='btn' onClick={openEditar}>
            <img className='iconos-usuarios' src={editar} alt="mas" />
          </button>
          <button  className='btn' onClick={()=>mostrarAlertaEliminar()}>
          <img className='iconos-usuarios' src={trash} alt="mas" />
          </button>
        </div>
      ),
    }
  
  
    ];
    
    const rows = [
      { id: 1, nombre: 'José Perez', nombre_sede: 'Sede 1',  departamento: 'RRHH' , tipo: 'Tipo 1'},
      { id: 2, nombre: '12345', nombre_sede: 'Sede 2',  departamento: '67890' , tipo: 'Tipo 2' },
      { id: 3, nombre: '12345', nombre_sede: 'Sede 3',  departamento: '67890' , tipo: 'Tipo 3' }
    
    ];

    return (
     
      <Box sx=
      {{ height: 300, 
        width: '100%', 
        fontFamily: 'Poppins',
        
      
      }}>
 
       <Typography sx = 
       {{
        marginBottom: 10, 
        paddingLeft: 2,
        fontSize: 40, 
        fontWeight: 'bold',
        fontFamily: 'Poppins' 
    
        }}
        >
            Gestión de usuarios
       </Typography> 
        <div className='container'>
          <input className='input-buscar' type="text" name='buscar'/>
          <button className='boton-agregar' onClick={openCrear}>Agregar</button>
        </div>


       <DataGrid
        rows={rows}
        columns={columns}
        sx = 
        {{
         fontFamily: 'Poppins',
         alignContent: 'center',
         justifyContent: 'center',
         fontSize: 15
        
        }}
        
        />
        <div>
            <Modal isOpen={isOpenCrear} closeModal={closeCrear}>
                <h3>Crea un usuario nuevo</h3>
                <div className="contenedor-crear">
                  <div className="contenedor-perfil">
                        <img className="perfil-default" src={perfil1} alt="perfil" />
                        <img className="img-mas" src={mas} alt="Más" />
                    </div>
                    <input placeholder="Nombre del empleado" type="text" name="nombre-crear" id="nombre-crear"/>
                    <input placeholder="Usuario" type="text" name="usuario-crear" id="usuario-crear"/>
                    <input placeholder="Contraseña" type="text" name="password-crear" id="password-crear"/>
                    <div className="combo-tipo">
                        <select className="combobox"  name="" id="">
                            <option value="" disabled selected hidden>Tipo de usuario</option>
                            <option value="tipo1">Tipo 1</option>
                            <option value="tipo2">Tipo 2</option>
                            <option value="tipo3">Tipo 3</option>
                        </select>
                    </div>
                    <div className="combo-sede">
                        <select className="combobox"  name="" id="">
                        <option value="" disabled selected hidden>Sede</option>
                            <option value="Sede1">Sede 1</option>
                            <option value="Sede2">Sede 2</option>
                            <option value="Sede3">Sede 3</option>
                        </select>
                    </div>
                    <div className="combo-departamento">
                        <select className="combobox"  name="" id="">
                        <option value="" disabled selected hidden>Departamento</option>
                            <option value="departamento1">Departamento 1</option>
                            <option value="departamento2">Departamento 2</option>
                            <option value="departamento3">Departamento 3</option>
                        </select>
                    </div>
                </div>
                <div className="contenedor-interno-boton">
                    <button className="boton-aceptar-crear">Aceptar</button>
                </div>
            </Modal>
            <Modal isOpen={isOpenEditar} closeModal={closeEditar}>
                <h3>Editar usuario seleccionado</h3>
                <div className="contenedor-crear">
                  <div className="contenedor-perfil-editar ">
                    <img className="perfil-default perfil" src={perfil} alt="perfil" />
                    <img className="imagen-mas" src={mas} alt="Más" />
                    <input className="input-nombre-editar" placeholder="Nombre del empleado" type="text" name="nombre-editar" id="nombre-editar"/>
                  </div>
                    <input placeholder="Usuario" type="text" name="usuario-editar" id="usuario-editar"/>
                    <input placeholder="Contraseña" type="text" name="password-editar" id="password-editar"/>
                    <div className="combo-tipo">
                        <select className="combobox"  name="" id="">
                            <option value="" disabled selected hidden>Tipo de usuario</option>
                            <option value="tipo1">Tipo 1</option>
                            <option value="tipo2">Tipo 2</option>
                            <option value="tipo3">Tipo 3</option>
                        </select>
                    </div>
                    <div className="combo-sede">
                        <select className="combobox"  name="" id="">
                        <option value="" disabled selected hidden>Sede</option>
                            <option value="Sede1">Sede 1</option>
                            <option value="Sede2">Sede 2</option>
                            <option value="Sede3">Sede 3</option>
                        </select>
                    </div>
                    <div className="combo-departamento">
                        <select className="combobox"  name="" id="">
                        <option value="" disabled selected hidden>Departamento</option>
                            <option value="departamento1">Departamento 1</option>
                            <option value="departamento2">Departamento 2</option>
                            <option value="departamento3">Departamento 3</option>
                        </select>
                    </div>
                </div>
                <div className="contenedor-interno-boton">
                    <button className="boton-aceptar-crear">Aceptar</button>
                </div>
            </Modal>
        </div>
      </Box> 
      
    );
  }