
import {useState, useEffect} from 'react'





const TableRow = (props) => {
  const [edicion, setEdicion]= useState(true)
  
  useEffect(()=>{

    console.log(props.category)
  },[props.category])
  
  
  const manejarEditar=(e)=>{
    setEdicion(!edicion)
    console.log(edicion)
    edicion?e.target.textContent="Guardar": e.target.textContent="Editar"
    //Buscar el objeto que tiene el id del renglon que se va a editar
    const categorias = Object.values(props.category)
    const idBuscado= e.target.parentElement.id;
    const objetoEncontrado= categorias.find(function(categoria){
      return categoria.id===idBuscado;
    })
    console.log(e)

    //volver editable el renglon
    edicion?(e.target.parentElement.childNodes[0].contentEditable = true,
      e.target.parentElement.childNodes[1].contentEditable = true
      ):(e.target.parentElement.childNodes[0].contentEditable = false,
        e.target.parentElement.childNodes[1].contentEditable = false)
   
    

   
   !edicion?(objetoEncontrado.Nombre= e.target.parentElement.childNodes[0].textContent,
    objetoEncontrado.Descripción= e.target.parentElement.childNodes[1].textContent):(console.log("Objeto no encontrado"))

    console.log(objetoEncontrado)
    /*e.target.parentElement.addEventListener('blur', () => {
      e.target.parentElement.contentEditable = false;
    });*/
    /*e.target.parentElement.childNodes[0].contentEditable=false
    console.log("Editar elemento",e.target.parentElement)*/
  }  
  console.log(props.category)



    const categorias = Object.values(props.category);

  console.log(typeof categorias, categorias);
    return (
      <>
        <section className="container-rows">
        {categorias.map((cat) => (
          
            <ul key={cat.id}  id={cat.id} className="container">
              <li className="elemento1">{cat.Nombre}</li>
              <li className="elemento2" style={{backgroundColor:cat.Color}}>{cat.Descripción}</li>
              <li className="elemento3" onClick={(e)=>manejarEditar(e)}>Editar</li>
              <li className="elemento4">Eliminar</li>
            </ul>
))}
        </section>
  
        <style jsx>{`
          .container {
            display: flex;
            font-size: 35px;
            
            width: 1280px;
            background: #121212;
            list-style-type:none;
          }
  
          li{
            
            color: #f5f5f5;
            border-style: solid;
            border-color: #000;
            border.width:3px;
            padding: 10px;
          }
  
          .elemento1 {
            width: 15%;
          }
          .elemento2 {
            width: 60%;
          }
          .elemento3 {
            width: 10%;
            color:${!edicion&& "#2A7AE4"}  
          }

          .elemento3:hover, .elemento4:hover{
            cursor:pointer;
          }
          .elemento4 {
            width: 15%;
          }

          .container-rows{
            padding-bottom:15rem;
            background-color:#000;
            width:1280px;
          }


        `}</style>
      </>
    );
  };
  
  export default TableRow;
  