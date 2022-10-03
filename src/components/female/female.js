import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import './female.css';


export default function MensShoes() {

    let [female, setFemale] = useState([]);

    let data = useSelector((store) => {
        return store.ShoeDetails;
    });

    let chechData = true;

    useEffect(() => {
        data.forEach(element => {
            if (element.gender == 'female' && chechData) {
                female.push(element)
            }
        });
        chechData = false;
        setFemale([...female]);
        // console.log(female);
    }, []);

    return <>
        <div className='shoesconatiner'>
            <div class="images">
                {female.map((img) => {
                    return <div className="card">
                     <Link  to={'/shoedetail/'+img.id}>   <img src={img.image} class="card-img-top" alt="..." style={{ height: 300, width: 300 }} /></Link>
                        <div class="card-body">
                            <h5 class="card-Text">Price:{img.price}</h5>
                        </div>
                    </div>
                })}
            </div>
        </div>
    </>
}