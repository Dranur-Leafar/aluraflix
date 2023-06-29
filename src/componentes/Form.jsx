import FormInput from "@/componentes/FormInput"
import Button from "@/componentes/Button"
import React, { useState, useEffect } from 'react';




function Form(props){
const [dataForm, setdataForm]= useState({

    titulo:"",
    linkVideo:"",
    linkImagen:"",
    categoria: "",
    descripcion: "",
    cSeguridad: ""


})

useEffect(() => {
    console.log(dataForm);
  }, [dataForm])

const manejarInput=(e,id)=>{
    const campo = id
    console.log(e.target.placeholder,id)
    setdataForm({ ...dataForm, [campo]: e.target.value })
    
}

return <>
<div className="form_container">
<h3 className="form_title">{props.titulo}</h3>

<FormInput placeholder="Título" type="Text" 
value={dataForm.titulo} 
manejarInput={manejarInput}
id="titulo"
/>

<FormInput placeholder="Link del Video" type="Text"
value={dataForm.linkVideo} 
manejarInput={manejarInput}
id="linkVideo"
/>

<FormInput placeholder="Link Imagen del Video" type="Text"
value={dataForm.linkImagen} 
manejarInput={manejarInput}
id="linkImagen" 
/>

<FormInput placeholder="Escoja una categoria" type="List"
value={dataForm.categoria} 
manejarInput={manejarInput}
id="categoria"
/>

<FormInput placeholder="Descripción" type="Text Area"
value={dataForm.descripcion} 
manejarInput={manejarInput}
id="descripcion"
/>

<FormInput placeholder="Codigo de Seguridad" type="Text"
value={dataForm.cSeguridad} 
manejarInput={manejarInput}
id="cSeguridad"
/>

<div className="botones">
    <div className="controles">
        <Button text="Guardar" dataForm={dataForm}/>
        <Button text="Limpiar" setdataForm={setdataForm}/>
    </div>
    <div className="nueva__categoria">
        <Button text="Nueva Categoria" />
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

export default Form