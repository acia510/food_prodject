import React from 'react';
import BG from "../BG.jpg";
import "./CallToAction.css";
/*import styled, { keyframes } from 'styled-components';
import { bounce } from 'react-animations';*/



/*const Bounce = styled.div`animation: 2s ${keyframes`${bounce}`} infinite`;*/


const CallToAction = () => {
    return (
        <div>

            <div className="bg">
                <img className="bg_img" src={BG} alt="BG" />
                <h5 className="bg_txt">The Tasty Newsletter</h5>
                <p className="bg_subtxt">Easy recipes and cooking hacks right to your inbox!</p>
                <div className="email">
                <input className="email_input" type="email" name="email" placeholder="Your email" />
                <button className="email_button" type="submit">Submit</button>
                </div>
            </div>




        </div>
    );
};

export default CallToAction;