import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (

        <footer role="contentinfo">

            Created by
             <a href="https://github.com/cohencodes" target="blank"> <FontAwesomeIcon icon={faGithub} />  Alon Cohen</a>

            <a href="https://github.com/jonespi" target="blank"> <FontAwesomeIcon icon={faGithub} />  Jonathan Espinosa</a>

            <a href="https://github.com/anyasnow" target="blank"> <FontAwesomeIcon icon={faGithub} />  Anya Snow </a>


        </footer>

    )
}

export default Footer

