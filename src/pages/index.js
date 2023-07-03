import Header from "@/componentes/Header"
import Hero from "@/componentes/Hero"
import Display from "@/componentes/Display"
import React, { useState, useEffect } from 'react';
import Footer from "@/componentes/Footer"

export default function Home() {
    const[videos, setVideos]= useState([

        {
            Titulo:"inn1",
            LVideo:"https://res.cloudinary.com/dmim46vju/image/upload/v1687846994/Aluraflix/Inn1_pc6tjg.png",
            LImagen:"https://res.cloudinary.com/dmim46vju/image/upload/v1687846994/Aluraflix/Inn1_pc6tjg.png",
            Categoria:"Inn",
            Descripción:"innovacion",
            CSeguridad:"123456"
        },
        {
            Titulo:"inn2",
            LVideo:"https://res.cloudinary.com/dmim46vju/image/upload/v1687846995/Aluraflix/Inn2_th6ltx.png",
            LImagen:"https://res.cloudinary.com/dmim46vju/image/upload/v1687846995/Aluraflix/Inn2_th6ltx.png",
            Categoria:"Inn",
            Descripción:"innovacion",
            CSeguridad:"123456"
        },
        {
            Titulo:"inn3",
            LVideo:"https://res.cloudinary.com/dmim46vju/image/upload/v1687846995/Aluraflix/Inn3_f4at6j.png",
            LImagen:"https://res.cloudinary.com/dmim46vju/image/upload/v1687846995/Aluraflix/Inn3_f4at6j.png",
            Categoria:"Inn",
            Descripción:"innovacion",
            CSeguridad:"123456"
        },
        {
            Titulo:"Fe1",
            LVideo:"https://res.cloudinary.com/dmim46vju/image/upload/v1687846994/Aluraflix/Fe1_yt4c0v.png",
            LImagen:"https://res.cloudinary.com/dmim46vju/image/upload/v1687846994/Aluraflix/Fe1_yt4c0v.png",
            Categoria:"Front End",
            Descripción:"Front End courses",
            CSeguridad:"123456"
        },
        {
            Titulo:"Fe2",
            LVideo:"https://res.cloudinary.com/dmim46vju/image/upload/v1687846994/Aluraflix/Fe2_txokqj.png",
            LImagen:"https://res.cloudinary.com/dmim46vju/image/upload/v1687846994/Aluraflix/Fe2_txokqj.png",
            Categoria:"Front End",
            Descripción:"Front End courses",
            CSeguridad:"123456"
        },
        {
            Titulo:"Fe3",
            LVideo:"https://res.cloudinary.com/dmim46vju/image/upload/v1687846995/Aluraflix/Fe3_i9eeih.png",
            LImagen:"https://res.cloudinary.com/dmim46vju/image/upload/v1687846995/Aluraflix/Fe3_i9eeih.png",
            Categoria:"Front End",
            Descripción:"Front End courses",
            CSeguridad:"123456"
        },
        {
            Titulo:"Be1",
            LVideo:"https://res.cloudinary.com/dmim46vju/image/upload/v1687846994/Aluraflix/Be1_yzsjmh.png",
            LImagen:"https://res.cloudinary.com/dmim46vju/image/upload/v1687846994/Aluraflix/Be1_yzsjmh.png",
            Categoria:"Back End",
            Descripción:"Back End Courses",
            CSeguridad:"123456"
        },
        {
            Titulo:"Be2",
            LVideo:"https://res.cloudinary.com/dmim46vju/image/upload/v1687846994/Aluraflix/Be2_kp8meq.png",
            LImagen:"https://res.cloudinary.com/dmim46vju/image/upload/v1687846994/Aluraflix/Be2_kp8meq.png",
            Categoria:"Back End",
            Descripción:"Back End Courses",
            CSeguridad:"123456"
        },
        {
            Titulo:"Be3",
            LVideo:"https://res.cloudinary.com/dmim46vju/image/upload/v1687846994/Aluraflix/Be3_drwm7d.png",
            LImagen:"https://res.cloudinary.com/dmim46vju/image/upload/v1687846994/Aluraflix/Be3_drwm7d.png",
            Categoria:"Back End",
            Descripción:"Back End courses",
            CSeguridad:"123456"
        },
        

    ])

 return <>
 <Header boton={true}/>
 <Hero/>
 <Display videos={videos}/>
 <Footer/>

 
 </>
}
