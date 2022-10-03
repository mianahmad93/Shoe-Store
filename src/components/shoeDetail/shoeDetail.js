import React, { useState } from "react";
import './shoeDetail.css';
import { useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import Store from '../../store/store';
import { toast } from "react-toastify";


export default function ShoeDetail() {



    let img = [];

    let { id } = useParams();
    const data = useSelector((store) => {
        return store.ShoeDetails;
    })


    data.forEach(element => {
        if (element.id == id) {
            img = element;
        }
    });
    // console.log(data);


    let [num, setNum] = useState(1);
    function increment() {
        setNum(num + 1)
    }
    function decrement() {
        if (num > 0) {
            setNum(num - 1)

        } else {
            setNum(0);
        }
    }
    let [size, setSize] = useState(39);
    function sizeincrement() {
        if (size < 46) {
            setSize(size + 1)
        }
    }
    function sizedecrement() {
        if (size > 39) {
            setSize(size - 1);
        }
    }

    function addtocart() {

        let DataSend = { ...img,quantity: num, shoesize: size};

        Store.dispatch({
            type: "ADD_CART",
            payload: DataSend,
        })
        toast.success("Added to cart")
    }


    return <>
        <h1>Details of your Selected Show</h1>
        
        <div className='shoesconatiner'>
      <div class="images">
         <div className="card" >
          <img src={img.image}  class="card-img-top" alt="..." style={{ height: 300, width: 330 }} />
            <div class="card-body">
                <h4 className="card-Title" style={{margin:30}}>{img.title}</h4>
              <h5 class="card-Text">Price:{img.price}</h5>
              <button className="primary" bg="primary" onClick={addtocart}>Add to cart</button>
            </div>
          </div>
      </div>
    </div>



        <div className="num_container">
            <h1>Quantity</h1>
            <hr />
            <div className="btn_div">
                <label className="btn1" onClick={increment}>+</label>
                <h3>{num}</h3>
                <label className="btn2" onClick={decrement}>-</label>
            </div>
        </div>

        <div className="sizebox">
            <h1>Select Size</h1>
            <hr />
            <div className="size_div">
                <button className="btn3" onClick={sizeincrement}>+</button>
                <h3>{size}</h3>
                <button className="btn4" onClick={sizedecrement}>-</button>
            </div>
        </div>





    </>
}