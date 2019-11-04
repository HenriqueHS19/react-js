import React from 'react';

import './style.css';

const Contato = function(){
    return (
        <section className="section">
            <h2 className="title"> Contato </h2>
            <hr className="separator" />
            <p className="subtitle"> Entre em contato com a New Age </p>

            <form>
                <input type="text" placeholder="Nome"></input>
                <input type="email" placeholder="E-mail"></input>
                <textarea placeholder="Digite sua mensagem..."></textarea>
                <button type="submit"> Enviar </button>
            </form>
            
        </section>
    );
}

export default Contato;