import Image from "next/image";


function Footer (){
    return (
    
    <footer className="header_container">
  
  <Image src="/logo.png" alt="logo" width={252} height={60} />
 
  

    <style jsx>
        {`
    .header_container{
        width: 1280px;
        height: 240px;
        background-color: #000;
        display: flex;
        justify-content:space-around;
        align-items: center;
        border-top: #2A7AE4;
        border-top-width: 3px;
        border-top-style: inset;
        margin-bottom:6rem;
        }
    `}
    </style>
    </footer>

)
}

export default Footer