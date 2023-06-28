import React from 'react'


import img1 from '../Carousel/carrusel1.png'
import img2 from '../Carousel/carrusel2.png'
import img3 from '../Carousel/carrusel3.png'

export default function Carousel() {


    return (
        <div id="carouselExampleIndicators" class="carousel slide " data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="1000">
                    <img src={img1} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                    <img src={img2} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item" data-bs-interval="3000">
                    <img src={img3} class="d-block w-100" alt="..." />
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    )
}
{/* <div classNameName="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="10000">
                    <img src={img1} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item" data-bs-interval="20000">
                    <img src={img2} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item" data-bs-interval="30000">
                    <img src={img3} className="d-block w-100" alt="..." />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div> */}