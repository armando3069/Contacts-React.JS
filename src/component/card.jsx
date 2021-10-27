import React from "react";

 function Card(props){

    return(

     <div className = "dev">
         
     <h3>Nume : {props.nume}</h3>
     <p>Telefon : {props.tel} </p>
     <p>Email : {props.email} </p>
     </div>

    );
 }

 export default Card;