import React from 'react';

import './style.css';

//img
import claudio from '../../img/equipe/claudio.jpg';
import douglas from '../../img/equipe/douglas.jpg';
import felipe from '../../img/equipe/felipe.jpg';
import gustavoG from '../../img/equipe/gustavoG.jpg';
import gustavoJ from '../../img/equipe/gustavoJ.jpg';
import henrique from '../../img/equipe/henrique.jpg';

const Equipe = function() {
    return (
        <section className="section"> 
            <h2 className="title"> Equipe </h2>
            <hr className="separator" />
            <p className="subtitle"> Conheça o nosso time </p>

            <div className="grid-team">
                
                <div className="item-team">
                    <img src={claudio} alt="claudio"></img>
                    
                    <div className="item-text">
                        <h4> Claudio Júnior </h4>
                        <p> Vagabundo 01 </p>
                        <span> 
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </span>

                        <div className="icons-team">
                            <a href="/"> 
                                <i class="fab fa-facebook"></i>
                            </a>
                            <a href="/">
                                <i class="fab fa-linkedin"></i>    
                            </a>
                            <a href="/">
                                <i class="fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="item-team">
                    <img src={douglas} alt="Douglas"></img>

                    <div className="item-text">
                        <h4> Douglas Rodrigo </h4>
                        <p> Vagabundo 02</p>
                        <span>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </span>

                        <div className="icons-team">
                            <a href="/">
                                <i class="fab fa-facebook"></i>
                            </a>
                            <a href="/">
                                <i class="fab fa-linkedin"></i>
                            </a>
                            <a href="/">
                                <i class="fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="item-team">
                    <img src={felipe} alt="felipe"></img>

                    <div className="item-text">
                        <h4> Felipe Yuki </h4>
                        <p> Vagabundo 03 </p>
                        <span>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </span>

                        <div className="icons-team">
                            <a href="/">
                                <i class="fab fa-facebook"></i>
                            </a>
                            <a href="/">
                                <i class="fab fa-linkedin"></i>
                            </a>
                            <a href="/">
                                <i class="fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                </div>


                <div className="item-team">
                    <img src={gustavoG} alt="gustavoG"></img>

                    <div className="item-text">
                        <h4> Gustavo Gonzaga </h4>
                        <p> Vagabundo 04 </p>
                        <span>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </span>

                        <div className="icons-team">
                            <a href="/">
                                <i class="fab fa-facebook"></i>
                            </a>
                            <a href="/">
                                <i class="fab fa-linkedin"></i>
                            </a>
                            <a href="/">
                                <i class="fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                </div>


                <div className="item-team">
                    <img src={gustavoJ} alt="gustavoJ"></img>

                    <div className="item-text">
                        <h4> Gustavo Jesus </h4>
                        <p> Vagabundo 05 </p>
                        <span>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </span>

                        <div className="icons-team">
                            <a href="/">
                                <i class="fab fa-facebook"></i>
                            </a>
                            <a href="/">
                                <i class="fab fa-linkedin"></i>
                            </a>
                            <a href="/">
                                <i class="fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="item-team">
                    <img src={henrique} alt="henrique"></img>

                    <div className="item-text">
                        <h4> Henrique </h4>
                        <p> Vagabundo 06 </p>
                        <span>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </span>

                        <div className="icons-team">
                            <a href="/">
                                <i class="fab fa-facebook"></i>
                            </a>
                            <a href="/">
                                <i class="fab fa-linkedin"></i>
                            </a>
                            <a href="/">
                                <i class="fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                </div>

            </div>

        </section>
    );
}

export default Equipe;