import React, { useEffect, useState } from "react";



function Appli(){
    const[value,setValue]=useState(0);

 useEffect(()=>{
    setTimeout(()=>{
setValue(value+10)
    },5000)
 },[])
    

    return(
<div>
    <h3> vgrvhjfkadl{value} </h3>

</div>
    );
}


export default  Appli;