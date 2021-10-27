import react from "react";

function Mood(){

    const date = new Date();
    let hour = date.getHours();
    let mood;

    const back = { color:""};

    if(hour > 18)
    {
      mood = "Buna seara";
      back.color = "blue"
    }

    else if(hour < 12){
     mood = "Buna diminiata";
     back.color = "green";
    }

    else{
      mood = "buna ziua";
      back.color = "brown";
    }

    return ( <h1 style = {back}> {mood} </h1>);

}

export default Mood;