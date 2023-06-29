const TableRow = (props) => {
    
    const categorias = Object.values(props.category);
  console.log(typeof categorias, categorias);
    return (
      <>
        <section className="container-rows">
        {categorias.map((cat) => (
            <ul key={cat.Nombre} className="container">
              <li className="elemento1">{cat.Nombre}</li>
              <li className="elemento2" style={{backgroundColor:cat.Color}}>{cat.Descripción}</li>
              <li className="elemento3">Editar</li>
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
  