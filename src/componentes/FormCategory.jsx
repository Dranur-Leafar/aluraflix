import FormInput from "@/componentes/FormInput"
import Button from "@/componentes/Button"
import React, { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';




function FormCategory(props){
const [dataForm, setdataForm]= useState({
    id: uuid(),
    Nombre:"",
    Descripción:"",
    Color:"#000",
    CSeguridad: ""


})

useEffect(() => {
    console.log(dataForm);
  }, [dataForm])

const manejarInput=(e,id)=>{
    const campo = id
    console.log(e.target.placeholder,id)
    setdataForm({ ...dataForm, [campo]: e.target.value })
    
}

const colores= {

    Innovation: "#6BD1FF",
    BackEnd: "#00C86F",
    DataScience: "#9CD33B",
    FrontEnd: "#6BD1FF",
    Infra: "#9CD33B",
    Marketing: "#6B5BE2",
    Mobile: "#FFBA05",
    UserExperience: "#DC6EBE"

}

return <>
<div className="form_container">
<h3 className="form_title">{props.titulo}</h3>

<FormInput placeholder="Nombre" type="Text" 
value={dataForm.Nombre} 
manejarInput={manejarInput}
id="Nombre"
/>

<FormInput placeholder="Descripción" type="Text Area"
value={dataForm.Descripción} 
manejarInput={manejarInput}
id="Descripción"
/>


<FormInput placeholder="Color" type="Text"
colores={colores}
value={dataForm.Color} 
manejarInput={manejarInput}
dataForm={dataForm}
id="Color"
/>

<FormInput placeholder="Codigo de Seguridad" type="Text"
value={dataForm.CSeguridad} 
manejarInput={manejarInput}
id="CSeguridad"

/>


<div className="botones">
    <div className="controles">
        <Button text="Guardar"  setdataForm={setdataForm} dataForm={dataForm} category={props.category} setCategory={props.setCategory} formulario="categoria"/>
        <Button text="Limpiar" setdataForm={setdataForm} formulario="categoria"/>
    </div>
    <div className="nueva__categoria">
       
    </div>
</div>
    <style jsx>{`
    .form_container{
        width:1280px;
        height:auto;
        background-color:#000;
        display:flex;
        flex-direction: column;
        gap:3rem;
        
        align-items:center;
    }
    .botones{
        display:flex;
        flex-direction:row;
        justify-content:space-between;
        width:85%;
        flex-wrap:wrap;
        padding-bottom: 10rem;
        
    }
    .nueva__categoria{
        flex-direction:row;
    }
    .controles{
        display:flex;
        width:35%;
        justify-content:space-between;
    }

    .form_title{
        color:#f5f5f5;
        font-size:60px;
        font-family:'Roboto';
        margin-top:2rem;
    }

`}</style>

</div>
</>

}

export default FormCategory