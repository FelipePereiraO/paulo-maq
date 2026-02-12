import '../css/lojas.css'

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
                <iframe title="loja1" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.3905227292994!2d-38.47551844705835!3d-12.88259169510411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2cdef84190081e67!2sPaulo%20Maq!5e0!3m2!1spt-BR!2sbr!4v1659484934959!5m2!1spt-BR!2sbr"  allowfullscreen="" alt="loja 1" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

            </div>
             <hr className='columTwo'/>
            <div className="loja2">
            <iframe title="loja2" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d972.2994551687443!2d-38.48286477076466!3d-12.894997792148569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7161191aff77aef%3A0x8d47c9fbbda77363!2sPaulo%20Maq!5e0!3m2!1spt-BR!2sbr!4v1659485497064!5m2!1spt-BR!2sbr"  allowfullscreen="" alt="loja 2"  loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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