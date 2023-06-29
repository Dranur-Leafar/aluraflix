

function TitleCategory(props){

    return(
        <h4 className="titulo">{props.titulo}
        
        <style jsx>{`
        
        .titulo{
            background:#6BD1FF;
            color:#fff;
            font-weight: 400;
            font-size: 60px;
            font-family: 'Roboto';

            width:296px;
            height 92px;
            border-radius: 5px;
        }
        
        
        `}</style>
        
        </h4>

    )
}

export default TitleCategory