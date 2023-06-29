

    function FormInput(props){
    console.log(props.colores)
        return(<>
            
            {props.placeholder==="Escoja una categoria"?
            
            (
            <select id="categorias" name="cat_list" onChange={(e) => props.manejarInput(e, props.id)} value={props.value} required>

                <option value="">Escoge una categoria</option>
                <option value="Back End">Back End</option>
                <option value="Mobile">Mobile</option>
                <option value="DevOps">DevOps</option>
                <option value="FrontEnd">FrontEnd</option>
                <style jsx>{`
            select{
                width:80%;
                height:50px;
                margin:0 auto;
                background:#53585D;
                color:#fff;
                border-radius:5px;
                padding-left:1rem;
                margin-top:1.5rem;
                font-size:18px;
                font-family:'Roboto'
            }
            `}</style>
            
            </select>
    

            )
            :(
            <>
            {props.placeholder==="Descripción"?(
            <>
            
            <textarea placeholder={props.placeholder} className="text_area" rows="5" cols="33" onChange={(e) => props.manejarInput(e, props.id)} value={props.value} required></textarea>
            
            <style jsx>{`
            .text_area{
                width:80%;
                margin:0 auto;
                background:#53585D;
                color:#fff;
                border-radius:5px;
                padding-left:1rem;
                margin-top:1.5rem;
                font-size:18px;
                font-family:'Roboto'
            }
            `}</style>
            </>
            
            ):

            props.placeholder ==="Color"?(

                <select id="categorias" name="cat_list" onChange={(e) => props.manejarInput(e, props.id)} value={props.value} required>

                <option value="">Escoge un color</option>
                <option value={props.colores.BackEnd} style={{backgroundColor: props.colores.BackEnd}}></option>
                <option value={props.colores.Mobile} style={{backgroundColor: props.colores.Mobile}}></option>
                <option value={props.colores.Infra} style={{backgroundColor: props.colores.Infra}}></option>
                <option value={props.colores.Innovation} style={{backgroundColor: props.colores.Innovation}}></option>
                <option value={props.colores.DataScience} style={{backgroundColor: props.colores.DataScience}}></option>
                <option value={props.colores.Marketing} style={{backgroundColor: props.colores.Marketing}}></option>
                <option value={props.colores.UserExperience} style={{backgroundColor: props.colores.UserExperience}}></option>
                <option value={props.colores.FrontEnd} style={{backgroundColor: props.colores.FrontEnd}}></option>
                <style jsx>{`
            select{
                width:20%;
                height:80px;
                margin:0 auto;
                background:${props.dataForm.Color};
                color:#fff;
                border-radius:5px;
                padding-left:1rem;
                margin-top:1.5rem;
                font-size:18px;
                font-family:'Roboto'
                text-align: center;
            }
            
            #categorias option{
                height:200px;
            }

            `}</style>
            
            </select>
            ):
            <>

    <input placeholder={props.placeholder} onChange={(e) => props.manejarInput(e, props.id)} value={props.value} required />
            
            <style jsx>{`
            input{
                width:80%;
                height:50px;
                margin:0 auto;
                background:#53585D;
                color:#fff;
                border-radius:5px;
                padding-left:1rem;
                margin-top:1.5rem;
                font-size:18px;
                font-family:'Roboto'
            }

   
            `}</style>
            </>}
            </>)}

            
    </>)


            
        
    }

    export default FormInput