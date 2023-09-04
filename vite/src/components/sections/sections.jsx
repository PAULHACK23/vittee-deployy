import React from "react";
import veterinaria from '../../assets/veterinarios.png'
import articulos from '../../assets/articulos.png'
import './sections.css';
function Sections (){
    return(
<>

<h2 class="title-section-up">Veterinarians</h2>
    <section class="container-section-up">   
        <div class="in-flex">
      <img class="img" src={veterinaria}alt="veterinaria" width="25%"/>
      </div>
      
      <div class="in-flex">
        <div class="title-section-card-up">
      Meet our caring team of expert veterinarians!
      
        </div>
      <div class="text-section-card-up">
      
          we have a skilled and compassionate group of <br></br>
          vets decicated to providing excepcional care for<br></br>
          your beloved pets. From routinecheck ups to<br></br>
          specialized treatments. Schedule an<br></br>
          appointment today for top-quality veterinary<br></br>
          care
        
      </div>
      <div class="title-section-card-up">
        
          </div>
      </div>
      <button class="boton-section-card-up">Book Your Appointment</button>   
</section>



     

        <h2 class="title-section-down" > Pet accessories </h2>

      
 
 
 
 
 
 
<section class="container-section-down"> 



<div class="in-flex-2">
    <div class="title-section-card-down">Discover a world of stylish pet accessories!

    </div>
    <div class="text-section-card-down">
      We offer a hight quality accessories your Pets <br></br>
      From temdy collars and toys, and grooming <br></br>
      supplies,we have everything you need to <br></br>
      pamper your pets. Explore our collection and <br></br>
      Shop now and make your pet's life even more <br></br>
      fabulous!</div>
    </div>
<div class="in-flex-2">
    <img class="img-2" src={articulos} alt="utencillos" width="30%"></img>
</div>

    <button class="boton-section-card-down">Shop Now</button>
</section>
</>
    )
}
export  {Sections}