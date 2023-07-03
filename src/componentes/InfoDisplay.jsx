import TableHeader from "@/componentes/TableHeader"
import TableRow from "@/componentes/TableRow"

const InfoDisplay=(props)=>{
    return(<>
        <TableHeader
        titulo1="Nombre"
        titulo2="Descripción"
        titulo3="Editar"
        titulo4="Remover"
        />

        <TableRow
        category={props.category}
        manejarEditar={props.manejarEditar}
        />

</>)
}

export default InfoDisplay