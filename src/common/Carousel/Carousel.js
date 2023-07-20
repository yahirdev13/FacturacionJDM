import React from 'react'

//importacion de imagenes (importar la imagen y poner el nombre con el cual se va a llamar)
import img1 from '../Carousel/carrusel1.png'
import img2 from '../Carousel/carrusel2.png'
import img3 from '../Carousel/carrusel3.png'

export default function Carousel() {


    return (
        //carrusel de bbotstrap 5.3.0
        <div id="carouselExampleIndicators" class="carousel slide " data-bs-ride="carousel" style={{ width: "90%" }}>
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="1000">
                    <img src={img1} height="auto" class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                    <img src={img2} height="auto" class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item" data-bs-interval="3000">
                    <img src={img3} height="auto" class="d-block w-100" alt="..." />
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