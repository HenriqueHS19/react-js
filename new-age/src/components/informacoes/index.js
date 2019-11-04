import React from 'react';

import './style.css';

const Informacoes = function(){
    return (
        <section className="info-container">
            <div className="info-item">
                <i class="fas fa-map-marker-alt"></i>
                <h4> Endereço </h4>
                <p> Rua Feliciano de Medonça, 240 </p> 
            </div>

            <div className="info-item">
                <i class="fas fa-phone"></i>
                <h4> Telefone </h4>
                <p> (11) 4002-8922 </p>
            </div>

            <div className="info-item">
                <i class="fas fa-envelope"></i>
                <h4> E-mail </h4>
                <p> newage@contato.com </p>
            </div>

        </section>
    );
}

export default Informacoes;