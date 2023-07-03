import Link from "next/link"
import { v4 as uuid } from 'uuid';


function Button(props){
console.log(props)
const {category} = props
const manejarBoton = (event) =>{
//Boton Guardar
event.target.textContent==="Guardar"&&manejarGuardar();
//Boton Limpiar
event.target.textContent==="Limpiar"&&manejarLimpiar();

   
}



const manejarLimpiar=()=>{
    
    console.log(props.formulario)
    
    props.formulario ==="categoria"?
    (props.setdataForm({
    id:"",
    Nombre:"",
    Color:"",
    Descripción: "",
    CSeguridad: ""
})
):
<>
{props.setdataForm({
    id:"",
    titulo:"",
    linkVideo:"",
    linkImagen:"",
    categoria: "",
    descripcion: "",
    cSeguridad: ""
})
}


</>


}

const manejarGuardar = () => {
  if (props.formulario === "categoria") {
    const nuevaCategoria = {
      id: uuid(),
      Nombre: props.dataForm.Nombre,
      Descripción: props.dataForm.Descripción,
      Color: props.dataForm.Color,
      CSeguridad: props.dataForm.CSeguridad,
    };

    props.setCategory([...category, nuevaCategoria]);
    manejarLimpiar();
    console.log("Guardando datos categoria", props.dataForm);
    
  } else {
    console.log("Guardando datos video", props.dataForm);
  }
};


return (
    <>
      {props.text === "Nueva Categoria" ? (
        
         
            <button onClick={manejarBoton}>{props.text}</button>
        
        
      ) : (
        <button onClick={manejarBoton}>{props.text}</button>
      )}

      <style jsx>
        {`
          button {
            width: ${props.text === "Nueva Categoria" ? "254px" : "180.12px"};
            height: 54px;
            background-color: ${
              props.text === "Nueva Categoria"|| props.text=== "Guardar"? "#2A7AE4" : "#000"
            };
            color: #fff;
            font-size: 21px;
            font-weight: 600;
            border-style: inset;
            border-width: 1px;
            border-radius: 5px;
          }
        `}
      </style>
    </>
  );
}

export default Button;