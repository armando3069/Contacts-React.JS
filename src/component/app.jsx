import React from "react";
import Card from "./card.jsx";
import Contacts from "../contact.js";

 function App(){

    return(
    <div>
      <h1 className = "cont">Contact</h1>
      
      <Card 
       nume = {Contacts[0].nume}
       tel = {Contacts[0].tel}
       email = {Contacts[0].email}
       />

       <Card 
       nume = {Contacts[1].nume}
       tel = {Contacts[1].tel}
       email = {Contacts[1].email}
       />

       <Card 
       nume = {Contacts[2].nume}
       tel = {Contacts[2].tel}
       email = {Contacts[2].email}
       />

    </div>

    );
 }

 export default App;