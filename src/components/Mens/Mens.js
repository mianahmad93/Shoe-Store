import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import './Mens.css';


export default function MensShoes() {

    let [mens, setMens] = useState([]);

    let data = useSelector((store) => {
        return store.ShoeDetails;
    });

    let checkData = true;

    useEffect(() => {
        data.forEach(element => {
            if (element.gender == 'Male' && checkData) {
                mens.push(element)
            }
        });
        checkData = false;
        setMens([...mens]);
        // console.log(mens);
    }, []);

    return <>
        <div className='shoesconatiner'>
            <div class="images">
                {mens.map((img) => {
                    return <div className="card">
                       <Link  to={'/shoedetail/'+img.id}> <img src={img.image} class="card-img-top" alt="..." style={{ height: 300, width: 300 }} /></Link>
                        <div class="card-body">
                            <h5 class="card-Text">Price:{img.price}</h5>
                        </div>
                    </div>
                })}
            </div>
        </div>
    </>
}