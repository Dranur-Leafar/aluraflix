import Image from "next/image";
import Button from "./Button.jsx";
import Link from 'next/link'

function Header (props){
    return (
    
    <header className="header_container">
  
  <Image src="/logo.png" alt="logo" width={168.5} height={40} />
  {props.boton&&
  <Link href="/AddVideo"> <Button text={"Nuevo Video"}/></Link>}

    <style jsx>
        {`
    .header_container{
        width: 1280px;
        height: 94px;
        background-color: #000;
        display: flex;
        justify-content:space-around;
        align-items: center;
        border-bottom: #2A7AE4;
        border-bottom-width: 3px;
        border-bottom-style: inset;
        }
    `}
    </style>
  </header>
)
}

export default Header