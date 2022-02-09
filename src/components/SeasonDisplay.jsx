import React from 'react';

const getSeason=(lat, month)=>{
  
  if(month >0 && month < 9){
    return lat < 0 ? 'summer' : 'winter'
  } 
  else{
    return lat>0 ? 'wintr':'summer'
  }
  
}



export default function SeasonDisplay(props){

  const season = getSeason(props.lat,new Date().getMonth());
  const text = season === 'winter' ? `Burr it's chilly` : 'Let hit the beach'
    
  console.log(season);
  return <div>
    <h1>{text}</h1>
    <br/>
    {props.message}:{props.lat}
    </div>
}