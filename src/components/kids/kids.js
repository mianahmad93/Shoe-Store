import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import './kids.css';


export default function MensShoes() {

    let [kids, setKids] = useState([]);

    let data = useSelector((store) => {
        return store.ShoeDetails;
    });

    let chechData = true;

    useEffect(() => {
        data.forEach(element => {
            if (element.gender == 'kids' && chechData) {
                kids.push(element)
            }
        });
        chechData = false;
        setKids([...kids]);
        // console.log(kids);
    }, []);

    return <>
        <div className='shoesconatiner'>
            <div class="images">
                {kids.map((img) => {
                    return <div className="card">
                      <Link  to={'/shoedetail/'+img.id}>  <img src={img.image} class="card-img-top" alt="..." style={{ height: 300, width: 300 }} /></Link>
                        <div class="card-body">
                            <h5 class="card-Text">Price:{img.price}</h5>
                        </div>
                    </div>
                })}
            </div>
        </div>
    </>
}