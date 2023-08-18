import React from "react";

const PropertyDetails = ({ data}) => {

    // useEffect(()=>{} , [data]) ;

    return (
        <div >
            { data.map((data)=>(
                <div key ={data.id} >
                        <h2> {data.title}</h2>
                        <p>  {data.location}</p>
                        <p> {data.type} </p>
                        <p> { data.price } </p>
                </div>
            ))}
        </div>
    );
}
 
export default PropertyDetails;