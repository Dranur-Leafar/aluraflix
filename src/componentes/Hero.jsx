import Image from "next/image";
import TitleCategory from "./TitleCategory.jsx"

function Hero(){


    return(
        <div className="hero_container">
            <section className="hero_controles">
            <div className="hero_textos">
            <TitleCategory titulo="Front End"/>
            <h3>Challenge React</h3>
            <p className="title_description">Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.</p>
            </div>
            <Image src="/thumbVideo.png" alt="thumb" width={646} height={333.58} />
            </section>
            <style jsx>{`
            .hero_controles{
                display: flex;
                align-items: end;
                margin-bottom: 5rem;
              }
            }


            .hero_textos{
                display:flex;
                flex-direction: column;
            }

            .hero_container{
                background-image: url(../hero.png);
                width: 1440px;
                height: 738px;

                display:flex;
                justify-content: center;
                align-items: end:

            }
            
            h3{
                    color:#fff;
                    font-size:46px;
                    font-family:'Roboto';
                    font-weight:400;
            }
            
            .title_description{
                width: 661px;
                height: 110px;
                
                font-family: 'Roboto';
                font-style: normal;
                font-weight: 300;
                font-size: 18px;
                color:#f5f5f5;
            }
               
            }
            
            `}
            </style>
        </div>
    )
}

export default Hero