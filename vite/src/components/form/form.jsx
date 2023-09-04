import React from "react";
import './form.css'
function Form (){
    return(
        <>
        <div class="container-contact">
                <h2 id="contact" class="hr">CONTACT</h2>
                <form action="#">
                    <div class="input-field">
                        <input type="text" required/>
                        <label>Email</label>
                    </div>
                    <div class="input-field">
                        <input type="password" required/>
                        <label>Password</label>
                    </div>
                    <div class="input-field">
                        <input type="text" required/>
                        <label>asunto</label>
                    </div>
                    <div class="input-field">
                        <input type="text" required/>
                        <label>mensaje</label>
                    </div>
                    <button type="submit">enviar</button>
                </form>
                
            </div>
        </>
    )
}
export { Form }



