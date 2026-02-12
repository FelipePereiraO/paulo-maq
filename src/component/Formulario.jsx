import React, { useState} from "react";
import emailjs from "emailjs-com"
import "../css/formulario.css" 
import mq from "../img/Maquinas.png"

function Formulario(){
    const [alert, setAlert] = useState("");
    const [menssage, setMenssage] = useState("");
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('gmailMenssage', 'template_ek7vrc9', e.target, '0S_x6uExmKAl6Fzi_')
          .then((result) => {
              setAlert("alert")
              setMenssage("Mensagem enviada com sucesso!")
          }, (error) => {
            setAlert("alert")
            setMenssage("Mensagem não enviada, tente novamente!")
          });
          e.target.reset()
      };

      
    return(
        <div className="containe" >
            <form onSubmit={sendEmail}>
                <div className="row">
                    <div className={alert}>
                        <p className="aviso">{menssage}</p>
                    </div>
                    <div>
                        <input type="text" className="form-control" required placeholder="Nome" name="name"/>
                    </div>
                    <div>
                        <input type="email" className="form-control" required placeholder="Email" name="email"/>
                    </div>
                    <div>
                        <input type="number" className="form-control" required placeholder="Telefone/Celular" name="telephone"/>
                    </div>
                    <div>
                        <textarea type="textarea" className="form-control" required placeholder="Mensagem" name="message"/>
                    </div>

                </div>
                <input type="submit" className="btn" />
            </form>
            <img className="maquina" alt="maquinas" src={mq}/>
        </div>
    )

}

export default Formulario;