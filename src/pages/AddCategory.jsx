import Header from "@/componentes/Header"
import Footer from "@/componentes/Footer"
import FormCategory from "@/componentes/FormCategory"
import InfoDisplay from "@/componentes/InfoDisplay"
import {useState, useEffect} from 'react'


export default function AddCategory() {
const [category, setCategory]=useState([

    {
    Nombre: "Front End",
    Descripción:"Cursos de diseño del lado del cliente",
    Color:"#f54841",
    CSeguridad:"12345",
    },

    {
        Nombre: "Back End",
        Descripción:"Cursos de diseño del lado del cliente",
        Color:"#f54221",
        CSeguridad:"12345",
    },

])



 return <>
 
 <Header boton={false}/>
 <FormCategory titulo="Nueva Categoria"
 setCategory={setCategory}
 category={category}
 />
 <InfoDisplay category={category}/>
 <Footer/>
 </>
 }