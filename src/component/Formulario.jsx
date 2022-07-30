import React, {form} from "react";
import emailjs from "emailjs-com"
import "../css/formulario.css" 
import mq from "../img/Maquinas.png"

function Formulario(){

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('gmailMenssage', 'template_ek7vrc9', e.target, '0S_x6uExmKAl6Fzi_')
          .then((result) => {
              alert(result.text);
          }, (error) => {
            alert(error.text);
          });
          e.target.reset()
      };

      
    return(
        <div className="containe" >
            <form onSubmit={sendEmail}>
                <div className="row">
                    <div className="">
                        <input type="text" className="form-control" required placeholder="Nome" name="name"/>
                    </div>
                    <div className="col-lg-8 col-sm-12 form-group pt-1 mx-auto">
                        <input type="email" className="form-control" required placeholder="Email" name="email"/>
                    </div>
                    <div className="col-lg-8 col-sm-12 form-group pt-1 mx-auto">
                        <textarea type="textarea" className="form-control" required placeholder="Mensagem" name="message"/>
                    </div>

                </div>
                <input type="submit" className="btn" />
            </form>
            <img className="maquina" src={mq}/>
        </div>
    )

}

export default Formulario;