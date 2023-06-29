
const TableHeader=(props)=>{

    return(<>
        <section className="container">
            <div className="elemento1">{props.titulo1}</div>
            <div className="elemento2">{props.titulo2}</div>
            <div className="elemento3">{props.titulo3}</div>
            <div className="elemento4">{props.titulo4}</div>

        </section>
        
        
        <style jsx>{`
        .container{
            display:flex;
            font-size:35px;
            border-style:inset;
            border-width:3px;
            border-color:#2A7AE4;
            width:1280px;
            background:#000;
        }

        div{
            border-style:solid;
            border-width:3px;
            border-color:#2A7AE4;
            color:#f5f5f5;
        }


        .elemento1{
            width:15%;
        }
              .elemento2{
            width:60%;
            
        }
        .elemento3{
            width:10%;
        }
        .elemento4{
            width:15%;
        }
  
        
        `}</style>
        </>
    )
}

export default TableHeader