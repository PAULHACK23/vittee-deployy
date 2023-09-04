import React from "react";
import dog from '../../assets/perroFooter.png';
import backDog from '../../assets/detrasperrofooter.png';
import logofooter from '../../assets/logofooter.jpg';
import './footer.css';
function Footer (){
    return(
<>
<footer class="footer-container">

        <img src={dog} alt="perro-footer" class="perro-footer" />
              <section class="section-left-container">
                <ul class="cotainer-items-left">
                  <li class="items-left"><a href="#">Contact Us</a></li>
                  <li class="items-left"><a href="#">About Us</a></li>
                  <li class="items-left"><a href="#">Help Center</a></li>
                  <li class="items-left"><a href="#">FAQs</a></li>
                  <li class="items-left"><a href="#">How It work</a></li>
                </ul>
              </section>
        
        
              <section class="section-medium-container">
               
                <img src={backDog} alt="fondo-perro-footer" class="img-fondo-perro" />
                <img src={logofooter} alt="logo-footer" class="logo-footer" />
                <p class="title-logo-footer">Pawsome</p>
                <div class="container-medium-icons">
                  <p class="icons-medium"><i class="bi bi-instagram"></i></p>
                  <p class="icons-medium"><i class="bi bi-facebook"></i></p>
                  <p class="icons-medium"><i class="bi bi-twitter"></i></p>
                </div>
              </section>
        
        
              <section class="section-rigth-container">
                <ul class="cotainer-items-rigth">
                  <li class="items-rigth"><a href="#">Day Core</a></li>
                  <li class="items-rigth"><a href="#">Privacy & Policy</a></li>
                  <li class="items-rigth"><a href="#">Popular Product</a></li>
                  <li class="items-rigth"><a href="#">Call Us</a></li>
                  <li class="items-rigth"><a href="#">Blog</a></li>
                </ul>
              </section>
              <p class="by-footer-container">By Pablo Lopez 2023</p>
        
            </footer>



</>
    )
}
export { Footer }