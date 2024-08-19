'use client';
import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.min.css';

const Banner = () => {
    return (
        <>
        <div className="carousel-inner">
            <div className="carousel-item active">
            <img src="/images/banner-1.png" className="d-block w-100" alt="Banner Image 1" />
            </div>
            <div className="carousel-item">
            <img src="/images/banner-2.png" className="d-block w-100" alt="Banner Image 2" />
            </div>
            <div className="carousel-item">
            <img src="/images/banner-3.png" className="d-block w-100" alt="Banner Image 3" />
            </div>
        </div>
        <Link className="carousel-control-prev" href="#bannerCarousel" role="button" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </Link>
        <Link className="carousel-control-next" href="#bannerCarousel" role="button" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </Link>   
        </>
    );
};

export default Banner;
