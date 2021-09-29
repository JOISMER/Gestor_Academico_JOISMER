import React, { Component } from 'react'
import {Dropdown, Button, ButtonGroup, DropdownButton} from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel'
import { alignPropType } from 'react-bootstrap/esm/DropdownMenu';




class homepageComponent extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div>
         <div className="container-fluid">
           <div class="row">
             <div class="col-12">

              <div class="dropdown">
                  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    
                 Dropdown
                   </button>
               <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                 <button class="dropdown-item" type="bu">Action</button>
                 <button class="drn-item" type="button">Another action</button>
                 <button class="dropdown-item" type="button">Something else here</button>
                 
           
</div>

</div> <Carousel fade className="miCarousel">
                <Carousel.Item interval= {3000}>
                  <img
            
                    className="d-block w-100"
                      src="namo.jpg"
                      alt="Second slide"/>
           
                  <Carousel.Caption className="miCarousel">
                     <h1>Universidad de la calle</h1>
                     <p>“Cuando haces lo correcto, obtienes la sensación de paz y serenidad. Hazlo una y otra vez.”
                        Roy T. Bennett
                     </p>
                  </Carousel.Caption>
                </Carousel.Item>
                   <Carousel.Item>
                     <img
                       className="d-block w-100"
                       src="estudiantes_aplicaciones_opt.png"
                       alt="Second slide"/>
          
                    <Carousel.Caption className="miCarousel">
                      <h1>Universidad de la calle</h1>
                      <p>“Debes hacer las cosas que crees que no puedes hacer.”
                        Eleanor Roosevelt
                      </p>
                   </Carousel.Caption>
               </Carousel.Item>
              <Carousel.Item>
                 <img
                   className="d-block w-100"
                   src="unnamed.jpg"
                   alt="Second slide"/>
    
                 <Carousel.Caption className="miCarousel">
                   <h1>Universidad de la calle</h1>
                   <p>“Nunca eres demasiado viejo para tener otra meta u otro sueño.”
                       C.S Lewis
                   </p>
                  </Carousel.Caption>
              </Carousel.Item>
              </Carousel>
                  </div>
                  </div>
                  </div>
   
      </div>
    )
  }
}

export default homepageComponent