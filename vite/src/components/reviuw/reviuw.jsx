import React from "react";
import cliente from '../../assets/clientes.jpg'
import clientes1 from '../../assets/clientes-1.jpg'
import clientes2 from '../../assets/clientes.2.jpg'
import stars from '../../assets/estrellas.png'
import './reviuw.css'
function Reviuw (){
    return(
<>
<h2 class="title-clientes-section">Client Review</h2>


<section class="container-clientes">


<div class="card-clientes">
  <img src={cliente} alt="" class="card-img"  width="100%"/>
  <br></br>
  <p class="title-card">Pepito</p>
  <p class="texto-card">The over design of the website is <br></br>
    visuality appeaing and user friendly <br></br>
    wherthy you we a new pet ownner or an <br></br>
    experienced one<br></br> 
  </p>  
  <img src={stars} alt="" width="40%" class="img-card-estrellas"></img>
</div>


<div class="card-clientes-medium">
  <img src={clientes1} alt="" class="card-img" />
  <br></br>
  <p class="tittle-card-medium">Boby</p>
  <p class="text-card-medium">
    The pawsome website is a <br></br>
    valuable resource for pet <br></br>  
    owners. It offers a wealth of<br></br>  
    information on various aspects<br></br>  
    of pet care
  </p>
  <img src={stars} alt="" width="40%" class="img-card-estrellas"></img>
</div>


<div class="card-clientes">
  <img src={clientes2} alt="clientes" class="card-img"></img>
  <br></br>
  <p class="title-card">Batuque</p>
  <p class="texto-card">
    The website is wery <br></br>
    organized maiking it easy <br></br>
    ti navigate and find the desired <br></br>
    information quickys<br></br>
  </p>
  <img src={stars} class="img-card-estrellas" alt="" width="40%"></img>
</div>


</section> 
</>
    )
}
export  {Reviuw}