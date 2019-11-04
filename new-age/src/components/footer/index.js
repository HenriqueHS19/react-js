import React from 'react';

import './style.css';

const Footer = function() {
    return (
        <footer>
            <div className="icones">
                <a href="/">
                    <i class="fab fa-facebook-square"></i>
                </a>

                <a href="/">
                    <i class="fab fa-linkedin"></i>
                </a>

                <a href="/">
                    <i class="fab fa-twitter-square"></i>
                </a>
            </div>

            <hr />

            <p> Todos os direitos reservados - 2025 </p>

        </footer>
    )
}

export default Footer;