import React from 'react';
import { Outlet } from 'react-router';


export default function Product() {
 
    return (
      <div>
        <h1>Welcome product </h1>
        <hr/>
        <div>
            <Outlet/>
        </div>
       

      </div>
    );
  }