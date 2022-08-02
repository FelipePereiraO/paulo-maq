import React from "react";
import l1 from '../img/lojas/m1.png'
import l2 from '../img/lojas/n2.png'
import '../css/lojas.css'
import Maps from "./Maps";

function Loja(){
    return(
        <div className="lojas">
            <div className="loja1">
                <div className="endereco">
                    <p>Loja 01</p>
                    <p>Bairro: Alto da Terezinha</p>
                    <p>Rua Cardeal Jean N° 112</p>
                    <hr className="hrText"/>
                </div>
                <Maps/>
                <img className="imgLoja" src={l1}/>
            </div>
             <hr className='columTwo'/>
            <div className="loja2">
                <img className="imgLoja" src={l2}/>
                <div className="endereco">
                    <p>Loja 02</p>
                    <p>Bairro: Av. Afrânio Peixoto</p>
                    <p>Plataforma N° 17GZ</p>
                    <hr className="hrText"/>
                </div>
                
            </div>
        </div>
    )
}

export default Loja;