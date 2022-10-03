import React, { useState } from "react";
import './cart.css';
import { useSelector, useDispatch } from 'react-redux';
import Store from '../../store/store';



export default function AddCarts() {

  let total = 0;
  let dispatch = useDispatch();

  const data = useSelector((store) => {
    return store.Carts;
  })


  if (data.length == 0) {
    return <>
      <h1>No Items in the  cart yet </h1>
    </>
  }

  data.forEach(element => {
    let bill = element.price * element.quantity;
    total = total + bill;
  });



  function deleteItem(id){
    console.log(id);
    dispatch({
      type: "DELETE_CART",
      payload: id
    });
  }


  return <>
    <tr className="row1">
      <td> <strong>image</strong></td>
      <td> <strong>Price</strong></td>
      <td> <strong>Title</strong></td>
      <td> <strong>quantity</strong></td>
      <td> <strong>Size</strong></td>
      <td> <strong>Delete Your cart </strong></td>
    </tr>
    
    <div className='shoesconatiner'>
      <div class="images">
        {data.map((img, index) => {
          return <tr className="main" >
            <td>
              <img src={img.image} className="img" style={{ height: 100, width: 130 }} />
            </td>
            <td>RS.{img.price * img.quantity}</td>
            <td>
              {img.title}
            </td>
            <td>
              {img.quantity}
            </td>
            <td>
              {img.shoesize}
            </td>
            <td>
              <i class="fa fa-trash" aria-hidden="true" style={{ cursor: "pointer" }} onClick={() => deleteItem(img.id)}></i>
            </td>

          </tr>
        })}
      </div>
    </div>
    <h4>Total bill {total}</h4>

  </>
}




















// <div className="card">
//             <img src={img.image} class="card-img-top" alt="..." style={{ height: 300, width: 300 }} />
//             <div class="card-body">
//               <h5 class="card-Text">Price:{img.price}</h5>
//               <i class="fa fa-trash" aria-hidden="true" style={{ cursor: "pointer" }} onClick={Delete}></i><span className="none">{img.id}</span>

//             </div>
//           </div>


