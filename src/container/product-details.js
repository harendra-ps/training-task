import React, { useEffect } from "react";
import { useParams } from "react-router";
import Spinner from '../component/spinner';



export default function Product_details() {
    const { id } = useParams();
    

    if(!id){
        return( <Spinner /> )
    }

    return(
        <div className="conatiner-fluid">
            <h4 className="mb-5">Product Name - {id}</h4>

        </div>  
    )
}