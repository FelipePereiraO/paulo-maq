import React from "react";
import com1 from "../img/feedbacks/c1.PNG"
import com2 from "../img/feedbacks/c2.PNG"
import com3 from "../img/feedbacks/c3.PNG"
import com4 from "../img/feedbacks/c4.PNG"
import com5 from "../img/feedbacks/c5.PNG"
import com6 from "../img/feedbacks/c6.PNG"
import "../css/comentarios.css"
function Comentarios(){

    return(
        <div className="lista">
            <div className="border">
                <img className="coments" alt="comentario" src={com1}/>
            </div>
            <div className="border left">
                <img className="coments" alt="comentario" src={com2}/>
            </div>
            <div className="border">
                <img className="coments" alt="comentario" src={com3}/>
            </div>
            <div className="border">
                <img className="coments" alt="comentario" src={com4}/>
            </div>
            
            <div className="border">
                <img className="coments" alt="comentario" src={com5}/>
            </div>
            <div className="border">
                <img className="coments" alt="comentario" src={com6}/>
            </div>
        </div>
    )
}

export default Comentarios;