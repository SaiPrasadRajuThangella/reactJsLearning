export const Product = ({imageUrl,title,price})=>{
   return (<div style={{border:"2px solid black" ,width:"100px"}}>
        <img style={{width :"100px"}} src={imageUrl}/>
        <h2>{title}</h2>
        <p>{price}</p>
    </div>
   )
}




