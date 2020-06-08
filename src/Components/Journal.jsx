import React from 'react';
import './Journal.css';
import img_bg from "../BG_2.jpg";
import img_red from "../red.jpg";
import img1 from "../1.jpg";
import img2 from "../2.jpg";
import img3 from "../3_1.jpg";


const Journal = () => {
    return (
        <div>
            <h2 className="title_journal">Journal "May" №120</h2>
            <div className="container_jn">

                <div className="wrapper_jn">
                    <div>
                        <img className="img_bg_3" src={img_bg} alt="img_bg"/>
                    </div>

                    <div className="block_person">
                        <img className="img_red" src={img_red} alt="img_red"/>
                        <h4 className="name">Mary Shackleina</h4>
                        <p className="subtitle">Chief Editor</p>
                        <p className="bracket">* * *</p>
                        <p className="description_jn">Apples are the main Russian fruit and favorite September fun. Even
                            in those years when their harvest
                            is small, the question arises of what to do with them, what to say about the season when the
                            harvest
                            is in full order. At this moment you understand that an apple can easily become a cause of
                            contention - gastronomic.
                            If in the hallway you are waiting for packages with a dozen or two kg of country apples,
                            this number
                            is for you.<br/>
                            Even in those years when their harvest
                            is small, the question arises of what to do with them, what to say about the season when the
                            harvest
                            is in full order.</p>
                    </div>

                </div>

                <h3 className="title_jn">Read our articles online</h3>

                <div className="container_articles">
                    <div className="articles_inner">

                        <div className="articles_item">
                            <div className="articles_image">
                                <img className="articles_img" src={img1} alt="img1"/>
                            </div>
                            <div>
                            <h5 className="articles_item_title">Everything Deviled Eggs</h5>
                            <p className="articles_description">Sed ut perspiciatis unde omnis iste natus error sit
                                voluptatem accusantium doloremque laudantium, totam rem aperiam...</p>
                            </div>
                        </div>


                        <div className="articles_item">
                            <div className="articles_image">
                                <img className="articles_img" src={img2} alt="img2"/>
                            </div>
                            <div>
                            <h5 className="articles_item_title">Good Fashioned Smoothie</h5>
                            <p className="articles_description">But I must explain to you how all this mistaken idea of
                                denouncing pleasure and praising pain was born and I will give you a complete...</p>
                            </div>
                        </div>

                        <div className="articles_item">
                            <div className="articles_image">
                                <img className="articles_img" src={img3} alt="img3"/>
                            </div>
                            <div>
                            <h5 className="articles_item_title">Best Brownies</h5>
                            <p className="articles_description">At vero eos et accusamus et iusto odio dignissimos
                                ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti...</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    );
};

export default Journal;