import React from 'react';
import './BannerSlide.css';

const BannerSlide = ({ slide }) => {
    const { image, id, prev, next } = slide;
    return (

        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='carousel-img'>
                <img src={image} alt='' className="w-full rounded-xl" />
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-20 top-1/4">
                <h1 className='text-6xl font-bold text-white'>
                    Affordable <br />
                    Price for Car <br />
                    Servicing
                </h1>
            </div>
            <div className="absolute flex w-2/5 justify-end transform -translate-y-1/2 left-20 top-1/2">
                <p className='text-xl text-white'>
                    There are many variation of passages of available. But the majority have suffered alternation in some form
                </p>
            </div>
            <div className="absolute flex w-2/5 justify-start transform -translate-y-1/2 left-20 top-3/4">
                <button className="btn btn-error mr-5">Error</button>
                <button className="btn btn-outline btn-warning">Warning</button>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href={`#slide${prev}`} className="btn btn-circle mr-5">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
        </div>

    );
};

export default BannerSlide;