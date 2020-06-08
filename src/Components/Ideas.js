import React from 'react';
import './Ideas.css';
import img1 from "../Ideas/img_1.jpg";
import img2 from "../Ideas/img_2.jpg";
import img3 from "../Ideas/img_3.jpg";
import img_bg from "../pngwave.png";


const Ideas = () => {
    return (
        <div>
            <h2 className="title_ideas">New recipes every day</h2>

            <div className="container">
                <div className="popular_inner">

                    <div className="popular_item">
                        <div className="popular_image">
                            <img className="popular_img" src={img1} alt="img1"/>
                        </div>
                        <div className="popular_txt">
                        <h5 className="popular_item_title">Everything Deviled Eggs</h5>
                        <a className="popular_link" href="#">More<span className="arrow"> &rarr;</span></a>
                        </div>
                    </div>


                    <div className="popular_item">
                        <div className="popular_image">
                            <img className="popular_img" src={img2} alt="img2"/>
                        </div>
                        <div className="popular_txt">
                        <h5 className="popular_item_title">Good Fashioned Smoothie</h5>
                        <a className="popular_link" href="#">More<span className="arrow"> &rarr;</span></a>
                        </div>
                    </div>

                    <div className="popular_item">
                        <div className="popular_image">
                            <img className="popular_img" src={img3} alt="img3"/>
                        </div>
                        <div className="popular_txt">
                        <h5 className="popular_item_title">Best Brownies</h5>
                        <a className="popular_link" href="#">More<span className="arrow"> &rarr;</span></a>
                        </div>
                    </div>
                </div>
            </div>


            <div className="bg">

            <div className="container_food">
                <h2 className="main_title">Good Fashioned Smoothie</h2>
                <div className="item_data">
                    <div className="block_1">
                    <div className="block">
                        <h3 className="block_title"><li className="block_li"><span>Triple Berry Smoothie</span></li></h3>
                        <p className="block_subTitle">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                            laudantium,
                            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto.</p>
                    </div>

                    <div className="block">
                        <h3 className="block_title"><li className="block_li"><span>Pick your fruit</span></li></h3>
                        <p className="block_subTitle">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain
                            was
                            born and I will give you a complete account of the system, and expound the actual.</p>
                    </div>

                    <div className="block">
                        <h3 className="block_title"><li className="block_li"><span>Fresh or frozen fruit?</span></li></h3>
                        <p className="block_subTitle">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                            voluptatum
                            deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati.</p>
                    </div>
                    </div>


                    <div className="block_img">
                        <img className="img_bg" src={img_bg} alt="img_bg"/>
                    </div>




                    <div className="block_2">
                    <div className="block">
                        <h3 className="block_title"><li className="block_li"><span>Add a thickener</span></li></h3>
                        <p className="block_subTitle">On the other hand, we denounce with righteous indignation and dislike men who are so beguiled
                            and
                            demoralized by the charms of pleasure of the moment, so blinded by desire.</p>
                    </div>

                    <div className="block">
                        <h3 className="block_title"><li className="block_li"><span>Choose a liquid</span></li></h3>
                        <p className="block_subTitle">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                    </div>

                    <div className="block">
                        <h3 className="block_title"><li className="block_li"><span>Throw some add-ins in</span></li></h3>
                        <p className="block_subTitle">Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae
                            consequatur, vel illum qui dolorem eum fugiat.</p>
                    </div>
                    </div>

                </div>

            </div>

            </div>


        </div>
    );
};

export default Ideas;