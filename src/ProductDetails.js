import React from 'react';
import { useParams } from 'react-router';


export default function ProductDetails() {
    const {productId} = useParams();
     
    return (
      <div>
       <h1> Welcome product Details of {productId}</h1>
      </div>
    );
  }