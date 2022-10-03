import Card from 'react-bootstrap/Card';
import image1 from '../cards/shoe1.jpg';
import image2 from '../cards/shoe2.jpg';
import image3 from '../cards/shoe3.jpg';
import image4 from '../cards/shoe4.jpg';
import image5 from '../cards/shoe5.jpg';
import image6 from '../cards/shoe6.jpg';

import './card.css';

export default function Mycard() {
return <>
 <div class="container">
  <div class="row">
    <div class="col-md">
    <div className="card">
  <img src={image1} class="card-img-top" alt="..." height={250} width={250}/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    
  </div>
</div>
    </div>
    <div class="col-md">
    <div class="card" >
  <img src={image2} class="card-img-top" alt="..." height={250} width={250}/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>

   
  </div>
</div>
    </div>
   
    <div class="col-md">
    <div class="card" >
  <img src={image3} class="card-img-top" alt="..." height={250} width={250} />
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
  </div>
</div>
    </div>
  </div>

  <div className='row'>
    <div class="col-md">
    <div class="card" >
  <img src={image4} class="card-img-top" alt="..." height={250} width={250} />
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
  </div>
</div>
    </div>

    <div class="col-md">
    <div class="card" >
  <img src={image5} class="card-img-top" alt="..." height={250} width={250} />
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
  </div>
</div>
    </div>

    <div class="col-md">
    <div class="card" >
  <img src={image6} class="card-img-top" alt="..." height={250} width={250} />
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
  </div>
</div>
    </div>


    </div>
</div> 
    </>;
}





