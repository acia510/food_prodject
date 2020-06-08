import React from 'react';
import './SocialNetwork.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
    faYoutube,
    faFacebook,
    faTelegram,
    faInstagram
} from "@fortawesome/free-brands-svg-icons";

export default function SocialNetwork() {

    return(
        <div className="social_container">

            <a href="https://www.youtube.com/channel/UCJFp8uSYCjXOMnkUyb3CQ3Q" className="social Youtube">
                <FontAwesomeIcon icon={faYoutube} size="2x" />
            </a>

            <a href="https://www.facebook.com/Cooking-Recipes-1402290323372326/" className="social Facebook">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>

            <a href="https://web.telegram.org/#/login" className="social Telegram">
                <FontAwesomeIcon icon={faTelegram} size="2x" />
            </a>

            <a href="https://www.instagram.com/buzzfeedtasty/?hl=ru" className="social Instagram">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>

        </div>
    );

}



