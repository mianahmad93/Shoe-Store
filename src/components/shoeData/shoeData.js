import React, { useState } from 'react';
import './shoeData.css';
import { useSelector } from 'react-redux';
import {useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';
export default function ShoeData() {

  
 
  const data = useSelector((store) => {
    return store.ShoeDetails;
  })

  

  
  return <>
    <div className='shoesconatiner'>
      <div class="images">
        {data.map((img) => {
          return <div className="card">
          <Link to={'/shoedetail/'+img.id}> <img src={img.image}  class="card-img-top" alt="..." style={{ height: 300, width: 300 }} /></Link> 
            <div class="card-body">
              <h5 class="card-Text">Price:{img.price}</h5>
            </div>
          </div>
        })}
      </div>
    </div>
  </>







}















