import React from 'react';
import './Authors.css';
import img1 from "../Authors/1.jpg";
import img2 from "../Authors/2.jpg";
import img3 from "../Authors/3.jpg";
import img4 from "../Authors/4.jpg";


const Authors = () => {
    return (
        <div>
            <h2 className="title">The best authors of the week</h2>


            <div className="wrapper">

                <div className="team_list">

                    <div className="team_member">
                        <div className="image">
                            <img className="personPhoto" src={img1} alt="img1"/>
                        </div>

                        <div className="data">
                            <p className="name">Anna Shortman</p>
                            <p className="post">Chef 4 years</p>
                            <p className="description">Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                accusantium doloremque
                                laudantium, totam rem aperiam, eaque ipsa quae.</p>
                        </div>
                    </div>


                    <div className="team_member">
                        <div className="image">
                            <img className="personPhoto_2" src={img2} alt="img2"/>
                        </div>
                        <div className="data">
                            <p className="name">Dan Frippec</p>
                            <p className="post">Chef 1 year</p>
                            <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui
                                blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas
                                molestias.</p>
                        </div>
                    </div>


                    <div className="team_member">
                        <div className="image">
                            <img className="personPhoto" src={img3} alt="img3"/>
                        </div>
                        <div className="data">
                            <p className="name">Sara Calahan</p>
                            <p className="post">Chef 2,5 years</p>
                            <p className="description">But I must explain to you how all this mistaken idea of
                                denouncing pleasure and praising pain was born and I will give you a complete account of
                                the system.</p>
                        </div>
                    </div>


                    <div className="team_member">
                        <div className="image">
                            <img className="personPhoto_2" src={img4} alt="img4"/>
                        </div>
                        <div className="data">
                            <p className="name">Tomas Nicalback</p>
                            <p className="post">Chef 8 years</p>
                            <p className="description">On the other hand, we denounce with righteous indignation and
                                dislike men who are so beguiled and demoralized by the charms of pleasure of the
                                moment.</p>
                        </div>
                    </div>

                </div>

            </div>


        </div>
    );
};

export default Authors;