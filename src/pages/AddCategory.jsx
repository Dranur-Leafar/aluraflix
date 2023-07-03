import Header from "@/componentes/Header"
import Footer from "@/componentes/Footer"
import FormCategory from "@/componentes/FormCategory"
import InfoDisplay from "@/componentes/InfoDisplay"
import {useState, useEffect} from 'react'
import { v4 as uuid } from 'uuid';


const manejarEditar=()=>{
   
    console.log("Editar elemento")
}


export default function AddCategory() {
const [category, setCategory]=useState([



])



 return <>
 
 <Header boton={false}/>
 <FormCategory titulo="Nueva Categoria"
 setCategory={setCategory}
 category={category}
 
 />
 <InfoDisplay category={category}
 manejarEditar={manejarEditar()}
 />
 <Footer/>
 </>
 }