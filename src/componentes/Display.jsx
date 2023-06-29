

const Display= (props)=>{
const videos=props.videos;
console.log(videos)

    return <>
    <section className="container">
        {videos.map(item=>
            
            <img src={item.LImagen}/>
            
            
            )}
    </section>

    <style jsx>{`
    .container{
        width:1280px;
        background:#000;
        display:flex;
        justify-content:space-around;
        flex-wrap:wrap;
        gap:1rem;
    }
    
    img{
        width:400px;
        
    }
    
    `}</style>

    </>
}

export default Display