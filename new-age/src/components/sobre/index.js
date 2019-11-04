import React from 'react';

import './style.css';

const Sobre = function() {
    return(
        <section className="sobre">
            <h2 className="title"> Sobre nós </h2>

            <hr className="separator"/> 

            <p className="subtitle"> A New Age, é uma empresa especilizada no desenvolvimento de sistemas informatizados </p>

            <div className="container">
                <div className="item">
                    <i class="fa fa-bullseye" aria-hidden="true"></i>
                    <h4> Missão </h4>
                    <p> Oferecer serviços com agilidade, compromentimento, agregando valores e inovações aos negócios de nossos clientes. </p>
                </div>

                <div className="item">
                    <i class="fas fa-chart-line"></i> 
                    <h4> Visão </h4>
                    <p> Torna-se referência no estado de São Paulo no prazo de cinco anos. </p>
                </div>

                <div className="item">
                    <i class="fas fa-clipboard-list"></i>
                    <h4> Valores </h4>
                    <p> Ética; <br /> Compromentimento; <br /> Responsabilidade </p>
                </div>
            </div>

        </section>
    );
}

export default Sobre;