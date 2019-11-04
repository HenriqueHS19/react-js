import React from 'react';

import './style.css'

const Servicos = function() {
    return (
        <section className="servicos">
            <h2 className="title"> Serviços </h2>
            <hr className="separator" />
            <p className="subtitle"> Nós desenvolvemos um sistema ideal para sua empresa, independente de sua plataforma. </p>

            <div className="grid"> 

                <div className="grid-item">
                    <i class="fa fa-desktop" aria-hidden="true"></i>
                    
                    <div className="grid-text">
                        <h4> Desktop </h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur elit adipisicing , sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minimv
                        </p>
                    </div>
                    
                </div>

                <div className="grid-item">
                    <i class="fa fa-desktop" aria-hidden="true"></i>
                    
                    <div className="grid-text">
                        <h4> Desktop </h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur elit adipisicing , sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minimv
                        </p>
                    </div>

                </div>

                <div className="grid-item">
                    <i class="fa fa-mobile" aria-hidden="true"></i>
                    
                    <div className="grid-text">
                        <h4> Mobile </h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur elit adipisicing , sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minimv
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );
}

export default Servicos;