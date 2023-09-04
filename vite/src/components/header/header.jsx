
import React from "react";
import dogHeader from '../../assets/perro.png';
import logHeader from '../../assets/logoheader.jpg';
import logHeaderf from '../../assets/logofooter.jpg';
import './header.css';

function Header(){
    return(

    <header class="header-container ">  

       <div class="nav nav-active" >
           <nav class="navbar">

      
       
       <img src={logHeader} alt="" class="logo-header"></img>
   <img src={logHeaderf} alt="" class="logo-headerf"></img>
      <ul class="nav-menu">
        <li class="nav-menu-item">
          <a href="#header" class="nav-menu-link nav-link">home</a></li>
        <li class="nav-menu-item">
          <a href="#" class="nav-menu-link nav-link">schedule</a></li>
        <li class="nav-menu-item">
          <a href="#" class="nav-menu-link nav-link">products</a></li> 
        <li class="nav-menu-item">
            <a href="#contact" class="nav-menu-link nav-link">Contact Us</a></li>
          <li class="nav-menu-item">
            <a href="#" class="nav-menu-link nav-link">about</a></li> 
      </ul>
    </nav>
    
      </div>
      <div class="nav-a nav-active-a" id="nav">
           <nav class="navbar-a">
       <img src={logHeader} alt="" class="logo-headerf"></img>
       
   
      <ul class="nav-menu-a">
        <li class="nav-menu-item-a">
          <a href="#" class="nav-menu-link-a nav-link-a">home</a></li>
        <li class="nav-menu-item-a">
          <a href="#" class="nav-menu-link-a nav-link-a">schedule</a></li>
        <li class="nav-menu-item-a">
          <a href="#" class="nav-menu-link-a nav-link-a">products</a></li> 
        </ul>
        
          <ul class="nav-menu-b" >
            <li class="nav-menu-item-b">
            <a href="#" class="nav-menu-link-b nav-link-b">contact us</a></li>
          <li class="nav-menu-item-b">
            <a href="#" class="nav-menu-link-b nav-link-b">about</a></li> 
      </ul>
    </nav>
    
      </div>
     









     
     
     <div class="logo-container ">
      <img src={dogHeader} alt="" class="imagen-background imagen_active"/>
       <p class="logo-title">pawsome</p>
     </div>
     <div class="title-container-big">
     <p>Pets <br></br>
     Grooming</p>
     
     </div>  
     <div class="title-container-little">  
     <p>Treat your pet to a luxurious <br></br>
     grooming experience!</p>
     </div>
     <button class="boton-header">Book Your Appointment </button>
     
     </header>
 
    )
}
export{Header}